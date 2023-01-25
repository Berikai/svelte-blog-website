<script lang="ts">
    import { PUBLIC_HEADER_TITLE, PUBLIC_HEADER_SUBTITLE } from '$env/static/public';
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap');
    .montserrat {
        font-family: 'Montserrat', sans-serif;
    }
</style>

<!-- Top Bar Nav -->
<nav class="w-full py-4 bg-black shadow">
    <div class="w-full container mx-auto flex flex-wrap items-center justify-between px-3">
        <div class="flex items-center text-lg no-underline text-white pr-6">
            <a class="pl-6 font-bold text-sm" href="/twitter">
                <i class="fab fa-twitter"></i> Twitter
            </a>
        </div>
        <nav>
            <ul class="flex items-center justify-between font-bold text-sm text-white uppercase no-underline">
                <li><a class="hover:text-gray-200 hover:underline px-4 mx-1 rounded-lg bg-gray-800" href="/sign-in">Giriş yap</a></li>
            </ul>
        </nav>
    </div>

</nav>

<!-- Text Header -->
<header class="w-full container mx-auto">
    <div class="flex flex-col items-center py-14">
        <a class="font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl mb-1 montserrat" href="/">
            {PUBLIC_HEADER_TITLE  ?? 'Berikai\'s Blog'}
        </a>
        <p class="flex space-x-4 text-lg text-gray-600">
            {PUBLIC_HEADER_SUBTITLE ??  'Software Tech & Bass Music'}
        </p>
    </div>
</header>

<!-- Border -->
<div class="w-full py-0 border-t shadow" />