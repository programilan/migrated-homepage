# Kotlin website

This is a simplified version of https://kotlinlang.org, migrated to React Router 7 Framework Mode, created for the JetSites 2026 internship test assignment.

## Implementation Summary

The project was rebuilt from scratch using React Router with SSR support via Vite. The page migration was generally smooth, with most issues coming from sections that relied on browser-only APIs such as window, DOM, and localStorage. These were resolved using useEffect or with minor code adjustments to ensure SSR compatibility.

The main challenge was integrating kotlin-ui header/footer and rescui components. This required configuration changes to prevent dependency externalization and ensuring that no browser-only or deprecated APIs were used during server rendering of these components.

The original functionality and visual appearance were preserved, while updating the project to use the latest rescui and kotlin-ui components.

## How to Run

### Development

Start the development server with HMR:

```bash
npm install

npm run dev
```

Application will be available at `http://localhost:5173`.

### Local Deployment

Create a production build:

```bash
npm install

npm run build

# Run the build
npm start
```

Application will be available at `http://localhost:3000`.

### Docker Deployment

To build and run using Docker:

```bash
docker build -t migrated-homepage .

# Run the container
docker run -p 3000:3000 migrated-homepage
```

Application will be available at `http://localhost:3000`.

## Project Structure

```
migrated_homepage/
├───assets/
├───public/
├───root.tsx
├───routes.ts          # route declarations in Framework Mode
├───vite.config.ts
└───app/
    ├───components/    # holds all reusable components
    │   └───layout/    # sub-group of related components
    ├───css/           # holds css styles
    │   ├───config/    # sub-group of related styles
    │   ├───fonts/
    │   └───util/
    ├───data/          # holds all reusable data files
    ├───hooks/         # holds all hooks
    │   └───ssr-safe/  # holds ssr-safe overrides of hooks
    ├───types/         # type declarations
    ├───sections/      # reusable sections between multiple pages
    └───routes/            # holds all routes/pages
        └───home/
            ├───index.tsx  # page component
            ├───index.scss # page styles
            └───sections/  # sections for this page only
                ├───header/
                │   ├───data.ts    # section data
                │   ├───index.tsx  # section component
                │   └───index.scss # section styles
                ├───latest-from-kotlin/
                ├───start/
                ├───usage/
                └───why-kotlin/
                    └───section/   # each section can hold sub-sections...
                        └───programming-language/

```
