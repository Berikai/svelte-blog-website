<script lang="ts">
	import { createPath } from "../../../scripts/createPath";
    import SvelteMarkdown from 'svelte-markdown'

    export let id: number = 0;
    export let title: string = "Başlıksız Makale";
    export let thumbnail: string = "https://source.unsplash.com/collection/1346951/1500x500?sig=" + id.toString();
    export let subject: string = "Konu yok";
    export let author: string = "Anonim";
    export let date: string = "Bilinmeyen bir tarih";
    export let text: string = "### Opppss!\n\nMakale içeriği alınamadı.";

    // I don't really like this approach but anyways...
    export let before: Article;
    export let after: Article;
</script>

<article class="flex flex-col shadow my-4">
    <!-- Article Image -->
    <a href="/" class="mx-auto hover:opacity-75">
        <img src={thumbnail} alt="Article">
    </a>
    <div class="bg-white flex flex-col justify-start p-6">
        <a href="/articles/{createPath(id, title)}" class="text-blue-700 text-sm font-bold uppercase pb-4">{subject}</a>
        <a href="/articles/{createPath(id, title)}" class="text-3xl font-bold hover:text-gray-700 pb-4">{title}</a>
        <a href="/articles/{createPath(id, title)}" class="text-sm pb-8">
            <a href="/articles/{createPath(id, title)}" class="font-semibold hover:text-gray-800">{author}</a> tarafından, {date} tarihinde paylaşıldı
        </a>
        <div class="prose prose-stone max-w-none prose-img:mx-auto text-black">
            <SvelteMarkdown source={text} />
        </div>
    </div>
</article>

<div class="w-full flex pt-6">
    {#if before != undefined}
    <a href="/articles/{createPath(before.id, before.title)}" class="w-1/2 bg-white shadow hover:shadow-md text-left p-6">
        <p class="text-lg text-blue-800 font-bold flex items-center"><i class="fas fa-arrow-left pr-1"></i> Önceki</p>
        <p class="pt-2">{before.title}</p>
    </a>
    {:else}
    <div class="w-1/2 bg-white text-left p-6"></div>
    {/if}
    {#if after != undefined}
    <a href="/articles/{createPath(after.id, after.title)}" class="w-1/2 bg-white shadow hover:shadow-md text-right p-6">
        <p class="text-lg text-blue-800 font-bold flex items-center justify-end">Sonraki <i class="fas fa-arrow-right pl-1"></i></p>
        <p class="pt-2">{after.title}</p>
    </a>
    {:else}
    <div class="w-1/2 bg-white text-left p-6"></div>
    {/if}
</div>

<div class="w-full flex flex-col text-center md:text-left md:flex-row shadow bg-white mt-10 mb-10 p-6">
    <div class="w-full md:w-1/5 flex justify-center md:justify-start pb-4">
        <img src="https://source.unsplash.com/collection/1346951/150x150?sig=1" class="rounded-full shadow h-32 w-32" alt="Author">
    </div>
    <div class="flex-1 flex flex-col justify-center md:justify-start">
        <p class="font-semibold text-2xl">{author}</p>
        <p class="pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel neque non libero suscipit suscipit eu eu urna.</p>
        <div class="flex items-center justify-center md:justify-start text-2xl no-underline text-blue-800 pt-4">
            <a class="pl-4-no" href="/">
                <i class="fab fa-twitter"></i>
            </a>
        </div>
    </div>
</div>