<script>
    import EarthImg from '../../lib/img/earthNoBG.png';
    import HurImg from '../../lib/img/hurricaneNoBG.png';
</script>

<svelte:head>
    <title>Music</title>
</svelte:head>

<main class="pb-[3.75rem]">
    <header>
        <h1>Music</h1>
        <p>All of our band&rsquo;s music. All in one place</p>
    </header>
    <article class="grid justify-center pb-4">
        <h2 class="border-t-[0.5px] border-light-purple/25 pt-2">Top Songs</h2>
        <ol class="list-decimal w-fit space-y-6 mt-4 items-centerS justify-self-center">
            <li class="text-left">
                <div class="flex flex-row items-center w-fit h-fit mt-1 py-1 px-3 bg-light-purple/10 rounded-md shadow-md hover:scale-95 hover:shadow-sm hover:rounded-lg hover:bg-light-purple/20 transition-all duration-200 ease-in">
                    <img src="{EarthImg}" alt="EarthImg" class="w-8 h-8" />
                    <span class="text-xl pl-2 cursor-default">Island Time</span>
                </div>
            </li>
            <li class="text-left">
                <div class="flex flex-row items-center w-fit h-fit mt-1 py-1 px-3 bg-light-purple/10 rounded-md shadow-md hover:scale-95 hover:shadow-sm hover:rounded-lg hover:bg-light-purple/20 transition-all duration-200 ease-in">
                    <img src="{EarthImg}" alt="EarthImg" class="w-8 h-8" />
                    <span class="text-xl pl-2 cursor-default">Midnight Palm Trees</span>
                </div>
            </li>
            <li class="text-left">
                <div class="flex flex-row items-center w-fit h-fit mt-1 py-1 px-3 bg-light-purple/10 rounded-md shadow-md hover:shadow-sm hover:rounded-lg hover:scale-95 hover:bg-light-purple/20 transition-all duration-200 ease-in">
                    <img src="{EarthImg}" alt="EarthImg" class="w-8 h-8" />
                    <span class="text-xl pl-2 cursor-default">Planet 15T</span>
                </div>
            </li>
        </ol>
    </article>
    <article class="float-left border-t-[0.5px] border-light-purple/25 text-left pt-2 pl-2"> 
        <h2>Albums</h2>
        <section class="grid gird-rows-1 grid-flow-col gap-x-4 justify-start">
            <div class="w-fit">
                <img src="{EarthImg}" alt="Earth Pic" class="h-40 w-40 rounded-md hover:rounded-xl p-1 pl-2 hover:bg-light-purple/[0.15] hover:shadow-sm hover:scale-95 shadow-md transition-all duration-200 ease-in" />
                <caption class="flex flex-row justify-center mt-1">Planet 15T</caption>
            </div>
        </section>
    </article>
    <article class="float-left border-t-[0.5px] border-light-purple/25 text-left pt-2 pl-2">
        <h2>Singles &amp; EP&rsquo;s</h2>
        <section class="grid gird-rows-1 grid-flow-col gap-x-4 justify-start">
            <div class="w-fit">
                <img src="{HurImg}" alt="Earth Pic" class="h-40 w-40 rounded-md hover:rounded-xl p-1 hover:bg-light-purple/[0.15] hover:shadow-sm hover:scale-95 shadow-md transition-all duration-200 ease-in" />
                <caption class="flex flex-row justify-center mt-1">Hurricane</caption>
            </div>
        </section>
    </article>
</main>

<style>
    small {
        @apply px-2;
    }
</style>