<script lang="ts">
    import { page } from "$app/stores";
    import Main from "$box/main.svelte";

    let err:any = $page.error?.message;
</script>
<svelte:head>
    <title>Error: {err}</title>
</svelte:head>

<Main>
    <h1>Error :(</h1>
    <p>I'm sorry, but there was an error somewhere along the way. Please make sure you have the right URL entered and try again.
        <br>If the problems persist please contact me <a href="mailto:barkej226148@prescott.k12.wi.us" target="_blank" rel="noopener noreferrer" class="link hover:text-red-700 decoration-red-700">here</a> and I'll try and fix it soon :)
    </p>
    <h2>Error code:</h2>
    <p>{err}</p>
</Main>