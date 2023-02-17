<script lang="ts">
    export let title:string = "no title :(";
</script>

<section class="grid gird-rows-1 grid-flow-col gap-x-4 justify-start">
    <div class="w-fit">
        <slot />
        <caption class="flex flex-row justify-center mt-1">{title}</caption>
    </div>
</section>