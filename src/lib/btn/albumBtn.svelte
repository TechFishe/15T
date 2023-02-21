<script lang="ts">
    export let title:string = "no title :(", URL:string = "none";
</script>

<section class="grid gird-rows-2 grid-cols-1 justify-start w-fit">
    <a href="{URL}" class="rounded-md p-1 pl-2 shadow-md hover:rounded-xl hover:bg-light-purple/[0.15] hover:shadow-sm hover:scale-95 aniBase"><slot /></a>
    <caption class="flex flex-row justify-center mt-2">{title}</caption>
</section>