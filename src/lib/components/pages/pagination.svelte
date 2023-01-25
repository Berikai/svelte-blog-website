<!-- Pagination -->
<script lang="ts">
	import { page } from "$app/stores";
    import { goto } from "$app/navigation";

    export let current: number = 1;
    export let count: number = 10;
    export let limit: number = 5;

    // Current correction
    current = current < 1 || current > count ? 1 : current;

    // Limit pagination
    const limit_count = (limit: number) => count > limit ? limit : count;
    const limited_count = limit_count(limit);

    // Set pagination offset
    const offset = (i: number, _current: number, _count: number,_limited_count: number) => {
        // Get median of limited_count
        const median = _limited_count % 2 == 0 ? Math.floor(_limited_count / 2) : Math.floor(_limited_count / 2) + 1;

        // Determine paginations start and end
        const start_condition = _current <= median;
        const end_condition = _current >= _count - (median - 1);

        // Return the offset for start and end
        //const start_offset: number = start_condition ? i + 1 : i + current - (median - 1); // This code commented because merged into return state
        const end_offset = end_condition ? i + _count - (_limited_count - 1) : i + _current - (median - 1);

        // Return the offset
        return start_condition ? (i + 1) : end_offset;
    }

    // Set current of pagination
    const setCurrent = (i: number, _current: number, _count: number,_limited_count: number) => {
        current = offset(i, _current, _count, _limited_count);
        $page.url.searchParams.set('page', current.toString()); 
        goto(`?${$page.url.searchParams.toString()}`, { replaceState: true, noScroll: false });
    }

</script>

<div class="flex items-center py-8">
    {#if offset(0, current, count, limited_count) != 1}
        <button on:click={() => setCurrent(0, 0, 0, 0)} class="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center mr-3"><i class="fas fa-arrow-left mr-2"></i> Geri</button>
    {/if}

    {#each {length: limited_count} as _, i}
        <button on:click={() => setCurrent(i, current, count, limited_count)} class="h-10 w-10 {current == offset(i, current, count, limited_count) ? "bg-black text-white" : "text-gray-800 hover:bg-gray-800 hover:text-white"} hover:bg-gray-800 font-semibold text-sm flex items-center justify-center">{offset(i, current, count, limited_count)}</button>
    {/each}

    {#if offset(0, current, count, limited_count) != count - (limited_count - 1)}
        <button on:click={() => setCurrent(count-1, 0, 0, 0)} class="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3">Son <i class="fas fa-arrow-right ml-2"></i></button>
    {/if}
</div>