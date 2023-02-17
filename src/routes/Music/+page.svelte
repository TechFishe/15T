<script>
    import EarthImg from '../../lib/img/earthNoBG.png';
    import HurImg from '../../lib/img/hurricaneNoBG.png';
    import Main from '../../lib/containers/main.svelte';
    import AlbumBtn from '../../lib/btn/albumBtn.svelte';
    import TopSong from '../../lib/random/topSong.svelte';
</script>

<svelte:head>
    <title>Music</title>
</svelte:head>

<Main>
    <header>
        <h1>Music</h1>
        <p>All of our band&rsquo;s music. All in one place</p>
    </header>
    <article class="grid justify-center pb-4">
        <h2 class="border-t-[0.5px] border-light-purple/25 pt-2">Top Songs</h2>
        <ol class="list-decimal w-fit space-y-6 mt-4 items-centerS justify-self-center">
            <TopSong title="Island Time">
                <img src="{EarthImg}" alt="EarthImg" class="w-8 h-8" />
            </TopSong>
            <TopSong title="Midnight Palm Trees">
                <img src="{EarthImg}" alt="EarthImg" class="w-8 h-8" />
            </TopSong>
            <TopSong title="Planet 15T">
                <img src="{EarthImg}" alt="EarthImg" class="w-8 h-8" />
            </TopSong>
        </ol>
    </article>
    <div class="grid grid-col-1 grid-rows-2 gap-y-8">
        <article class="mainSection"> 
            <h2>Albums</h2>
            <AlbumBtn title="Planet 15T">
                <img src="{EarthImg}" alt="Earth Img" class="album" />
            </AlbumBtn>
        </article>
        <article class="mainSection">
            <h2>Singles &amp; EP&rsquo;s</h2>
            <section class="grid gird-rows-1 grid-flow-col gap-x-4 justify-start">
                <AlbumBtn title="Hurricane">
                    <img src="{HurImg}" alt="Earth Pic" class="album" />
                </AlbumBtn>
            </section>
        </article>
    </div>
</Main>

<style>
    .album{ @apply h-40 w-40 rounded-md p-1 pl-2 shadow-md transition-all duration-200 ease-in; }
    .album:hover{ @apply rounded-xl bg-light-purple/[0.15] shadow-sm scale-95; }
    .mainSection{ @apply float-left border-t-[0.5px] border-light-purple/25 text-left pt-2 pl-2; }
</style>