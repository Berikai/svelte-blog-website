<script lang="ts">
	import Article from "$lib/components/article/article.svelte";
    import type { PageServerData } from "./$types";
    export let data: PageServerData;
</script>

<Article
    id={data.article.id}
    title={data.article.title}
    thumbnail={data.article.thumbnail}
    subject={data.article.subject}
    author={data.article.author}
    date={data.article.date}
    text={data.article.text}
    before={data.before}
    after={data.after}
/>