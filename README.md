# Recipe App

A modern React application to search and discover recipes using the Spoonacular API.

## Features
- Search for recipes by keyword
- View recipe results in a clean, responsive UI
- Modular folder structure for scalability
- Centralized API logic
- Easy to extend with new features (e.g., filters, favorites)

## Folder Structure
```
src/
  assets/         # Images, icons, and static assets
  components/     # Reusable React components
  pages/          # Page-level components (Home, About, etc.)
  styles/         # CSS and style-related files
  utils/          # Utility functions (API calls, helpers)
  App.js          # Main app component
  index.js        # Entry point
```

## Getting Started

### Prerequisites
- Node.js (v16 or above recommended)
- npm or yarn
- Spoonacular API key ([get one here](https://spoonacular.com/food-api))

### Installation
```bash
npm install
```

### Running the App
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Building for Production
```bash
npm run build
```

## Customization
- Add your Spoonacular API key in `src/utils/api.js`.
- Add new pages in `src/pages/` and components in `src/components/`.
- Update styles in `src/styles/`.

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.
