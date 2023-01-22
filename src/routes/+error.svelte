<script>
    import { page } from '$app/stores';
</script>

<div class="py py-vw">
    <h1 class="text-xl text-center">{$page.status}</h1>
    <p class="text-center">{$page.error?.message}</p>
    <p class="text-center">Go back <a class="text-blue-500" href="/">home.</a></p>
</div>