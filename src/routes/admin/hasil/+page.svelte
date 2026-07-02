<script>
	let { data } = $props();
	let daftarHasil = $derived(data.daftarHasil);
</script>

<main>
	<h1>Rekap Hasil Ujian Siswa</h1>
	<a href="/admin">← Kembali ke Admin</a>

	{#if daftarHasil.length === 0}
		<p>Belum ada siswa yang mengerjakan ujian.</p>
	{:else}
		<table>
			<thead>
				<tr>
					<th>Nama</th>
					<th>Skor</th>
					<th>Total Soal</th>
					<th>Persentase</th>
					<th>Waktu</th>
				</tr>
			</thead>
			<tbody>
				{#each daftarHasil as hasil}
					<tr>
						<td>{hasil.nama_siswa}</td>
						<td>{hasil.skor}</td>
						<td>{hasil.total_soal}</td>
						<td>{Math.round((hasil.skor / hasil.total_soal) * 100)}%</td>
						<td>{new Date(hasil.created_at).toLocaleString('id-ID')}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	{/if}
</main>

<style>
	main {
		max-width: 700px;
		margin: 60px auto;
		font-family: sans-serif;
		padding: 0 16px;
	}

	a {
		display: inline-block;
		margin-bottom: 24px;
		color: #ff3e00;
	}

	table {
		width: 100%;
		border-collapse: collapse;
		margin-top: 16px;
	}

	th, td {
		text-align: left;
		padding: 10px;
		border-bottom: 1px solid #eee;
	}

	th {
		background: #f9f9f9;
		font-weight: bold;
	}
</style>