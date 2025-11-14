# Technical Writer Portfolio

## About the Project

A modern, responsive portfolio website built with **React** and **Vite**, designed to showcase technical writing expertise, professional experience, and portfolio projects. The site features a clean, accessible design with dark mode support and smooth navigation between multiple sections.

This portfolio demonstrates proficiency in full-stack web development, modern frontend tooling, and deployment best practices using GitHub Pages and GitHub Actions for continuous deployment.

## 🌐 Live Site

**Visit the portfolio:** [https://amcrain.github.io/Technical-Writing-Portfolio/](https://amcrain.github.io/Technical-Writing-Portfolio/)

The site is automatically deployed on every push to the `main` branch via GitHub Actions.

## ✨ Key Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices using Tailwind CSS
- **Dark Mode**: Toggle between light and dark themes with persistent user preference
- **Multi-Section Navigation**: Easy navigation between About, Resume, and Portfolio sections
- **Portfolio Showcase**: Display of professional projects and accomplishments
- **Resume Section**: Organized experience, education, and skills
- **Professional Layout**: Clean, modern UI with smooth transitions and animations
- **Accessibility**: Built with semantic HTML and ARIA attributes for inclusive design
- **Fast Performance**: Optimized build with Vite for quick load times
- **Automated Deployment**: GitHub Actions CI/CD pipeline for seamless updates

## 🛠 Tech Stack

- **Frontend**: React 19, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📦 Getting Started

### Prerequisites
- Node.js 20.19+ or 22+
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/amcrain/Technical-Writing-Portfolio.git
   cd Technical-Writing-Portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173/`

### Build & Deployment

Build for production:
```bash
npm run build
```

Deploy to GitHub Pages:
```bash
npm run deploy
```

The GitHub Actions workflow will automatically deploy on every push to `main`.

## 📝 Project Structure

```
├── components/          # React components (Header, Footer, sections, icons)
├── .github/workflows/   # GitHub Actions CI/CD pipeline
├── index.html          # Entry HTML file
├── App.tsx             # Main App component
├── index.tsx           # React entry point
├── constants.ts        # Content data and configuration
├── types.ts            # TypeScript type definitions
├── vite.config.mjs     # Vite configuration
└── README.md           # Project documentation
```

## 🚀 Workflow

1. Make changes locally in development mode (`npm run dev`)
2. Test and preview changes
3. Commit and push to GitHub
4. GitHub Actions automatically builds and deploys to GitHub Pages
5. Site updates live within seconds

## 📄 License

This project is licensed under the ISC License.

## 🤝 Contributing

Contributions, suggestions, and feedback are welcome! 

---

**Built with React, Vite, and deployed on GitHub Pages**