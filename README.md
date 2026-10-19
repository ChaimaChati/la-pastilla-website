# La Pastilla – restaurant website (Next.js)

A fast, image-led, bilingual (FR/EN) static website. Built with Next.js (App Router), plain CSS, no backend.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
```

## Where to change things

| What | File |
|------|------|
| **Photos** (hero, cards, "Nos délices", "Notre maison"...) | `data/images.js` |
| Put the photo files in | `public/images/` |
| Phone numbers, address, WhatsApp, Google Maps link | `data/site.js` |
| All text, French and English | `data/text.js` |
| Colors and fonts | `app/globals.css` (variables at the top) |
| Page order | `app/page.js` |

### Replacing the photos

1. Compress your photos first (squoosh.app). Aim for under 300 KB each.
2. Copy them into `public/images/`.
3. Edit `data/images.js`:

```js
export const IMAGES = {
  hero: ["/images/hero-1.jpg", "/images/hero-2.jpg", "/images/hero-3.jpg"],
  serve: ["/images/breakfast.jpg", "/images/pastries.jpg", "/images/juice.jpg"],
  delices: ["/images/guest-1.jpg", /* ...7 photos... */],
  groups: "/images/interior-wide.jpg",
  maison: ["/images/inside-1.jpg", /* ...5 photos... */],
  visit: "/images/outside.jpg",
};
```

The first photo of `delices` is shown biggest, so put your best one first.

## Before showing it to the restaurant

- Confirm the WhatsApp number in `data/site.js` (`whatsapp`). Reservations are sent there.
- Check the opening hours in `data/text.js` (`hours`).
- Tell them it's a concept made for them, and ask permission to use their photos.

## Deploy on Vercel (free)

1. Create a GitHub repository and push this project:
   ```bash
   git init
   git add .
   git commit -m "First version"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/la-pastilla.git
   git push -u origin main
   ```
2. Go to vercel.com, sign in with GitHub, click **Add New → Project**, pick the repo, and click **Deploy**. Vercel detects Next.js by itself.
3. Every `git push` updates the live site automatically.
4. Custom domain: Vercel → Project → Settings → Domains. Add the domain, then set the DNS records Vercel shows at the registrar.

## Project structure

```
app/            layout.js (fonts, providers), page.js, globals.css
components/     Hero, Services, Delices, Groups, Maison, Visit, Reserve, Footer
                + Photo (one tile), PhotoProvider (full-screen viewer), LangProvider (FR/EN)
data/           images.js, site.js, text.js
public/images/  your photos
```
