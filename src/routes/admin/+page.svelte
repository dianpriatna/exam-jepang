<script>
	import { supabase } from '$lib/supabase.js';

	let pertanyaan = $state('');
	let pilihan1 = $state('');
	let pilihan2 = $state('');
	let pilihan3 = $state('');
	let pilihan4 = $state('');
	let jawabanBenar = $state('');
	let statusPesan = $state('');
	let sedangMenyimpan = $state(false);

	async function simpanSoal() {
		if (!pertanyaan || !pilihan1 || !pilihan2 || !pilihan3 || !pilihan4 || !jawabanBenar) {
			statusPesan = '⚠️ Semua field harus diisi';
			return;
		}

		sedangMenyimpan = true;
		statusPesan = '';

		const { error } = await supabase.from('soal').insert({
			pertanyaan,
			pilihan: [pilihan1, pilihan2, pilihan3, pilihan4],
			jawaban_benar: jawabanBenar
		});

		sedangMenyimpan = false;

		if (error) {
			statusPesan = `❌ Gagal simpan: ${error.message}`;
		} else {
			statusPesan = '✅ Soal berhasil disimpan!';
			// reset form
			pertanyaan = '';
			pilihan1 = '';
			pilihan2 = '';
			pilihan3 = '';
			pilihan4 = '';
			jawabanBenar = '';
		}
	}

	async function logout() {
    await supabase.auth.signOut();
    window.location.href = '/login';
}
</script>

<main>
	<button onclick={logout} class="logout-btn">Logout</button>
	<h1>Tambah Soal Baru</h1>

	<form onsubmit={(e) => { e.preventDefault(); simpanSoal(); }}>
		<label>
			Pertanyaan
			<textarea bind:value={pertanyaan} rows="2"></textarea>
		</label>

		<label>
			Pilihan 1
			<input type="text" bind:value={pilihan1} />
		</label>
		<label>
			Pilihan 2
			<input type="text" bind:value={pilihan2} />
		</label>
		<label>
			Pilihan 3
			<input type="text" bind:value={pilihan3} />
		</label>
		<label>
			Pilihan 4
			<input type="text" bind:value={pilihan4} />
		</label>

		<label>
			Jawaban Benar (harus sama persis dengan salah satu pilihan di atas)
			<input type="text" bind:value={jawabanBenar} />
		</label>

		<button type="submit" disabled={sedangMenyimpan}>
			{sedangMenyimpan ? 'Menyimpan...' : 'Simpan Soal'}
		</button>

		{#if statusPesan}
			<p class="status">{statusPesan}</p>
		{/if}
	</form>
</main>

<style>
	main {
		max-width: 500px;
		margin: 60px auto;
		font-family: sans-serif;
		padding: 0 16px;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 16px;
		margin-top: 24px;
	}

	label {
		display: flex;
		flex-direction: column;
		gap: 4px;
		font-weight: bold;
	}

	input, textarea {
		padding: 8px;
		border: 1px solid #ccc;
		border-radius: 6px;
		font-size: 1rem;
		font-family: inherit;
	}

	button {
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

	.status {
		font-weight: bold;
	}

	.logout-btn {
    background: #666;
    margin-bottom: 16px;
}
</style>