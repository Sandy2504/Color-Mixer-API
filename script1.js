const redSlider = document.querySelector("#redSlider");
const greenSlider = document.querySelector("#greenSlider");
const blueSlider = document.querySelector("#blueSlider");
const randomButton = document.querySelector("#random-button");
const colorValue = document.querySelector(".color-value");
const colorApp = document.querySelector(".color-field");

// Function to update the color based on the slider values
function updateColor() {
  const redValue = redSlider.value; //call html value of each slider. the value property is set in the element and contains a number from 0 to 255.
  const greenValue = greenSlider.value;
  const blueValue = blueSlider.value;

  // Update the text content of the .color-value element with the rgb value
  colorValue.textContent = `RGB: (${redValue}, ${greenValue}, ${blueValue})`;

  // Set background color of color-field to calculated RGB color
  colorApp.style.backgroundColor = `rgb(${redValue},${greenValue},${blueValue})`;
}

function fetchRandomColor() {
  fetch("https://dummy-apis.netlify.app/api/color")
    .then((response) => response.json())
    .then((data) => {
      const { color } = data || {};
      if (color) {
        colorValue.textContent = `RGB: ${color}`;
        colorApp.style.backgroundColor = color;
      } else {
        console.error("Invalid data format");
      }
    });
}

redSlider.addEventListener("input", updateColor);
greenSlider.addEventListener("input", updateColor);
blueSlider.addEventListener("input", updateColor);
randomButton.addEventListener("click", fetchRandomColor);

updateColor();
