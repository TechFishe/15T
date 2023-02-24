<script lang="ts">
	import { fade, fly } from "svelte/transition";
    import "../app.css";
<<<<<<< HEAD
    import MenuBtn from "../lib/btn/menuBtn.svelte";
    import { customAlert, msg, showAlert, songTitle } from "../store";
=======
    import MenuBtn from "$btn/menuBtn.svelte";
>>>>>>> 093d263deeffc2b390fe53c47c02adc98511ef90

    let menu1:boolean = true, menu2:boolean = false;

    function menuClick(){
        if(menu1){
            menu1 = false;
            setTimeout(() => {
                menu2 = true;
            }, 300);
        } else {
            menu2 = false;
            setTimeout(() => {
                menu1 = true;
            }, 300);
        }
    }
</script>

<header class:rounded-b-lg="{menu1}" class:rounded-bl-lg="{menu2}" class="bg-gradient-to-r z-50 from-lightest-pink to-mid-pink text-pink-100 h-20 items-center grid grid-row-1 grid-flow-col fixed w-screen subpixel-antialiased">
    <h1 class="text-6xl h-full w-fit font-mono flex space-x-4 font-bold">
        <span class="self-center">Planet</span>
        <span class="bg-light-purple rounded-b-lg px-2 shadow-2xl h-fit pb-2">15T</span>
    </h1>
    <nav class="float-right h-full grid grid-rows-1 grid-flow-col justify-evenly items-center">
        <a href="/" class="rounded-full p-1.5 w-fit hover:shadow-md aniBaseLocal">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
        </a>
        <button class="rounded-full p-1.5 w-fit motion-safe:animate-bounce-light motion-reduce:animate-none hover:animate-none hover:shadow-md aniBaseLocal" on:click={() => menuClick()}>
            {#if menu1}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12" transition:fade|local={{duration: 300}}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25" />
                </svg>
            {/if}
            {#if menu2}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12" transition:fade|local={{duration: 300}}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12" />
                </svg>
            {/if}
        </button>
        {#if menu2}
            <section class="h-fit w-[13.5rem] absolute bg-mid-pink rounded-bl-lg right-0 top-20" transition:fly={{ y: -80, duration: 500}}>
                <h1 class="text-5xl text-center font-mono border-b-[0.25px] font-semibold border-pink-100/25">Menu</h1>
                <ul class="px-2 py-2 space-y-2">
                    <li>
                        <MenuBtn title="About" URL="/About" SVG="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                    </li>
                    <li>
                        <MenuBtn title="Music" URL="/Music" SVG="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
                    </li>
                    <li>
                        <a href="https://github.com/TechFishe/15T" target="_blank" rel="noopener noreferrer" class="flex px-3 py-1 text- space-x-2 items-center rounded-md hover:bg-pink-100/[.15] hover:shadow-md aniBase">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                            </svg>
                            <span class="text-3xl">Code</span>
                        </a>
                    </li>
                </ul>
            </section>
        {/if}
    </nav>
</header>
<div class="text-center text-pink-100 text-lg font-medium">
    {#if $showAlert}
        <article class="inline-flex mt-20 shadow-md px-4 py-1.5 space-x-1 rounded-b-lg bg-lightest-pink" transition:fly|local={{y: -40, duration:500}}>
            {#if $customAlert === false}
                <span>
                    {#if $msg === "playing"}
                        Now playing:
                        {:else if $msg === "liked"}
                            You liked:
                        {:else if $msg === "unliked"}
                            You unliked:
                        {:else if $msg === "albumliked"}
                            You liked the album:
                        {:else if $msg === "albumunliked"}
                            You unliked the album:
                    {/if}
                </span>
            {/if}
            <p>{$songTitle}</p>
        </article>
    {/if}
</div>
<slot />

<style>
    .aniBaseLocal{ @apply transition-all duration-150 ease-in; }
</style>