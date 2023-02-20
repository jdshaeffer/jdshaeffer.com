<script lang="ts">
	import { supabase } from '$lib/supabaseClient';

	let loading = false;
	let email: string;
	const redirectUrl =
		process.env.NODE_ENV === 'production' ? 'https://jdshaeffer.com/' : 'http://localhost:5173';

	const handleLogin = async () => {
		console.log('handling login...');
		try {
			loading = true;
			const { error } = await supabase.auth.signInWithOtp({
				email,
				options: {
					emailRedirectTo: redirectUrl
				}
			});
			console.log(error);
			if (error) throw error;
			alert('Check your email for the login link.');
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		} finally {
			loading = false;
		}
	};
</script>

<form class="row flex-center flex" on:submit|preventDefault={handleLogin}>
	<div class="col-6 form-widget">
		<h1 class="header">Supabase + SvelteKit</h1>
		<p class="description">Sign in via magic link with your email below</p>
		<p>env: {process.env.NODE_ENV}</p>
		<p>site_url: {process.env.NEXT_PUBLIC_SITE_URL}</p>
		<p>vercel_url: {process.env.NEXT_PUBLIC_VERCEL_URL}</p>
		<p>
			manual_url: {process.env.NODE_ENV === 'production'
				? 'https://jdshaeffer.com/'
				: 'http://localhost:5173'}
		</p>
		<div>
			<input class="inputField" type="email" placeholder="Your email" bind:value={email} />
		</div>
		<div>
			<input
				type="submit"
				class="button block"
				value={loading ? 'Loading' : 'Send magic link'}
				disabled={loading}
			/>
		</div>
	</div>
</form>
