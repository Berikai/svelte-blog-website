<script>
	import { PUBLIC_TWITTER } from "$env/static/public";
</script>
<!-- Sidebar Section -->
<aside class="w-full md:w-1/3 flex flex-col items-center my-3 text-center bg-white text-black">
    <div class="w-full flex flex-col">
        <a class="twitter-timeline" data-height="{758}" data-theme="light" href="https://twitter.com/{PUBLIC_TWITTER ?? 'verdantbass'}?ref_src=twsrc%5Etfw"> <p class="p-2">Tweetler yükleniyor... </p> </a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
    </div>
</aside>