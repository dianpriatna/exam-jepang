<script>
	let jawabanDipilih = $state(null);
	let sudahSubmit = $state(false);

	const soal = {
		pertanyaan: 'Apa arti dari kata "食べる" (taberu)?',
		pilihan: ['Minum', 'Makan', 'Tidur', 'Lari'],
		jawabanBenar: 'Makan'
	};

	function submitJawaban() {
		sudahSubmit = true;
	}
</script>

<main>
	<h1>Latihan Bahasa Jepang 🇯🇵</h1>

	<div class="soal">
		<p class="pertanyaan">{soal.pertanyaan}</p>

		{#each soal.pilihan as pilihan}
			<label class="pilihan">
				<input
					type="radio"
					name="jawaban"
					value={pilihan}
					bind:group={jawabanDipilih}
					disabled={sudahSubmit}
				/>
				{pilihan}
			</label>
		{/each}

		{#if !sudahSubmit}
			<button onclick={submitJawaban} disabled={!jawabanDipilih}>
				Jawab
			</button>
		{:else}
			<p class="hasil" class:benar={jawabanDipilih === soal.jawabanBenar} class:salah={jawabanDipilih !== soal.jawabanBenar}>
				{jawabanDipilih === soal.jawabanBenar ? '✅ Benar!' : `❌ Salah. Jawaban benar: ${soal.jawabanBenar}`}
			</p>
		{/if}
	</div>
</main>

<style>
	main {
		max-width: 500px;
		margin: 60px auto;
		font-family: sans-serif;
		text-align: center;
	}

	.soal {
		border: 1px solid #ddd;
		border-radius: 12px;
		padding: 24px;
		margin-top: 24px;
	}

	.pertanyaan {
		font-size: 1.2rem;
		margin-bottom: 16px;
	}

	.pilihan {
		display: block;
		text-align: left;
		padding: 8px;
		margin: 4px 0;
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

	.hasil {
		margin-top: 16px;
		font-weight: bold;
	}

	.benar { color: green; }
	.salah { color: red; }
</style>