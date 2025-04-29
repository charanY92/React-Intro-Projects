# Parcel Notes

## What is Parcel?

Parcel is a fast, zero-configuration web application bundler that supports modern JavaScript, TypeScript, CSS, and more.

## Key Features

- **Zero Configuration**: Works out of the box without requiring extensive setup.
- **Blazing Fast**: Uses multi-core processing and caching for faster builds.
- **Hot Module Replacement (HMR)**: Automatically updates modules in the browser without refreshing the page.
- **Tree Shaking**: Removes unused code to optimize bundle size.
- **Code Splitting**: Automatically splits code for better performance.
- **Support for Multiple File Types**: Handles JavaScript, CSS, HTML, images, and more.
- **Built-in Development Server**: Comes with a local server for development.

## Installation

```bash
npm install -g parcel-bundler
```

## Usage

### Create a Project

1. Initialize a new project:

```bash
npm init -y
```

2. Install Parcel locally:

```bash
npm install parcel
```

### Run Parcel

- Development mode:
  ```bash
  npx parcel index.html
  ```
- Build for production:
  ```bash
  npx parcel build index.html
  ```

## Configuration

- Parcel works without configuration, but you can add a `.parcelrc` file for advanced customization.

## Advantages

- Easy to use for beginners.
- Supports modern web development features.
- Reduces boilerplate setup.

## Resources

- [Official Documentation](https://parceljs.org/)
- [GitHub Repository](https://github.com/parcel-bundler/parcel)
