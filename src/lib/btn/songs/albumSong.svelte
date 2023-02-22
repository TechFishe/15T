<script lang="ts">
    export let title:string = "no title :(";

    let liked:boolean = false, playing:boolean = false, isLooping:boolean = false;
</script>

<li>
    <div class="grid grid-cols-2 gap-x-4 items-center h-fit py-2 px-3 bg-light-purple/5 rounded-md shadow-md">
        <span class="text-xl justify-self-start w-52 text-left">{title}</span>
        <section class="grid grid-rows-1 grid-flow-col justify-evenly">
            <button class="hover:bg-light-purple/15 justify-self-end hover:scale-105 text-[#355070] rounded-full hover:shadow-md p-1 aniBase" on:click={() => playing = !playing}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5" class="w-6 h-6">
                    {#if playing}
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                        {:else}
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                    {/if}
                </svg>                  
            </button>
            <button class:motion-safe:animate-[spin_2.5s_linear_infinite]="{isLooping}" class:motion-reduce:animate-[spin_5s_linear_infinite]="{isLooping}" class="hover:bg-light-purple/15 justify-self-end hover:scale-105 text-[#355070] rounded-full hover:shadow-md p-1 aniBase" on:click={() => isLooping = !isLooping}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
                </svg>                  
            </button>
            <button class:liked="{liked}" class:norm="{!liked}" class="hover:bg-light-purple/15 justify-self-end hover:scale-105 text-mid-pink rounded-full hover:shadow-md p-1 aniBase" on:click={() => liked = !liked}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>                  
            </button>
        </section>
    </div>
</li>