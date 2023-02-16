<script lang="ts">
    export let title:string = ":(", URL:string = "/", SVG:string = "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636";
</script>

<a href="{URL}" class="flex px-3 py-1 text- space-x-2 items-center rounded-md hover:bg-pink-100/[.15] hover:shadow-md transition-all duration-200 ease-in">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
        <path stroke-linecap="round" stroke-linejoin="round" d="{SVG}" />
    </svg>
    <span class="text-3xl">{title}</span>
</a>