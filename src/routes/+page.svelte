<!-- <script>
	import { page } from '$app/stores';
	import Account from './Account.svelte';
	import Auth from './Auth.svelte';
</script>

<svelte:head>
	<title>Supabase + SvelteKit</title>
	<meta name="description" content="SvelteKit using supabase-js v2" />
</svelte:head>

{#if !$page.data.session}
	<Auth />
{:else}
	<Account session={$page.data.session} />
{/if} -->

<main>
	<div class="app">
		<h2>JD Shaeffer</h2>
		<small>Sr. Software Engineer at Butterfly Network, Inc.</small>
		<small>
			Find me on <a href="https://github.com/jdshaeffer/">GitHub</a> or
			<a href="https://www.linkedin.com/in/jd-s-0b5751132/">LinkedIn</a>.
		</small>
		<h4>Some projects:</h4>
		<ul style="margin-top: -20px">
			<small>
				<li>
					<a href="https://nycmud.com/">NYCMUD</a>: an online multiplayer text game set in NYC
					(pre-release).
				</li>
			</small>
		</ul>
	</div>
</main>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		font-family: monospace;
		background-color: #282c34;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.app {
		text-align: left;
		background-color: #282c34;
		display: flex;
		flex-direction: column;
		font-size: 27px;
		color: white;
		padding-left: 50px;
		padding-top: 100px;
	}

	a:link {
		color: white;
	}

	a:visited {
		color: white;
	}
</style>
