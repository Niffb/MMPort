# Mia Maya — portfolio site

React + Vite. Pages use hash routes: `#/` (home), `#/work`, `#/exhibitions`, `#/shop`, `#/contact`.

## Run locally

```
npm install
npm run dev
```

## Where things live

| What | Where |
|---|---|
| Home background image | `public/images/home-background.jpg` |
| Artist introduction | `pages/Home.tsx` (About section) |
| Work page projects (titles, descriptions, media order) | `projects.ts` |
| Project images and videos | `public/work/<project>/` |
| Exhibitions / Shop / Contact | `pages/Placeholder.tsx` stubs, wired up in `App.tsx` |

Videos in `public/work` are 720p web copies. The full-quality originals are kept outside the repo
(GitHub rejects files over 100 MB).
