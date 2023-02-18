import { error } from '@sveltejs/kit';
import fs from 'fs';

export const getArticles = () => {
    // Read data
    let articles_json: Buffer;
    try {
        articles_json = fs.readFileSync('./data/articles.json');
    } catch (err) {
        return [
            {
                "id": 1,
                "title": "Welcome to my blog project!",
                "thumbnail": "https://source.unsplash.com/collection/1346951/1500x500?sig=1",
                "subject": "Tutorial",
                "author": "Berikai",
                "date": "22 Ocak 2020",
                "text": "### Hi!\n\nI\'ve made a blog website using Svelte. I loved Svelte so much, such a great development experience. Anyways, I\'ll guide you now.\n\n### .env\n\nYou can set environment variables by creating a .env file in order to edit some parts of this website without touching the code. Here are the variables you can set:\n\n- **PUBLIC_HEADER_TITLE**: Set\'s the header title.\n- **PUBLIC_HEADER_SUBTITLE**: Set\'s the header subtitle.\n- **PUBLIC_HTML_HEAD_TITLE**: Set\'s the title that is being showed in browser tab.\n- **PUBLIC_TWITTER**: Set\'s the twitter account to be used in the website.\n\n### Database\n\nCreate a data folder and create articles.json file in it."
            },
        ]
        throw error(500, 'Internal error');
    }

    return JSON.parse(articles_json.toString()).articles;
}

export const setArticles = (title: string, thumbnail: string, subject: string, author: string, date: string, text: string) => {
    // Write data
    let articles_json;
    const id = Math.floor(Math.random() * 10000);
    try {
        articles_json = JSON.parse(fs.readFileSync('./data/articles.json').toString());
        articles_json.articles.push({
            "id": id,
            "title": title,
            "thumbnail": thumbnail,
            "subject": subject,
            "author": author,
            "date": date,
            "text": text
        });

        fs.writeFileSync('./data/articles.json', JSON.stringify(articles_json, null, 2));
    } catch (err) {
        throw error(500, 'Internal error');
    }

    return id;
}

export const removeArticles = (id: number) => {
    // Write data
    let articles_json: any;
    try {
        articles_json = JSON.parse(fs.readFileSync('./data/articles.json').toString());
        articles_json.articles.forEach((v: Article, i: number) => {
            v.id == id ? articles_json.articles.splice(i, 1) : null;
        });
        
        fs.writeFileSync('./data/articles.json', JSON.stringify(articles_json, null, 2));
    } catch (err) {
        throw error(500, 'Internal error');
    }
}