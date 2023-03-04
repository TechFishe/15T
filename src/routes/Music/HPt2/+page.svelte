<script lang="ts">
    import Main from "$box/main.svelte";
    import HurImg from '$img/hurricaneNoBG.png';
	import AlbumSong from "$btn/songs/albumSong.svelte";
    import { msg, songTitle, showAlert } from "../../../store";
    import HPt2 from "$audio/HPt2.mp3";

    let liked:boolean = false;

    function heart(){
        if(!liked){
            liked = true;
            msg.set("albumliked");
            songTitle.set("Hurricane Pt. 2");
            showAlert.set(true);
            setTimeout(() => {
                showAlert.set(false);
            }, 3000);
        } else {
            liked = false;
            msg.set("albumunliked");
            songTitle.set("Hurricane Pt. 2");
            showAlert.set(true);
            setTimeout(() => {
                showAlert.set(false);
            }, 3000);
        }
    }
</script>

<Main>
    <header class="grid grid-rows-2 grid-cols-12 px-4 pt-2">
        <img src="{HurImg}" alt="Hurricane Pt. 2 Album Cover" class="row-span-2 col-span-2 shadow-md rounded-lg h-60 w-56" />
        <h1 class="row-span-1 col-start-3 text-6xl font-bold pl-2 row-start-1 col-span-full text-left self-end border-b-[1px] border-light-purple/25">Hurricane Pt. 2</h1>
        <div class="text-left self-start row-span-1 row-start-2 col-start-3 col-span-full pl-2 space-y-1">
            <p>Release date: April 25th, 2023</p>
            <section class="inline-flex space-x-6 items-center">
                <a href="/Music" class="grid grid-flow-col text-2xl font-semibold shadow-md w-fit items-center px-4 py-1.5 justify-center rounded-md hover:bg-light-purple/15 hover:shadow-sm hover:scale-95 aniBase">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-9 h-9">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                    <span>Music</span>
                </a>
                <button class:liked="{liked}" class:norm="{!liked}" class="hover:bg-light-purple/10 h-fit hover:scale-105 text-mid-pink rounded-full p-1 transition-all duration-200 ease-in" on:click={() => heart()}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" class="w-8 h-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>                  
                </button>
            </section>
        </div>
    </header>
    <ol class="w-[26rem] space-y-6 ml-10 mt-8">
        <AlbumSong title="Hurricane Pt. 2" song={HPt2} />
    </ol>
</Main>
