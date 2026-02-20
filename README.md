# 💌 Vigarden | Zyrexnn's Room

A cinematic, highly customized personal blog and storytelling platform themed around **Violet Evergarden**, built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/).

## ✨ Features

- **Cinematic Aesthetic:** Fully responsive design mimicking the elegant, Victorian-inspired world of _Violet Evergarden_. Includes animated floating petals, CSS wax seals, and an "Auto Memories Doll License" profile card.
- **Multilingual Support:** Full content and UI localization in three languages (Indonesian, English, Japanese). Managed natively via custom state and `data-i18n` tags without relying on heavy external routing libraries.
- **Interactive Letter Writing (The Unsent):** A dedicated feature allowing users to draft letters on a beautiful virtual canvas, mimicking the CH Postal Company experience.
- **Instant Global Search:** Fast, optimized search module across all blogs and letters, easily accessible via the `Ctrl+K` keyboard shortcut.
- **Interactive Violet Widget:** A responsive, draggable chibi Violet character that delivers quotes and provides a quick access menu.
- **Integrated Music Player:** A customizable persistent background music player to complete the emotional reading experience.
- **Dark & Light Themes:** Seamless and animated theme switching, utilizing local storage to remember your aesthetic preferences.
- **Performance Optimized:** Uses pure CSS animations and lightweight JavaScript logic. We removed heavy animation libraries like `anime.js` for top-tier performance and Lighthouse scores.

## 🛠️ Tech Stack

- **[Astro](https://astro.build/)** - Ultra-fast static site generator utilizing specific Astro Content Collections for type-safe markdown parsing.
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework for rapid styling, custom themes, and global components.
- **TypeScript** - For safer, more reliable front-end logic and component props.

## 📁 Project Structure

```text
/
├── public/                # Static assets (images, audio, gifs)
├── src/
│   ├── components/        # Reusable UI elements (Hero, Search, Widget, Player)
│   ├── content/           # Zod-typed Markdown collections (blogs, letters, stories)
│   ├── i18n/              # Language translation dictionaries (ID, EN, JP)
│   ├── layouts/           # Global wrapper layouts & CSS resets
│   └── pages/             # Astro file-based routing logic
├── astro.config.mjs       # Astro configuration settings
├── tailwind.config.mjs    # Custom Tailwind color palette & CSS animations
└── package.json           # Project dependencies & scripts
```

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18+) and npm installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Zyrexnn/VigardenBlog.git
   ```
2. Navigate into the directory and install dependencies:
   ```bash
   cd VigardenBlog
   npm install
   ```

### Running Locally

```bash
npm run dev
```

The application will launch your local development server at `http://localhost:4321/`.

### Building for Production

Compile your application into static HTML/CSS/JS and preview it locally before deployment.

```bash
npm run build
npm run preview
```

## 📝 Content Management

Vigarden embraces Astro Content Collections for type-safe data handling. To add new content, simply create `.md` files in the respective `src/content/` directories (`blog`, `letters`, or `stories`). Ensure your markdown frontmatter adheres to the validation schemas defined within `src/content/config.ts`.

## 💌 Credits

- Theme and conceptual design deeply inspired by the incredible anime series **[Violet Evergarden](https://en.wikipedia.org/wiki/Violet_Evergarden)** by Kyoto Animation.
- Built with love and nostalgia by **[Zyrexnn](https://github.com/Zyrexnn)** — _Auto Memories Doll Service_.
