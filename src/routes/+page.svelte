<script>
	import { daftarSoal } from '$lib/soal.js';
	import Soal from '$lib/Soal.svelte';

	let nomorSoal = $state(0);
	let jawabanDipilih = $state(null);
	let sudahSubmit = $state(false);
	let skor = $state(0);
	let selesai = $state(false);

	let soalSekarang = $derived(daftarSoal[nomorSoal]);

	function submitJawaban() {
		sudahSubmit = true;
		if (jawabanDipilih === soalSekarang.jawabanBenar) {
			skor += 1;
		}
	}

	function soalBerikutnya() {
		if (nomorSoal < daftarSoal.length - 1) {
			nomorSoal += 1;
			jawabanDipilih = null;
			sudahSubmit = false;
		} else {
			selesai = true;
		}
	}
</script>

<main>
	<h1>Latihan Bahasa Jepang 🇯🇵</h1>

	{#if !selesai}
		<p class="progress">Soal {nomorSoal + 1} dari {daftarSoal.length}</p>

		<Soal soal={soalSekarang} bind:jawabanDipilih {sudahSubmit} />

		{#if !sudahSubmit}
			<button onclick={submitJawaban} disabled={!jawabanDipilih}>
				Jawab
			</button>
		{:else}
			<button onclick={soalBerikutnya}>
				{nomorSoal < daftarSoal.length - 1 ? 'Soal Berikutnya' : 'Lihat Hasil'}
			</button>
		{/if}
	{:else}
		<div class="soal">
			<h2>Ujian Selesai! 🎉</h2>
			<p class="skor-akhir">Skor kamu: {skor} / {daftarSoal.length}</p>
		</div>
	{/if}
</main>

<style>
	main {
		max-width: 500px;
		margin: 60px auto;
		font-family: sans-serif;
		text-align: center;
	}

	.progress {
		color: #666;
		margin-bottom: 8px;
	}

	.soal {
		border: 1px solid #ddd;
		border-radius: 12px;
		padding: 24px;
		margin-top: 16px;
	}

	button {
		margin-top: 16px;
		padding: 10px 24px;
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

	.skor-akhir {
		font-size: 1.5rem;
		font-weight: bold;
		color: #ff3e00;
	}
</style>