import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { getArticles } from '../scripts/getArticles.server';

export const load = (() => {
    // Send data to page
    return { articles: getArticles() };
}) satisfies PageServerLoad;