function generateGrid() {
    // Remove the previous grid, if any
    const gridContainer = document.getElementById("grid-container");
    gridContainer.innerHTML = "";

    // Ask the user for the number of squares per side
    let gridSize = prompt("Enter the number of squares per side (max 100):");

    // Validate input
    if (gridSize > 100) {
        alert("Please enter a number less than or equal to 100.");
        return;
    }

    // Calculate total squares and set the width of each square
    const totalSquares = gridSize * gridSize;
    const squareSize = 960 / gridSize;

    // Create the squares
    for (let i = 0; i < totalSquares; i++) {
        const div = document.createElement("div");
        div.classList.add("grid-item");

        // Adjust size dynamically
        div.style.width = `${squareSize}px`;
        div.style.height = `${squareSize}px`;

        // Add hover effect: Change background color when mouse enters
        div.addEventListener("mouseenter", function () {
            let currentColor = div.style.backgroundColor;
            if (currentColor === "rgb(51, 51, 51)") {
                return; // No need to darken if it's already fully dark
            }
            let newColor = darkenColor(currentColor || "lightgray");
            div.style.backgroundColor = newColor;
        });

        // Append the square to the grid container
        gridContainer.appendChild(div);
    }
}

// Function to darken color by 10%
function darkenColor(color) {
    let colorRgb = rgbToArray(color);
    colorRgb[0] = Math.max(colorRgb[0] - 25, 0);
    colorRgb[1] = Math.max(colorRgb[1] - 25, 0);
    colorRgb[2] = Math.max(colorRgb[2] - 25, 0);
    return `rgb(${colorRgb[0]}, ${colorRgb[1]}, ${colorRgb[2]})`;
}

// Convert color string to RGB array
function rgbToArray(color) {
    let rgb = color.match(/\d+/g); // Extract numbers from rgb string
    return rgb ? rgb.map(Number) : [211, 211, 211]; // Default to lightgray
}

// Initialize the grid when the page loads
generateGrid();
