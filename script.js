
// Generating random text color after each click of the title

const generateRandomColor = () => {
  // Converts integer to hex
  const colToHex = (c) => {
    // Hack so colors are bright enough
    let color = c < 75 ? c + 75 : c;
    let hex = color.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  };

  // use colToHex to concatenate
  // a full 6 digit hex code
  const rgbToHex = (r, g, b) => {
    return "#" + colToHex(r) + colToHex(g) + colToHex(b);
  };

  //   Returns three random 0-255 integers
  const getRandomColor = () => {
    return rgbToHex(
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255)
    );
  };

  let color = getRandomColor();
  let color2 = getRandomColor();

  // Set the text
  document.querySelector(".myName").style.color = color;
  document.querySelector(".myCareerRole").style.color = color2;
};

document.querySelector("#title").addEventListener("click", () => {
  generateRandomColor();
});
