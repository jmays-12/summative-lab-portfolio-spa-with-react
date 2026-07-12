# Personal Project Showcase App

A single-page React portfolio application for creating, viewing, and searching project cards. The app includes a theme system with multiple visual styles, responsive layouts, and reusable components.

## Features

- Add new projects through a form with:
    - Project title
    - Description
    - Image URL
    - Form validation with error messaging

- View projects in a reusable card layout
    - Displays project images when available
    - Provides a fallback when no image is supplied

- Search projects
    - Filters projects by title or description
    - Updates results as the user types

- Dynamic theme switching
    - Multiple built-in themes:
        - Modern
        - Warm
        - Retro
        - Dark
    - Theme styles are managed globally through React Context

- Responsive layout
    - Mobile friendly stacking
    - Desktop grid layout for header elements

- Component based hierarchy
    - Reusable React components:
        - Header
        - ThemeSwitcher
        - AddProjectForm
        - SearchBar
        - ProjectList
        - ProjectCard

- Unique project identifiers
    - New projects are assigned UUID-based IDs

- Automated testing
    - Component tests using Jest and React Testing Library
    - Covers:
        - Form validation and submission
        - Project rendering
        - Search functionality
        - Theme switching behavior

---

## Technologies Used

- React
- Vite
- Tailwind CSS
- React Context API
- Jest
- React Testing Library
- UUID

---

## Setup Instructions

### Prerequisites

Make sure you have:

- Node.js installed (v18+ recommended)
- npm installed

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Navigate into the project directory:

```bash
cd summative-lab-portfolio-spa-with-react
```

3. Install dependencies:

```bash
npm install
```

### Running the Application

Start the local development server:

```bash
npm run dev
```

The application will be available through the localhost URL provided by Vite.

### Building for Production

Create an optimized production build:

```bash
npm run build
```

### Running Tests

Run the Jest test suite:

```bash
npm test
```

Tests cover:

- Adding projects through the form
- Rendering project lists and project cards
- Searching/filtering projects
- Theme switching behavior
- Form validation


### Component tree:

```summative-lab-portfolio-spa-with-react/
├── public/
│   └── favicon.svg
└── src/
     ├── components/
     │   ├── AddProjectForm.jsx
     │   ├── Header.jsx
     │   ├── ProjectCard.jsx
     │   ├── ProjectList.jsx
     │   ├── SearchBar.jsx
     │   └── ThemeSwitcher.jsx
     ├── assets/
     │   └── backgrounds/   
     │       └── retro-bg.png
     │
     ├── context/ (themes)
     │   └── ThemeContext.jsx
     │
     ├── data/  (dummy data only, not required)
     │   └── ProjectsData.jsx
     │
     ├── tests/
     │   ├── AddProjectForm.test.jsx
     │   ├── App.test.jsx
     │   ├── ProjectCard.test.jsx
     │   ├── ProjectList.test.jsx
     │   ├── SearchBar.test.jsx
     │   └── ThemeSwitcher.test.jsx
     │
     ├── App.jsx
     ├── main.jsx
     ├── index.html
     └── index.css (contains backgrounds only, Tailwind used for everything else)```
