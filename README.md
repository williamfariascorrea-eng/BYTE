# BYTE.

A retro-tech studio website with a late-90s terminal aesthetic. Built with plain **HTML, CSS and JavaScript** — no frameworks, no dependencies.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-Onboarded-22c55e)

## ✨ Features

- **Retro CRT aesthetic** — green terminal (`#39ff14`) on near-black, with scanline overlay
- **Blinking terminal cursor** — animated with pure CSS
- **Smooth anchor scrolling** — native `scroll-behavior: smooth`
- **Working contact form** — validates input and shows inline confirmation (simulated submission, no backend yet)
- **Responsive layout** — adapts from mobile to desktop
- **Custom SVG favicon** — terminal-style `>_` mark

## 🛠 Tech Stack

| Concern     | Tool                    |
|-------------|-------------------------|
| Markup      | Semantic HTML5          |
| Styling     | CSS3 (Flexbox, animations) |
| Logic       | Vanilla JavaScript (ES6+) |

No build step — open `index.html` and it works.

## 🚀 Getting Started

```bash
# Just open the page
# (e.g. double-click index.html or serve the folder)
```

Or serve it locally with any static server:

```bash
npx serve .
```

## 📁 Structure

```
byte/
  index.html       # Main page
  css/
    style.css      # Styles (retro theme, layout, cursor)
  js/
    script.js      # Contact form logic
  img/
    favicon.svg    # Browser icon
```

## 🗺 Roadmap

- [x] Retro-tech hero
- [x] About and Contact sections
- [x] Form with validation and inline confirmation
- [ ] Integrate real email sending (Formspree / Web3Forms)
- [ ] More sections (services, portfolio, timeline)

## 📄 License

MIT © William Corrêa