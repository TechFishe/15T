<script>
    import Main from "$box/main.svelte";
    import AlbumBtn from "$btn/albumBtn.svelte";
    import HurImg from '$img/hurricaneNoBG.png';
    import Comment from "$box/comment.svelte";
</script>

<svelte:head>
    <title>Home</title>
</svelte:head>

<Main>
    <h1 class="mt-12">Welcome</h1>
    <p class="px-56 text-lg">
        Welcome to the Planet 15T Website, home to all of my music.
        Looking for my music? Go up to the bouncing arrow to open the menu and select the music button. You can also click <a href="/Music" class="link hover:text-mid-pink decoration-mid-pink">Here</a> and also get there.
        Wanting to know more about me? Again open the menu and select the about button. You can also click <a href="/About" class="link hover:text-mid-pink decoration-mid-pink">Here</a> and also get there.
    </p>
    <article class="mt-24 w-screen">
        <h3 class="font-bold font-mono text-3xl mb-2 border-b-2 border-light-purple/15 w-fit px-4">Comments from Planet 15T Fans:</h3>
        <section class="grid grid-rows-1 grid-cols-6 gap-x-4 px-8 pt-4">
            <Comment name="Lucas Gale">Wow, this really sounds like professional music!</Comment>
            <Comment name="Isaac Akey">First</Comment>
            <Comment name="Sally Student">This inspired me to make my own music!</Comment>
            <Comment name="Terry Teacher">When&rsquo;s your next song coming out?!</Comment>
            <Comment name="Paul Principle">I can&rsquo;t stop listening</Comment>
            <Comment name="Will Packard">What&rsquo;s the hexadecimal for red?</Comment>
        </section>
    </article>
    <article class="absolute left-4 top-0">
        <h4 class="font-semibold font-mono text-3xl mb-2 border-b-2 border-light-purple/15">Recent Music</h4>
        <section class="grid grid-rows-1 grid-flow-col mt-2 justify-center">
            <AlbumBtn URL="/Music/HPt2" title="Hurricane Pt. 2">
                <img src="{HurImg}" alt="Hurricane Pt. 2 Pic" class="h-44 w-40" />
            </AlbumBtn>
        </section>
    </article>
</Main>