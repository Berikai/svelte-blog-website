<script lang="ts">
    // Dev-defined preferences
    const pageCapacity: number = 3;
    const paginationLimit: number = 5;

	import ArticlePreview from "$lib/components/article/preview.svelte";
	import Pagination from "./pagination.svelte";

    // Get page query for pagination
    import { page } from '$app/stores';
    const isPage: boolean = $page.url.searchParams.has('page');
    const getPage: number = isPage && !isNaN(Number($page.url.searchParams.get('page'))) ? Number($page.url.searchParams.get('page')) : 1 ;
    let paginationCurrent: number = getPage; // Dynamic pagination current variable

    // Get data from server-side
    export let articles: Array<Article>
    const articleCount: number = articles.length;
    const pageCount: number = Math.floor(articleCount / 3) + 1;

    // Get articles from the page
    const getArticlesOnPage = (_articles: Array<Article>, _paginationCurrent: number, _pageCapacity: number) => {
        const startIndex: number = _articles.length - (_paginationCurrent * _pageCapacity)
        const endIndex: number = _articles.length - ((_paginationCurrent - 1) * _pageCapacity);
        return _articles.filter((_v, i) => (i+1) > startIndex && (i+1) <= endIndex).reverse();
    };
</script>

<section class="w-full md:w-2/3 flex flex-col items-center px-3">
    {#each getArticlesOnPage(articles, paginationCurrent, pageCapacity) as article (article.id)}
        <ArticlePreview
            id={article.id}
            title={article.title}
            thumbnail={article.thumbnail}
            subject={article.subject}
            author={article.author}
            date={article.date}
            text={article.text}
        />
    {/each}
    <Pagination bind:current={paginationCurrent} count={pageCount} limit={paginationLimit}/>
</section>