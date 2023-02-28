<script>
    import Main from "$box/main.svelte";
    import Me from "$img/me.jpg";
</script>

<svelte:head>
    <title>About</title>
</svelte:head>

<Main>
    <div class="absolute px-4">
        <img src="{Me}" alt="Jacob Barker" class="w-60 h-[19.5rem] rounded-lg" />
        <caption class="w-60 flex flex-row items-center justify-center text-mid-pink">
            <span>This is me!</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 absolute right-4 motion-safe:animate-bounce-side">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
        </caption>
    </div>
    <header class="mt-12 grid justify-center">
        <div class="w-fit px-4 border-b-2 border-light-purple/25">
            <h1>About</h1>
            <p>Learn all about me and this site!</p>
        </div>
    </header>
    <article class="pt-4">
        <div class="grid justify-center">
            <h2 class="border-b-[1px] w-fit px-4 border-light-purple/25">About me</h2>
        </div>
        <p class="text-lg">Hi, I'm Jacob. My picture is on the left, and I'm the one who made this site.</p>
    </article>
</Main>