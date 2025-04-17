# Simple Health Records Prototype

A basic front-end prototype demonstrating various views for a health records application, built purely with vanilla HTML, CSS, and JavaScript.

## Pages

This prototype includes the following pages:

*   `index.html`: Main entry point or dashboard (adjust description if needed).
*   `records.html`: Displays a list of health records.
*   `health_view.html`: Shows a specific health view/summary.
*   `abha_id.html`: Related to ABHA ID management/view.
*   `details.html`: Displays details for a specific item/record.
*   `component library.html`: A static visual guide showcasing available components and styles.

## Running the Project

No complex setup is required. Simply clone or download the repository and open any of the `.html` files directly in your web browser.

## Project Structure

The project follows a simple structure aimed at demonstrating basic component reuse without a framework:

*   **HTML Files (`*.html`):** Define the structure for each page. Some pages contain `<template>` elements that define the structure for reusable components.
*   **`styles.css`:** A single CSS file containing all the styles for the application, including styles for reusable components.
*   **`components.js`:** Contains JavaScript functions (e.g., `createRecordItem`, `createSearchComponent`) responsible for cloning HTML templates, populating them with data, and returning the component's DOM element for insertion into the pages.

This approach allows for basic component reuse and centralized styling.