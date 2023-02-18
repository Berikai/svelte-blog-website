import type { PageServerLoad } from './$types';
import { error, redirect } from '@sveltejs/kit';

export const load = (({url}) => {
    // Send data to page
    const session = url.searchParams.get('session') ?? "no-session";
    if (session == "bae608cbe25cdb6f0e60a06b0cf96ed0a5") return {}
    else throw redirect(307, '/');
}) satisfies PageServerLoad;
