<script lang="ts">
    import { createPath } from '$lib/scripts/createPath';

    export let id: number = 0;
    export let title: string = "Başlıksız Makale";
    export let thumbnail: string = "https://source.unsplash.com/collection/1346951/1500x500?sig=" + id.toString();
    export let subject: string = "Konu yok";
    export let author: string = "Anonim";
    export let date: string = "Bilinmeyen bir tarih";
    export let text: string = "### Opppss!\n\nMakale içeriği alınamadı.";
</script>

<article class="flex flex-col shadow my-4">
    <!-- Article Image -->
    <a href="/articles/{createPath(id, title)}" class="mx-auto hover:opacity-75">
        <img src={thumbnail} alt="Article">
    </a>
    <div class="bg-white flex flex-col justify-start p-6">
        <a href="/articles/{createPath(id, title)}" class="text-blue-700 text-sm font-bold uppercase pb-4">{subject}</a>
        <a href="/articles/{createPath(id, title)}" class="text-3xl font-bold hover:text-gray-700 pb-4">{title}</a>
        <a href="/articles/{createPath(id, title)}" class="text-sm pb-3">
            <a href="/articles/{createPath(id, title)}" class="font-semibold hover:text-gray-800">{author}</a> tarafından, {date} tarihinde paylaşıldı
        </a>
        <a href="/articles/{createPath(id, title)}" class="pb-6">{
        text.length > 372 ? text.substring(0, 372).replaceAll('\n', ' ').replaceAll('#', '').replaceAll('*', '') + '...' : text.substring(0, 372).replaceAll('\n', ' ').replaceAll('#', '').replaceAll('*', '')}</a>
        <a href="/articles/{createPath(id, title)}" class="uppercase text-gray-800 hover:text-black">Devamını Oku <i class="fas fa-arrow-right"></i></a>
    </div>
</article>