<script lang="ts">
    export let name:string = "no name";
</script>

<div class="h-28 grid grid-cols-1 grid-rows-2 shadow-lg px-2 pt-2 rounded-lg shadow-lightest-pink">
    <em class="mb-2">&rdquo;<slot />&ldquo;</em>
    <div class="inline-flex space-x-4 text-lg mt-2 font-semibold text-mid-pink text-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
        </svg>                  
        <span>{name}</span>
    </div>
</div>