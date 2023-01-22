<script lang="ts">
    import Sidebar from "./lib/layout/sidebar.svelte";
    import ArticleList from "./lib/pages/list.svelte";

    // Get data from server-side
    export let data: { articles: Array<Article> };
</script>

<div class="container mx-auto flex flex-wrap py-6">
    <ArticleList articles={data.articles}/>
    <Sidebar />
</div>