# Rolex Ogada — Desktop Support Engineer (static site)

Plain HTML + CSS + JavaScript. No build step, no dependencies.

## Run
Open `index.html` in any browser, or serve locally:

```
python3 -m http.server 8000
```

Then visit http://localhost:8000

## Files
- `index.html` — all page markup (inline SVG icons)
- `styles.css` — design tokens + responsive layout (mobile → desktop)
- `script.js` — mobile menu toggle + footer year
- `assets/` — images

## Deploy
Upload the whole folder to any static host (Netlify, Vercel, GitHub Pages, cPanel).
