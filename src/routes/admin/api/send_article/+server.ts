import { json, redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
 
import { setArticles } from '$lib/server/scripts/articles';
import { createPath } from '$lib/scripts/createPath';

export const POST = (async (event) => {
  const body = await event.request.formData();
 
  // log all fields
  console.log([...body]);

  const id: number = setArticles(
    String(body.get('title') ?? 'Haber'),
    String(body.get('thumbnail') ?? 'https://source.unsplash.com/collection/1346951/1500x500?sig=1'),
    String(body.get('subject') ?? 'Gündem'),
    String(body.get('author') ?? 'Anonim'),
    String(body.get('date') ?? '20 Ocak 2023'),
    String(body.get('content') ?? ''),
  );

  throw redirect(307, `/articles/${createPath(id, String(body.get('title') ?? 'Haber'))}`);
 
  return json({
    // get a specific field's value
    islem: 'basarili'
  });
}) satisfies RequestHandler;