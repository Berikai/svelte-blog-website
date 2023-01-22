# Blog Website

Full stack blog project, made with ❤️ by [Berikai](https://berikai.dev).

> You can have a look at the [structure idea](docs/STRUCTURE.md).

## Technologies

- [Node.js](https://nodejs.org) as Runtime Environment
- [SvelteKit](https://kit.svelte.dev) as Web App Framework
- [Tailwind CSS](https://tailwindcss.com/) as CSS Framework
- [Auth.js](https://authjs.dev) as Authentication Solution

> ~~I've used a **folder** structured **json** based data storage approach as database. Click to [learn more](docs/DATABASE.md).~~ 

> I guess I changed my mind. I will use just a simple **json** based database at least in development for now.


## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### .env

Create an `.env` file to make the blog work properly.

    PUBLIC_HEADER_TITLE="Berikai's Blog"
    PUBLIC_HEADER_SUBTITLE="Software Tech & Bass Music"
    PUBLIC_HTML_HEAD_TITLE="Berikai's Blog | Powered by SvelteKit"
    PUBLIC_TWITTER="verdantbass"

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## Production

To run the production build of your app:

```bash
node build
```
