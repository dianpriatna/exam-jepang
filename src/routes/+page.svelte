<script>
	import Soal from '$lib/Soal.svelte';
	import { supabase } from '$lib/supabase.js';

	let { data } = $props();
	let daftarSoal = $derived(data.daftarSoal);

	let nomorSoal = $state(0);
	let jawabanDipilih = $state(null);
	let sudahSubmit = $state(false);
	let skor = $state(0);
	let selesai = $state(false);
	let sisaWaktu = $state(30); // detik per soal

	let soalSekarang = $derived(daftarSoal[nomorSoal]);

	let namaSiswa = $state('');
	let ujianDimulai = $state(false);

	// Efek timer: jalan tiap detik selama ujian belum selesai & belum submit
	$effect(() => {
		if (selesai || sudahSubmit) return;

		const interval = setInterval(() => {
			if (sisaWaktu > 0) {
				sisaWaktu -= 1;
			} else {
				submitJawaban(); // waktu habis, otomatis submit
			}
		}, 1000);

		return () => clearInterval(interval); // bersihkan timer lama tiap kali efek re-run
	});

	function submitJawaban() {
		sudahSubmit = true;
		if (jawabanDipilih === soalSekarang.jawaban_benar) {
			skor += 1;
		}
	}

	async function soalBerikutnya() {
    if (nomorSoal < daftarSoal.length - 1) {
        nomorSoal += 1;
        jawabanDipilih = null;
        sudahSubmit = false;
        sisaWaktu = 30;
    } else {
        selesai = true;
        await simpanHasil();
    }
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
</script>

<main>
    <h1>Latihan Bahasa Jepang 🇯🇵</h1>

    {#if !ujianDimulai}
        <div class="soal">
            <label>
                Nama Kamu
                <input type="text" bind:value={namaSiswa} placeholder="Masukkan nama..." />
            </label>
            <button onclick={() => ujianDimulai = true} disabled={!namaSiswa.trim()}>
                Mulai Ujian
            </button>
        </div>
    {:else if !selesai}
    
    <p class="progress">Soal {nomorSoal + 1} dari {daftarSoal.length}</p>

    <div class="progress-bar-luar">
        <div class="progress-bar-dalam" style="width: {((nomorSoal + 1) / daftarSoal.length) * 100}%"></div>
    </div>

    <p class="timer" class:waktu-kritis={sisaWaktu <= 10}>
        ⏱️ {sisaWaktu} detik
    </p>

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

    .progress-bar-luar {
    width: 100%;
    height: 8px;
    background: #eee;
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 16px;
}

.progress-bar-dalam {
    height: 100%;
    background: #ff3e00;
    transition: width 0.3s ease;
}

.timer {
    font-size: 1.1rem;
    font-weight: bold;
    color: #333;
}

.waktu-kritis {
    color: red;
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
</style>