<script>
	let { soal, jawabanDipilih = $bindable() } = $props();
</script>

<div class="soal">
	<p class="pertanyaan">{soal.pertanyaan}</p>

	{#each soal.pilihan as pilihan}
		<label class="pilihan" class:terpilih={jawabanDipilih === pilihan}>
			<input type="radio" name="jawaban" value={pilihan} bind:group={jawabanDipilih} />
			{pilihan}
		</label>
	{/each}
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
		padding: 10px;
		margin: 4px 0;
		border-radius: 8px;
		border: 1px solid #eee;
	}

	.terpilih {
		background: #fff0eb;
		border-color: #ff3e00;
	}
</style>