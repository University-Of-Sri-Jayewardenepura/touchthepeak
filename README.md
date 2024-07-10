<p align="center">
  <a href="http://careerskills.sjp.ac.lk/">
    <picture>
      <source media="(prefers-color-scheme: dark)">
      <img src="./public/logo.png" height="128">
    </picture>
    <h1 align="center">Touch The Peak</h1>
    <p align="center">✨ The The #1 Job Platform for
Undergraduates in Sri Lanka ✨</p>
  </a>
</p>

TouchThePeak is Sri Lanka's leading job site for undergraduates, where job seekers and employers connect. It's the ideal place to find your next career opportunity or to hire skilled talent.

Organized by the Career Skills Development Society of the University, this highly regarded award ceremony, initiated in 2015, continues to captivate audiences. Join us this year to witness the expansion of the JESA legacy, as talented undergraduates from diverse institutions compete for the coveted Best Innovator Award.

## Contributing

Prerequisites :

- Install [Git](https://www.git-scm.com/downloads).
- Install [Bun](https://bun.sh/).

Install Bun:

_Linux & macOS_

`$ curl -fsSL https://bun.sh/install | bash`

_Windows_

`> powershell -c "irm bun.sh/install.ps1 | iex"`

We recomment using Bun for faster development and runtime

- `git clone https://github.com/University-Of-Sri-Jayewardenepura/touchthepeak`
- `cd touchthepeak`
- `bun install`
- `bun run dev`

App Structure

```
├── app
│   ├── api
│   │   ├── register
│   │   |   ├── ...
│   ├── awards
│   │   ├── page.tsx
│   │   └── awards-card.tsx
│   ├── hall-of-fame
│   │   ├── page.tsx
│   │   └── hall-of-fame.tsx
│   ├── register
│   │   ├── page.tsx
│   │   ├── ...
│   ├── terms
│   │   ├── page.tsx
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── page.tsx
│   └── error.tsx
│   └── sitemap.ts
│   └── fonts.ts
├── components
│   ├── ui
│   │   ├── alert-dialog.tsx
│   │   ├── button.tsx
│   │   ├── dropdown-menu.tsx
│   │   └── ...
│   ├── animated
│   │   ├── blur-in.tsx
│   └── ├── ...
│   ├── navbar.tsx
│   └── ...
├── constants
│   └── awards.ts
│   └── form.ts
│   └── ...
├── models
├── public
│   └── fonts
│   └── images
├── lib
│   └── utils.ts
│   └── mongodb.ts
├── bun.lockb
├── .env.example
├── components.json
├── LICENSE.md
├── next.config.js
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── tsconfig.json
```

## Built with:

### JavaScript frameworks:

- <a href="https://react.dev/">React</a>
- <a href="https://nextjs.org/">Next.js 14</a>

### UI frameworks :

- <a href="https://www.radix-ui.com/">Radix UI</a>
- <a href="https://ui.shadcn.com/">shadcn UI</a>
- <a href="https://tailwindcss.com/">Tailwind CSS</a>

### Animations

- <a href="https://www.framer.com/motion/animation/">Framer Motion</a>

### Icons

- <a href="https://lucide.dev/icons/">Lucide</a>

### Analytics

- <a href="https://analytics.google.com/">Google Analytics GA4</a>

### Data Validation

- <a href="https://zod.dev/">Zod</a>

### Deployment

- <a href="https://vercel.com">Vercel</a>

## Authors

- [Sonal Jayasinghe](https://github.com/SonalJayasinghe)
- [Pruthivi Thejan](https://links.pruthivithejan.me)
- [Yasitha Renuk](https://github.com/YasithaRenuk)
- [Kasun Rathnayaka](https://github.com/kasun-m-rathnayaka)