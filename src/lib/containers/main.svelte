<script lang="ts">
    let liked:boolean = false, playing:boolean = false, isLooping:boolean = false;
</script>

<div class="absolute w-screen min-h-screen flex flex-col top-[5.25rem] text-center text-light-purple pb-[3.75rem]">
    <main>
        <slot />
    </main>
    <section class="absolute bottom-5 w-screen">
        <footer class="divide-x-[1px] border-t-[1px] border-light-purple text-light-purple w-screen divide-light-purple grid grid-flow-col grid-rows-1">
            <small>&copy; Jacob Barker 2023</small>
            <small>
                Contact: 
                <a href="mailto:barkej226148@prescott.k12.wi.us" class="hover:text-red-700 decoration-red-700 link">Email</a>
            </small>
            <small>
                Portfolio: 
                <a href="http://techfishe.vercel.app" target="_blank" rel="noopener noreferrer" class="hover:text-fuchsia-500 decoration-fuchsia-500 link">TechFishe.com</a>
            </small>
            <small>
                Software Used: 
                <a href="http://tailwindcss.com" target="_blank" rel="noopener noreferrer" class="link hover:text-blue-500 decoration-blue-500">Tailwind CSS</a> 
                <a href="http://kit.svelte.dev" target="_blank" rel="noopener noreferrer" class="link hover:text-orange-500 decoration-orange-500">Sveltekit</a>
            </small>
        </footer>
    </section>
</div>

<style>
    small {
        @apply px-2;
    }
</style>