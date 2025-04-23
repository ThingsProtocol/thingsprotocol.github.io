# MM Intelligence Website (made by Things Protocol)

A static website for Things Protocol with beautiful animated orb background, built with Next.js and deployed to GitHub Pages.

## Features

- Modern, responsive design
- Beautiful animated orb background
- Static site generation for fast loading
- GitHub Pages deployment

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm 

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/thingsprotocol.com.git
cd thingsprotocol.com
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Development

- `src/app/page.tsx` - The main page component
- `src/components/OrbBackground.tsx` - The animated orb background component

## Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the main branch. To manually trigger a deployment:

1. Build the site:

```bash
npm run build
```

2. Push to GitHub:

```bash
git add .
git commit -m "Your commit message"
git push
```

3. The GitHub Actions workflow will automatically deploy the site to GitHub Pages.

## Credits

- Orb animation inspired by [ReactBits.dev](https://www.reactbits.dev/backgrounds/orb)
