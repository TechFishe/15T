<script lang="ts">
    let y:number;
</script>


<div class="absolute w-screen min-h-screen flex flex-col top-[5.25rem] text-center text-light-purple pb-[3.75rem]">
    <main>
        <slot />
    </main>
    <section class="absolute bottom-5 w-screen">
        <footer class="border-t-2 border-light-purple text-light-purple w-screen">
            <table class="w-screen">
                <tr>
                    <td class="border-none">
                        <small>&copy; Jacob Barker 2023</small>
                    </td>
                    <td>
                        <small>
                            Contact: 
                            <a href="mailto:barkej226148@prescott.k12.wi.us" class="hover:text-red-700 decoration-red-700 link">Email</a>
                        </small>
                    </td>
                    <td>
                        <small>
                            Portfolio: 
                            <a href="http://techfishe.vercel.app" target="_blank" rel="noopener noreferrer" class="hover:text-fuchsia-500 decoration-fuchsia-500 link">TechFishe.com</a>
                        </small>
                    </td>
                    <td>
                        <small>
                            Software Used: 
                            <a href="http://tailwindcss.com" target="_blank" rel="noopener noreferrer" class="link hover:text-blue-500 decoration-blue-500">Tailwind CSS</a> 
                            <a href="http://kit.svelte.dev" target="_blank" rel="noopener noreferrer" class="link hover:text-orange-500 decoration-orange-500">Sveltekit</a>
                        </small>
                    </td>
                    <td>
                        <small>
                            <button class="link" on:click={() => y = 0}>To top</button>
                        </small>
                    </td>
                </tr>
            </table>
        </footer>
    </section>
</div>

<svelte:window bind:scrollY={y} />

<style>
    td {
        @apply border-l-2 border-light-purple/75;
    }
</style>