<script lang="ts">
    export let title:string = "no title :(";
</script>

<li class="text-left">
    <div class="flex flex-row items-center w-fit h-fit mt-1 py-1 px-3 bg-light-purple/10 rounded-md shadow-md hover:scale-95 hover:shadow-sm hover:rounded-lg hover:bg-light-purple/20 transition-all duration-200 ease-in">
        <slot />
        <span class="text-xl pl-2 cursor-default">{title}</span>
    </div>
</li>