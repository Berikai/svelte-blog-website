import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { PUBLIC_TWITTER } from '$env/static/public';
 
export const load = (() => {
    throw redirect(307, 'https://twitter.com/' + (PUBLIC_TWITTER ?? 'verdantbass'));
}) satisfies PageLoad;