# VigardenBLog

A personal blog themed around Violet Evergarden, built with Astro and Tailwind CSS.

## Features

- **Violet Evergarden Theme** - Beautiful design inspired by the anime
- **Dark/Light Mode** - Theme switching with animated transitions
- **Blog System** - Content collections for blog posts with markdown support
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Animations** - Smooth animations using Anime.js
- **Multi-language Text** - Japanese text with Indonesian/English translations

## Tech Stack

- [Astro](https://astro.build/) - Static site generator
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Anime.js](https://animejs.com/) - JavaScript animation library

## Project Structure

```text
/
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── charviolet-removebg-preview.png
│       ├── violet-dark.gif
│       └── violet-light.gif
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Layout.astro
│   │   ├── ThemeController.astro
│   │   ├── VioletWidget.astro
│   │   ├── VioletHero.astro
│   │   └── Welcome.astro
│   ├── content/
│   │   └── blog/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro
│       └── blog/
│           ├── index.astro
│           └── [slug].astro
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

## Commands

| Command           | Action                                           |
| :---------------- | :----------------------------------------------- |
| `npm install`     | Install dependencies                             |
| `npm run dev`     | Start local dev server at `localhost:4321`       |
| `npm run build`   | Build production site to `./dist/`               |
| `npm run preview` | Preview build locally before deploying           |

## Deployment

The site is configured for deployment at `https://vigarden.blog`.

## Credits

- Theme inspired by [Violet Evergarden](https://en.wikipedia.org/wiki/Violet_Evergarden) anime
- Built with [Astro](https://astro.build)