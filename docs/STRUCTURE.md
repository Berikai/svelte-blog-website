Go back to [README.md](/README.md).

# Blog Website Structure

The concept is actually too simple: to create a news website in general.

## Paths

    berikai.github.io/blog-website
    ├── /
        └── /articles
            └── /[article]

> Sign in process is not included as a path since it is not decided how to make people authenticate yet.

As you can see, the structure seems so simple. Let's dive into each path.

### /

Home page of the website. 

It can (or a home layout kind of thing) can have the necessary header, footer, socials, info properties.

It will be a good experience if homepage would be costumizable in some ways.

### /articles

Articles will use a layout and will fetch the needed data from the database. People who signed up will be able to comment and if the authenticated user has permission, it will be able to edit, delete or create articles.

## Components

Let's look into each component.

### Articles

Articles will have title, content (with a markdown wrapper preferably?!), tags (i really don't know how this seo engines and google tag stuff really works!).

### Layout

The layouts will contain a header with navigation, an article body, a place for advertisements, a place for other releated articles, a place for user comments.

The layout (or pages) will have private sections only for the priviliged users.

## Conclusion

That's all I guess. 

At least, it's enough (for now) to have an structured base idea.

As it is clear (i tried to be as clear as i can), it is a website that is highly based on articles. There will be a simple authentication system and a database.  