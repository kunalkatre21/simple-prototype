// This file will contain reusable component functions.

/**
 * Creates a record item DOM element from a template.
 * @param {string} iconClass - The CSS class for the icon background/color (e.g., 'icon-1').
 * @param {string} iconName - The Material Icons name (e.g., 'medication').
 * @param {string} title - The main title of the record.
 * @param {string} date - The date associated with the record.
 * @param {string} value - The value or status text for the record.
 * @returns {Node} - The populated record item DOM element (a DocumentFragment).
 */
function createRecordItem(iconClass, iconName, title, date, value) {
    // 1. Get the template
    const template = document.getElementById('record-item-template');

    // 2. Clone the template content
    const clone = template.content.cloneNode(true);

    // 3. Select placeholder elements within the clone
    const recordItemDiv = clone.querySelector('.record-item'); // Get the main div if needed later
    const iconDiv = clone.querySelector('.record-icon');
    const iconElement = clone.querySelector('.record-icon .material-icons');
    const titleElement = clone.querySelector('.record-title');
    const dateElement = clone.querySelector('.record-date');
    const valueElement = clone.querySelector('.record-value');

    // 4. Populate the placeholders
    if (iconDiv && iconClass) {
        iconDiv.classList.add(iconClass); // Add the specific category class
    }
    if (iconElement && iconName) {
        iconElement.textContent = iconName;
    }
    if (titleElement) {
        titleElement.textContent = title;
    }
    if (dateElement) {
        dateElement.textContent = date;
    }
    if (valueElement) {
        valueElement.textContent = value;
    }

    // 5. Return the populated element
    return clone; // Return the DocumentFragment containing the populated .record-item div
}

/**
 * Creates a search component DOM element from a template.
 * @returns {Node} - The populated search component DOM element (a DocumentFragment).
 */
function createSearchComponent() {
    // 1. Get the template
    // Note: Assumes the template is available in the document where this script runs.
    // It might be better to fetch it from component library.html if this runs elsewhere.
    const template = document.getElementById('search-component-template');

    if (!template) {
        console.error('Search component template not found!');
        return document.createDocumentFragment(); // Return empty fragment
    }

    // 2. Clone the template content
    const clone = template.content.cloneNode(true);

    // 3. Select elements within the clone
    const searchInput = clone.querySelector('.search-input');
    // const searchIcon = clone.querySelector('.search-icon'); // If needed later

    // 4. Add event listeners
    if (searchInput) {
        searchInput.addEventListener('input', (event) => {
            console.log('Search input:', event.target.value);
            // In a real app, you'd trigger the actual search/filter logic here
        });
    }

    // 5. Return the populated element
    return clone; // Return the DocumentFragment containing the populated .search-bar div
}
