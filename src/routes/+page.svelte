<script>
	import Soal from '$lib/Soal.svelte';
	import { supabase } from '$lib/supabase.js';

	let { data } = $props();
	let daftarSoal = $derived(data.daftarSoal);

	const WAKTU_TOTAL = 30 * 60; // 30 menit dalam detik

	let namaSiswa = $state('');
	let ujianDimulai = $state(false);
	let selesai = $state(false);
	let sisaWaktu = $state(WAKTU_TOTAL);

	let jawabanSiswa = $state([]);
	let nomorSoalAktif = $state(0);
	let skor = $state(0);

	let tampilkanModal = $state(false);

	let soalAktif = $derived(daftarSoal[nomorSoalAktif]);
	let jumlahBelumDijawab = $derived(jawabanSiswa.filter((j) => j === null).length);

	// Timer keseluruhan ujian
	$effect(() => {
		if (!ujianDimulai || selesai) return;

		const interval = setInterval(() => {
			if (sisaWaktu > 0) {
				sisaWaktu -= 1;
			} else {
				selesaikanUjian(); // waktu habis, otomatis submit tanpa konfirmasi
			}
		}, 1000);

		return () => clearInterval(interval);
	});

	function mulaiUjian() {
		jawabanSiswa = new Array(daftarSoal.length).fill(null);
		ujianDimulai = true;
	}

	function pergiKeSoal(index) {
		nomorSoalAktif = index;
	}

	function soalSebelumnya() {
		if (nomorSoalAktif > 0) nomorSoalAktif -= 1;
	}

	function soalSelanjutnya() {
		if (nomorSoalAktif < daftarSoal.length - 1) nomorSoalAktif += 1;
	}

	function klikSubmit() {
		tampilkanModal = true;
	}

	function batalSubmit() {
		tampilkanModal = false;
	}

	function keSoalBelumDijawab() {
		const index = jawabanSiswa.findIndex((j) => j === null);
		if (index !== -1) nomorSoalAktif = index;
		tampilkanModal = false;
	}

	async function selesaikanUjian() {
		tampilkanModal = false;
		skor = jawabanSiswa.filter((jawaban, i) => jawaban === daftarSoal[i].jawaban_benar).length;
		selesai = true;
		await simpanHasil();
	}

	async function simpanHasil() {
		const { error } = await supabase.from('hasil_ujian').insert({
			nama_siswa: namaSiswa,
			skor: skor,
			total_soal: daftarSoal.length
		});

		if (error) {
			console.error('Gagal simpan hasil:', error);
		}
	}

	function formatWaktu(detik) {
		const menit = Math.floor(detik / 60);
		const sisaDetik = detik % 60;
		return `${menit}:${sisaDetik.toString().padStart(2, '0')}`;
	}
</script>

<main>
	<h1>Latihan Bahasa Jepang 🇯🇵</h1>

	{#if !ujianDimulai}
		<div class="kartu">
			<label>
				Nama Kamu
				<input type="text" bind:value={namaSiswa} placeholder="Masukkan nama..." />
			</label>
			<button onclick={mulaiUjian} disabled={!namaSiswa.trim()}>
				Mulai Ujian
			</button>
		</div>
	{:else if !selesai}
		<div class="area-ujian">
			<aside class="sidebar">
				<p class="timer" class:waktu-kritis={sisaWaktu <= 60}>
					⏱️ {formatWaktu(sisaWaktu)}
				</p>
				<div class="grid-nomor">
					{#each daftarSoal as _, i}
						<button
							class="nomor"
							class:aktif={i === nomorSoalAktif}
							class:terjawab={jawabanSiswa[i] !== null}
							onclick={() => pergiKeSoal(i)}
						>
							{i + 1}
						</button>
					{/each}
				</div>
			</aside>

			<div class="konten-soal">
				<p class="progress">Soal {nomorSoalAktif + 1} dari {daftarSoal.length}</p>

				<Soal soal={soalAktif} bind:jawabanDipilih={jawabanSiswa[nomorSoalAktif]} />

				<div class="navigasi">
					<button onclick={soalSebelumnya} disabled={nomorSoalAktif === 0}>
						← Sebelumnya
					</button>
				
					{#if nomorSoalAktif < daftarSoal.length - 1}
						<button onclick={soalSelanjutnya}>Selanjutnya →</button>
					{:else}
						<button class="btn-submit" onclick={klikSubmit}>Submit Jawaban</button>
					{/if}
				</div>

				<!-- {#if nomorSoalAktif === daftarSoal.length - 1}
					<button class="btn-submit-alt" onclick={klikSubmit}>Submit Jawaban Sekarang</button>
				{/if} -->
			</div>
		</div>

		{#if tampilkanModal}
			<div class="modal-overlay">
				<div class="modal">
					{#if jumlahBelumDijawab > 0}
						<h3>⚠️ Masih Ada Soal Belum Dijawab</h3>
						<p>Ada {jumlahBelumDijawab} soal yang belum kamu jawab. Mau submit apa adanya, atau kembali jawab dulu?</p>
						<div class="modal-tombol">
							<button onclick={keSoalBelumDijawab}>Kembali Jawab</button>
							<button class="btn-submit" onclick={selesaikanUjian}>Submit Seadanya</button>
						</div>
					{:else}
						<h3>Yakin Submit Jawaban?</h3>
						<p>Semua {daftarSoal.length} soal sudah kamu jawab. Setelah submit, jawaban tidak bisa diubah lagi.</p>
						<div class="modal-tombol">
							<button onclick={batalSubmit}>Batal</button>
							<button class="btn-submit" onclick={selesaikanUjian}>Ya, Submit</button>
						</div>
					{/if}
				</div>
			</div>
		{/if}
	{:else}
		<div class="kartu">
			<h2>Ujian Selesai! 🎉</h2>
			<p class="skor-akhir">Skor kamu: {skor} / {daftarSoal.length}</p>
		</div>
	{/if}
</main>

<style>
	main {
		max-width: 700px;
		margin: 40px auto;
		font-family: sans-serif;
		text-align: center;
		padding: 0 16px;
	}

	.kartu {
		border: 1px solid #ddd;
		border-radius: 12px;
		padding: 24px;
		margin-top: 24px;
	}

	label {
		display: block;
		text-align: left;
		font-weight: bold;
		margin-bottom: 16px;
	}

	input[type="text"] {
		width: 100%;
		padding: 8px;
		border: 1px solid #ccc;
		border-radius: 6px;
		font-size: 1rem;
		margin-top: 4px;
		box-sizing: border-box;
	}

	button {
		padding: 10px 20px;
		border-radius: 8px;
		border: none;
		background: #ff3e00;
		color: white;
		font-size: 1rem;
		cursor: pointer;
	}

	button:disabled {
		background: #ccc;
		cursor: not-allowed;
	}

	.area-ujian {
		display: flex;
		gap: 24px;
		margin-top: 16px;
		text-align: left;
	}

	.sidebar {
		width: 160px;
		flex-shrink: 0;
	}

	.timer {
		font-size: 1.1rem;
		font-weight: bold;
		text-align: center;
		margin-bottom: 12px;
	}

	.waktu-kritis {
		color: red;
	}

	.grid-nomor {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 8px;
	}

	.nomor {
		background: white;
		color: #333;
		border: 1px solid #ccc;
		padding: 8px 0;
		font-size: 0.9rem;
	}

	.nomor.aktif {
		border-color: #ff3e00;
		border-width: 2px;
		font-weight: bold;
	}

	.nomor.terjawab {
		opacity: 0.4;
		background: #f0f0f0;
	}

	.konten-soal {
		flex: 1;
	}

	.progress {
		color: #666;
		margin-bottom: 4px;
	}

	.navigasi {
		display: flex;
		justify-content: space-between;
		margin-top: 16px;
		gap: 8px;
	}

	.btn-submit, .btn-submit-alt {
		background: #16a34a;
	}

	.btn-submit-alt {
		width: 100%;
		margin-top: 12px;
	}

	.skor-akhir {
		font-size: 1.5rem;
		font-weight: bold;
		color: #ff3e00;
	}

	.modal-overlay {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.5);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 16px;
	}

	.modal {
		background: white;
		border-radius: 12px;
		padding: 24px;
		max-width: 400px;
		width: 100%;
	}

	.modal-tombol {
		display: flex;
		gap: 8px;
		margin-top: 16px;
		justify-content: flex-end;
	}

	@media (max-width: 600px) {
		.area-ujian {
			flex-direction: column;
		}
		.sidebar {
			width: 100%;
		}
		.grid-nomor {
			grid-template-columns: repeat(8, 1fr);
		}
	}
</style>