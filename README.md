# Lumière — Homepage Mockup
### Designed by David Joseph — May 2026

---

## 📁 Project Structure

```
lumiere-homepage/
│
├── index.html          ← Main HTML file (open this in your browser)
├── css/
│   └── style.css       ← All styles, variables, layout & animations
├── js/
│   └── main.js         ← Scroll reveal, timer, cart & form interactions
└── README.md           ← You are here
```

---

## 🌐 How to Open

1. Extract the ZIP file to a folder on your computer
2. Open **index.html** in any modern browser (Chrome, Firefox, Edge, Safari)
3. No build tools, no server, no dependencies required — it runs entirely in the browser

> **Note:** The Google Fonts (Cormorant Garamond + DM Sans) load from a CDN.
> An internet connection is required for typography to render correctly.
> Offline fallback: Georgia (serif) and system sans-serif will be used.

---

## ✅ Design Brief Checklist — Option A: Homepage

| Requirement                                         | Status      |
|-----------------------------------------------------|-------------|
| Mega menu with hover effect                         | ✅ Complete |
| Single hero banner (header, tagline, CTA button)    | ✅ Complete |
| 3 product categories                                | ✅ Complete |
| 4 featured products                                 | ✅ Complete |
| SEO section (header, ~175 words, image space)       | ✅ Complete |
| Promo banner section                                | ✅ Complete |
| Footer (links, social media, newsletter subscribe)  | ✅ Complete |

---

## 🎨 Design Decisions

### Colour Palette
| Role         | Value     | Usage                          |
|--------------|-----------|--------------------------------|
| Forest Green | `#1b3a2d` | Primary brand, header, footer  |
| Warm Gold    | `#c8963e` | Accents, CTAs, highlights      |
| Cream        | `#faf9f6` | Page background                |
| Cream Dark   | `#f2efe8` | Section alternates             |
| Charcoal     | `#1c1c1c` | Body text                      |

### Typography
- **Cormorant Garamond** — Headings & display text (editorial, luxury feel)
- **DM Sans** — Body copy, navigation, UI elements (clean, modern)

### CSS Architecture
- CSS custom properties (variables) defined in `:root` for easy theming
- No frameworks — pure vanilla CSS for developer clarity
- BEM-inspired class naming for component readability
- All hover/transition states defined alongside their base styles

### JavaScript
- Vanilla JS only — zero external libraries or frameworks
- IntersectionObserver for scroll-reveal animations (performant, modern)
- Live countdown timer in the promo banner
- Newsletter form validation with inline feedback
- Add-to-cart micro-interaction with cart badge counter update
- Keyboard accessibility support on mega menu triggers

---

## 🖼️ Images

All image areas are currently shown as **styled placeholder blocks** with
gradient backgrounds and "IMAGE" labels. To replace with real photos:

```html
<!-- Replace this placeholder div -->
<div class="category-img-inner">IMAGE</div>

<!-- With a real image tag -->
<img src="images/your-photo.jpg" alt="Descriptive alt text">
```

Recommended image dimensions:
- **Hero image:** 1200 × 620px
- **Category cards:** 800 × 380px
- **Product images:** 600 × 260px
- **SEO section image:** 840 × 440px
- **Mega menu featured:** 440 × 130px

---

## 🔧 Customisation Notes

### Changing the Brand Colours
Edit the `:root` block at the top of `css/style.css`:
```css
:root {
  --forest: #1b3a2d;   /* Change to your primary brand colour */
  --gold:   #c8963e;   /* Change to your accent colour        */
}
```

### Adding More Products
Copy any `.product-card` block in `index.html` and update the content.
Add a new `prod-img-N` class and define a matching gradient in `style.css`.

### Updating the Promo Timer
The countdown in `js/main.js` calculates from page load. For a fixed end date,
replace the `endTime` line:
```js
// Current (relative):
const endTime = new Date().getTime() + (2 * 24 * 60 * 60 * 1000);

// Fixed date example:
const endTime = new Date('2026-06-30T23:59:59').getTime();
```

---

## 🌍 Browser Support

| Browser        | Support |
|----------------|---------|
| Chrome 90+     | ✅ Full  |
| Firefox 88+    | ✅ Full  |
| Safari 14+     | ✅ Full  |
| Edge 90+       | ✅ Full  |
| IE 11          | ❌ Not supported (uses CSS Grid, custom properties, IntersectionObserver) |

---

## 📄 Fonts Licence

Typography served via **Google Fonts** (free, open licence):
- [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) — SIL Open Font License
- [DM Sans](https://fonts.google.com/specimen/DM+Sans) — SIL Open Font License

---

*This mockup was created as a design test submission. All copy is lorem ipsum
placeholder text. All product names, prices, and brand details are fictional.*

---

**David Joseph · May 2026**
