// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
	
	interface Article {
		id: number, 
		title: string, 
		thumbnail: string,
		subject: string, 
		author: string, 
		date: string, 
		text: string
	}
}

export {};
