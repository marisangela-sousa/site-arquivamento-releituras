// let img;
// let cellSize = 20;
// let canvas;
// const slider = document.getElementById("slider");
// const valorSlider = document.getElementById("valorSlider");
// const fileInput = document.getElementById("fileInput");

// valorSlider.innerText = slider.value;
// cellSize = parseInt(slider.value);

// slider.oninput = () => {
//   cellSize = parseInt(slider.value);
//   valorSlider.innerText = cellSize;
//   if (img) redraw();
// };

// fileInput.onchange = (e) => {
//   const file = e.target.files[0];
//   if (!file) return;

//   const reader = new FileReader();
//   reader.onload = (f) => {
//     loadImage(f.target.result, (loadedImg) => {
//       img = loadedImg;

//       if (canvas) {
//         canvas.remove(); // Remove o canvas anterior
//       }

//       canvas = createCanvas(img.width, img.height);
//       canvas.parent("canvas-container");
//       noLoop();
//       redraw();
//     });
//   };
//   reader.readAsDataURL(file);
// };

// function setup() {
//   // Não criamos canvas aqui
//   noLoop();
//   pixelDensity(1);
//   noStroke();
// }

// function draw() {
//   if (!img) return;
//   clear();
//   background(255);
//   img.loadPixels();

//   const numShades = 7;
//   const minOutputGray = 10;
//   const maxOutputGray = 255;

//   for (let y = 0; y < img.height; y += cellSize) {
//     for (let x = 0; x < img.width; x += cellSize) {
//       let pixelX = constrain(x + cellSize / 2, 0, img.width - 1);
//       let pixelY = constrain(y + cellSize / 2, 0, img.height - 1);
//       let index = (pixelX + pixelY * img.width) * 4;
//       let r = img.pixels[index];
//       let g = img.pixels[index + 1];
//       let b = img.pixels[index + 2];
//       let brightness = (r + g + b) / 3;
//       let shadeIndex = floor(map(brightness, 0, 255, 0, numShades));
//       shadeIndex = constrain(shadeIndex, 0, numShades - 1);
//       let tone = map(shadeIndex, 0, numShades - 1, minOutputGray, maxOutputGray);
//       fill(tone);
//       circle(x, y, cellSize);
//     }
//   }
// }

// document.getElementById("salvarBtn").onclick = () => {
//   const nome = document.getElementById("nomeAutor").value.trim();
//   if (!nome) {
//     alert("Digite seu nome antes de salvar.");
//     return;
//   }
//   saveCanvas(`releitura_${nome}`, "png");
// };
