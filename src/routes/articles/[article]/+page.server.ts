import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { createPath } from '$lib/scripts/createPath';
import { getArticles } from '$lib/server/scripts/getArticles';

export const load = (({ params }) => {
    // Send data to page
    const articles: Array<Article> = getArticles();
    return { 
        article: articles.filter((article) => createPath(article.id, article.title) == params.article)[0],

        // I did a fucking dirty approach but it just works lol
        before: articles.filter((_article, i) => createPath((articles[i + 1] ?? {id: 0}).id, (articles[i + 1] ?? {title: ""}).title) == params.article)[0],
        after: articles.filter((_article, i) => createPath((articles[i - 1] ?? {id: 0}).id, (articles[i - 1] ?? {title: ""}).title) == params.article)[0],
    };
}) satisfies PageServerLoad;