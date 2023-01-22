<script>
    import { PUBLIC_HEADER_TITLE } from '$env/static/public';
</script>
<footer class="w-full border-t bg-black pb-12">
    <div class="w-full font-bold text-sm text-white uppercase container mx-auto flex flex-col items-center">
        <div class="py-6">&copy; {new Date().getFullYear()} {PUBLIC_HEADER_TITLE ?? 'Berikai\'s Blog'}. All rights reserved.</div>
    </div>
</footer>