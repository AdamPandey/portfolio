# portfolio

Single-page personal portfolio built with React and Vite. Sections: navbar, hero, projects (two web apps and a grid of animation clips with a video modal) and a contact section with a LinkedIn link.

## Stack

- React 19, Vite 7, `@vitejs/plugin-react`
- Tailwind CSS 3 (with PostCSS and autoprefixer)
- Framer Motion for animations
- react-icons
- ESLint 9 (flat config, react-hooks and react-refresh plugins)
- Plain JavaScript (`.jsx`), no TypeScript

## Getting started

```
npm install
npm run dev
```

Other scripts from `package.json`:

- `npm run build` builds to `dist/`
- `npm run preview` serves the production build locally
- `npm run lint` runs ESLint

There are no environment variables and no tests.

## Videos

The animation grid in `src/components/Projects.jsx` loads six clips from `/videos/` (`rickshaw.mp4`, `sword-scene.mp4`, `sword-title.mp4`, `bird-v-man.mp4`, `light-duties.mp4`, `rinse-and-repeat.mp4`). `.gitignore` excludes `*.mp4` and `public/videos/*.mp4`, and `public/` only contains `vite.svg`, so a fresh clone has no video files. Put the clips in `public/videos/` with those names or the cards will be empty and the modal will have nothing to play.

## Structure

```
index.html
tailwind.config.js    custom colours (primary, secondary, accent) and Inter font
src/
  main.jsx            entry point
  App.jsx             Navbar, Hero, Projects, Contact in one column
  index.css           Tailwind layers, Google Fonts import, scrollbar styles
  components/
    Navbar.jsx        fixed top bar with anchor links
    Hero.jsx          intro and the two call-to-action buttons
    Projects.jsx      project data arrays, video card and video modal
    Contact.jsx       LinkedIn button and footer
dev-log.txt           timestamped list of work from 2026-01-03 to 2026-01-06
```

## How it works

- Project content is hard-coded as arrays at the top of `Projects.jsx` (`devProjects` and `animProjects`). Adding a project means editing those arrays.
- Each video card plays muted on hover and resets to the start on mouse leave. Clicking a card opens a modal with controls and autoplay; clicking the backdrop or the close button dismisses it.
- Navigation is plain anchor links (`#about`, `#projects`, `#contact`).
- Theme colours come from `tailwind.config.js`: primary `#0f172a`, secondary `#38bdf8`, accent `#ec4899`.

## Loose ends

- The project cards have a `github` field, but both are set to `"#"` so the GitHub icon is hidden.
- `index.html` still has the default title `portfolio` and the Vite favicon.
- `src/App.css` and `src/assets/react.svg` are left over from the Vite template and are not imported anywhere.
- The navbar has no collapsed or mobile menu; the three links are always shown.
- `dev-log.txt` contains the same 25 entries repeated four times.
- No deployment config is committed; the commit history only says "Ready for deployment".
