<script>
    import Main from "$box/main.svelte";
    import Me from "$img/me.jpg";
</script>

<svelte:head>
    <title>About</title>
</svelte:head>

<Main>
    <section class="absolute px-4">
        <img src="{Me}" alt="Jacob Barker" class="w-60 h-[19.5rem] rounded-lg" />
        <caption class="w-60 flex flex-row items-center justify-center text-mid-pink pt-2">
            <span>This is me!</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 absolute right-4 motion-safe:animate-bounce-side">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
        </caption>
    </section>
    <header class="mt-12 grid justify-start ml-[16.5rem]">
        <div class="w-fit px-4 border-b-2 border-light-purple/25">
            <h1>About</h1>
            <p>Learn all about me and this site!</p>
        </div>
    </header>
    <article class="pt-4">
        <div class="grid justify-start ml-[17rem] grid-rows-1 grid-flow-col">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 -mr-3 -scale-y-100">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3" />
            </svg>
            <h2 class="border-b-[1px] w-fit px-4 border-light-purple/25">About me</h2>
        </div>
        <p class="text-lg ml-[17rem] pr-8 text-left indent-5">
            Hi, my name is Jacob and I made this website and the music featured here. I&rsquo;ve been involved in music since I was born, always listening to music on car rides or to fall asleep with. So when given the chance to be in the middle school band, I just couldn&rsquo;t resist.
            Ever since then, I&rsquo;ve been a part of my school&rsquo;s music department being involved in things like the pep band and our concert band. 
            Part of being in band is learning how to make our own music to some degree, and once I got my hands on the music-making software I just fell in love with making my own unique songs when I have free time.
            Now with this website, I want to share my music with people in the hopes that they like it just as much as I do.
        </p>
        <p class="text-lg pr-8 pl-4 text-left indent-5 pt-4">
            Currently, I&rsquo;ve made one album with three original songs and a single both released on the same day. I have more songs in the works, but finding the time to make them is a challenge sometimes.
            But when I can find time, the music made can sometimes be magical. 
        </p>
    </article>
    <article class="pt-4">
        <div class="grid justify-start ml-[17rem] grid-rows-1 grid-flow-col">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 -mr-3 -scale-y-100">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3" />
            </svg>
            <h2 class="border-b-[1px] w-fit px-4 border-light-purple/25">How I Make Music</h2>
        </div>
        <p class="text-lg pl-4 pt-4 pr-8 text-left">
            Music can be made in any order possible, but generally how I end up making music goes something along these lines:
        </p>
        <ul class="text-lg pl-8 pr-8 pt-2 text-left list-inside">
            <li>Have an idea for a new song based on things I hear in other music/what&rsquo;s happening around me</li>
            <li>
                Hop on <a href="http://" target="_blank" rel="noopener noreferrer" class="link hover:text-purple-600 hover:decoration-purple-600">Soundtrap</a> and look for a starting/main track that I like a lot
                <ul class="list-inside ml-8">
                    <li>
                        This is usually the main loop used in the track and should
                        <span class="shadow-lg px-2 py-1">
                            <span class="text-red-500">s</span>
                            <span class="text-orange-500">t</span>
                            <span class="text-green-500">a</span>
                            <span class="text-emerald-500">n</span>
                            <span class="text-teal-500">d</span>
                            <span class="text-sky-500 pl-2">o</span>
                            <span class="text-violet-500">u</span>
                            <span class="text-pink-500">t</span>
                        </span>
                        a little bit from the rest
                    </li>
                    <li>This doesn&rsquo;t have to be the case, sometimes I pick back-up tracks first just to mix things up a little, but generally it&rsquo;s good to pick the main loop first</li>
                </ul>
            </li>
            <li>Pick some complementary tracks to help give the main track more depth</li>
            <li>Put all of these tracks together until I get something that sounds good/unique in 10 measure blocks</li>
            <li>Make as many blocks as it takes until the song sounds like a good length, generally around 2 minutes</li>
            <li>Go back through and tweak settings like bass, volume, treble, and pan until the tracks blend together</li>
        </ul>
    </article>
</Main>