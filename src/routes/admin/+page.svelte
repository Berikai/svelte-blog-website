<script lang="ts">
    import Sidebar from "$lib/components/layout/sidebar.svelte";
	import SvelteMarkdown from "svelte-markdown";

    // Get data from server-side
    export let data: { };
    
    let content = "### Giriş \n\n Örnek giriş bölümü metni. \n\n ### Gelişme \n\n Örnek gelişme bölümü. \n\n ### Sonuç \n\n Sonuç bölümü.";
    let author = "Ahmet Mehmet";
    let title = "Başlık";
    let thumbnail = "https://source.unsplash.com/collection/1346951/1500x500?sig=1";
    let subject = "Gündem";
    let date = "20 Ocak 2023";

</script>

<style>
    .content {
      display: grid;
      grid-template-columns: 20% 80%;
      grid-column-gap: 10px;
    }
  </style>


<div class="container mx-auto flex flex-wrap py-6 justify-center">
    <form method="POST" action="/admin/api/send_article" class="flex flex-col shadow my-4 p-10">
      <label class="text-3xl font-bold hover:text-gray-700 pb-4">Başlık: </label>
      <input name="title" class="border border-black mb-5 rounded-lg h-10 p-2" type="text" bind:value={title}/>
      <label class="text-3xl font-bold hover:text-gray-700 pb-4">Resim: </label>
      <input name="thumbnail" class="border border-black mb-5 rounded-lg p-2" type="text" bind:value={thumbnail}/>
      <label class="text-3xl font-bold hover:text-gray-700 pb-4">Konu: </label>
      <div class="relative inline-block w-full text-gray-700 mb-5">
          <select name="subject" class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" placeholder="Havacılık" bind:value={subject}>
            <option>Gündem</option>
            <option>Havacılık</option>
            <option>Sanayi</option>
            <option>Dünya</option>
            <option>Ekonomi</option>
            <option>Siyasi</option>
          </select>
          <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
          </div>
        </div>
      <label class="text-3xl font-bold hover:text-gray-700 pb-4">Yazar: </label>
      <input name="author" class="border border-black mb-5 rounded-lg p-2" type="text" bind:value={author}/>
      <label class="text-3xl font-bold hover:text-gray-700 pb-4">Tarih: </label>
      <input name="date" class="border border-black mb-5 rounded-lg p-2" type="text" bind:value={date}/>
      <label class="text-3xl font-bold hover:text-gray-700 pb-4">Metin içeriği: </label>
      <textarea name="content" class="w-full h-16 px-3 py-2 text-base text-gray-700 placeholder-gray-600 border border-black rounded-lg focus:shadow-outline mb-5 h-96" bind:value={content}></textarea>
      <button class="border border-black thumbnail-green-300 w-auto mb-5 h-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3 rounded-lg">Gönder</button>  
  
      <img width="500" src="" alt="">
  </form>
    <article class="flex flex-col shadow my-4">
      <a href="/" class="mx-auto hover:opacity-75">
          <img src={thumbnail} alt="">
      </a>
      <div class="thumbnail-white flex flex-col justify-start p-6">
          <a href="" class="text-blue-700 text-sm font-bold uppercase pb-4">{subject}</a>
          <a href="" class="text-3xl font-bold hover:text-gray-700 pb-4">{title}</a>
          <a href="" class="text-sm pb-8">
              <a href="" class="font-semibold hover:text-gray-800">{author}</a> tarafından, {date} tarihinde paylaşıldı
          </a>
          <div class="prose prose-stone max-w-none prose-img:mx-auto text-black">
              <SvelteMarkdown source={content} />
          </div>
      </div>
  </article>
  <div class="w-full flex pt-6">
  </div>
</div>
