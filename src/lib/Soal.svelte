<script>
	let { soal, jawabanDipilih = $bindable(), sudahSubmit } = $props();
</script>

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

	{#if sudahSubmit}
		<p class="hasil" class:benar={jawabanDipilih === soal.jawabanBenar} class:salah={jawabanDipilih !== soal.jawabanBenar}>
			{jawabanDipilih === soal.jawabanBenar ? '✅ Benar!' : `❌ Salah. Jawaban benar: ${soal.jawabanBenar}`}
		</p>
	{/if}
</div>

<style>
	.soal {
		border: 1px solid #ddd;
		border-radius: 12px;
		padding: 24px;
		margin-top: 16px;
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

	.hasil {
		margin-top: 16px;
		font-weight: bold;
	}

	.benar { color: green; }
	.salah { color: red; }
</style>