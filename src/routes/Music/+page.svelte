<script>
    import EarthImg from '$img/earthNoBG.png';
    import HurImg from '$img/hurricaneNoBG.png';

    import Main from '$box/main.svelte';
    import AlbumBtn from '$btn/albumBtn.svelte';
    // import TopSong from '$btn/songs/topSong.svelte';
</script>

<svelte:head>
    <title>Music</title>
</svelte:head>

<Main>
    <header class="mt-12">
        <h1>Music</h1>
        <p>All of our band&rsquo;s music. All in one place</p>
    </header>
    <!-- <article class="grid justify-center pb-4">
        <h2 class="border-t-[0.5px] border-light-purple/25 pt-2">Top Songs</h2>
        <ol class="w-fit space-y-6 mt-4">
            <TopSong title="Island Time">
                <img src="{EarthImg}" alt="Planet 15T Album Cover" class="w-8 h-[35px]" />
            </TopSong>
            <TopSong title="Midnight Palm Trees">
                <img src="{EarthImg}" alt="Planet 15T Album Cover" class="w-8 h-[35px]" />
            </TopSong>
            <TopSong title="Planet 15T">
                <img src="{EarthImg}" alt="Planet 15T Album Cover" class="w-8 h-[35px]" />
            </TopSong>
        </ol>
    </article> -->
    <div class="grid grid-col-1 grid-rows-2 gap-y-8">
        <article> 
            <h2>Albums</h2>
            <section>
                <AlbumBtn URL="/Music/P15T" title="Planet 15T">
                    <img src="{EarthImg}" alt="Planet 15T Album Cover" class="h-44 w-40" />
                </AlbumBtn>
            </section>
        </article>
        <article>
            <h2>Singles &amp; EP&rsquo;s</h2>
            <section>
                <AlbumBtn URL="/Music/HPt2" title="Hurricane Pt. 2">
                    <img src="{HurImg}" alt="Hurricane Pt.2 Album Cover" class="h-44 w-40" />
                </AlbumBtn>
            </section>
        </article>
    </div>
</Main>

<style>
    article{ @apply float-left border-t-[0.5px] border-light-purple/25 text-left pt-2 pl-2; }
    section{ @apply grid grid-rows-1 grid-flow-col gap-x-4 justify-start pt-4; }
</style>