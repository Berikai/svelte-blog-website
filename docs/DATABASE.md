Go back to [README.md](/README.md).

# Avionot Database

A **folder** structured **json** based data storage approach, made by [Berikai](https://berikai.dev).

## Design

    ./data
    ├── /articles
    |   └── /[article]
    |       ├── /assets
    |       ├── /article.json
    |       └── /interactions.json
    └── /users
        └── /users.json

> Interactions stores data of users; likes, comments, views.