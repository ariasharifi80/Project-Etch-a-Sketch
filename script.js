const gridcontainer = document.querySelector("#grid-container");
    const btn = document.querySelector("#btn");

    const rgbBtn = document.querySelector("#rgb-btn");

    function generateGrid(a) {
      // Clear existing grid
      gridcontainer.innerHTML = "";

      let squareSize = Math.floor(960 / a); // Use Math.floor to ensure whole numbers
// Calculate size dynamically
      let multiPly = a * a; // Total number of squares

      for (let i = 0; i < multiPly; i++) {
        const square = document.createElement("div");
        
        // Set dynamic size using inline styles
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        // Hover effect
        square.addEventListener("mouseenter", () => {
          square.style.backgroundColor = "#333";
        });
        square.addEventListener("mouseleave", () => {
          square.style.backgroundColor = "#ddd";
        });

        gridcontainer.appendChild(square);
      }
    }

    btn.addEventListener("click", () => {
      let useInput = parseInt(prompt("Enter the number of squares per side (max 100):"));

      if (isNaN(useInput) || useInput <= 0) {
        alert("Invalid input! Enter a valid number.");
      } else if (useInput > 100) {
        alert("Please enter a number up to 100.");
      } else {
        generateGrid(useInput);
      }
    });



    rgbBtn.addEventListener('click', () => {
        const squares = document.querySelectorAll("#grid-container div");
        squares.forEach(square => {
            let r = Math.floor(Math.random() * 255);
            let g = Math.floor(Math.random() * 255);
            let b = Math.floor(Math.random() * 255);

            square.style.backgroundColor = `rgb(${r},${g},${b})`;
        });
    });

    // Generate default grid (16x16)
    generateGrid(16);