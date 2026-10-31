# Sruti Bapatla — Portfolio

A plain HTML/CSS site (no build step) for GitHub Pages.

## Files

| File | Page |
| --- | --- |
| `index.html` | Sruti Bapatla (photo, about me, buttons, education) |
| `projects.html` | Projects (Professional / Academic / Open-Source dropdown) |
| `teaching.html` | Teaching (TA courses + tutoring) |
| `volunteering.html` | Volunteering (logos with hover descriptions) |
| `styles.css` | All styling |
| `script.js` | Projects dropdown |
| `images/` | Put your photos and logos here |

## Filling it in

- Search each HTML file for `EDIT` — comments mark every spot to change.
- Gray italic text in `[brackets]` is placeholder text; replace it (and remove `class="placeholder-text"` so it shows in normal style).
- Images: add your file to `images/` and change `src="images/placeholder.svg"` to e.g. `src="images/neocis.jpg"`.
- Resume: `resume.pdf` in the main folder; replace it to update.
- Fonts: put the Wassmer Reglet and Zugili files in `fonts/` named `WassmerReglet.woff2` / `Zugili.woff2` (`.otf` or `.ttf` also work). Headings use Wassmer Reglet, body text uses Zugili; swap `--font-heading` / `--font-body` at the top of `styles.css` to change that.
- Colors: the palette is at the top of `styles.css` (`--navy`, `--steel`, `--sky`, `--cream`).
- More projects: copy an `<article class="project-card">…</article>` block. The grid fills rows of three automatically.

## Password-protected Neocis page

`neocis.html` asks for a password and decrypts `neocis.enc` in the browser. The readable page and its images live in `private-src/`, which must **not** be uploaded.

To change the Neocis write-up or its password: edit `private-src/neocis-content.html` (images in `private-src/images/neocis/`), then run

```
pwsh private-src/build-neocis.ps1 -Password "the-password"
```

and upload the new `neocis.enc`.

## Publishing on GitHub Pages

1. Create a repository on GitHub named `<your-username>.github.io` (gives you `https://<your-username>.github.io`).
2. Upload all these files to the repository's root **except the `private-src` folder** (drag-and-drop on github.com works, or use git; `.gitignore` already skips it for git).
3. In the repo go to **Settings → Pages**, set **Source** to "Deploy from a branch", branch `main`, folder `/ (root)`, and save.
4. Your site is live in a minute or two.
