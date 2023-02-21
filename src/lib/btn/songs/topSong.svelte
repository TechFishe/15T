<script lang="ts">
    export let title:string = "no title :(";
</script>

<li class="text-left">
    <div class="flex flex-row items-center w-fit h-fit py-1 px-3 cursor-pointer bg-light-purple/5 rounded-md shadow-md hover:scale-95 hover:shadow-sm hover:rounded-lg hover:bg-light-purple/15 aniBase">
        <slot />
        <span class="text-xl pl-2">{title}</span>
    </div>
</li>