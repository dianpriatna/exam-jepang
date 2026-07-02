<script>
	import { supabase } from '$lib/supabase.js';
	import { goto } from '$app/navigation';

	let email = $state('');
	let password = $state('');
	let pesanError = $state('');
	let sedangLogin = $state(false);

	async function login() {
		sedangLogin = true;
		pesanError = '';

		const { error } = await supabase.auth.signInWithPassword({ email, password });

		sedangLogin = false;

		if (error) {
			pesanError = 'Email atau password salah';
		} else {
			goto('/admin');
		}
	}
</script>

<main>
	<h1>Login Admin</h1>

	<form onsubmit={(e) => { e.preventDefault(); login(); }}>
		<label>
			Email
			<input type="email" bind:value={email} required />
		</label>
		<label>
			Password
			<input type="password" bind:value={password} required />
		</label>

		<button type="submit" disabled={sedangLogin}>
			{sedangLogin ? 'Masuk...' : 'Masuk'}
		</button>

		{#if pesanError}
			<p class="error">{pesanError}</p>
		{/if}
	</form>
</main>

<style>
	main {
		max-width: 400px;
		margin: 100px auto;
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

	input {
		padding: 8px;
		border: 1px solid #ccc;
		border-radius: 6px;
		font-size: 1rem;
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

	.error {
		color: red;
		font-weight: bold;
	}
</style>