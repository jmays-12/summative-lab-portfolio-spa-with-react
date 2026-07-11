# Personal Project Showcase

A single-page React portfolio application for creating, viewing, and searching project cards. The app includes a theme system with multiple visual styles, responsive layouts, and reusable components.

## Features

- Add new projects through a form
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
    - Mobile-friendly stacking
    - Desktop grid layout for header elements

- Component-based architecture
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

- Node.js installed
- npm installed

Check your versions:

```bash
node -v
npm -v
```
