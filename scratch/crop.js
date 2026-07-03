const fs = require('fs');
const path = require('path');
const { createCanvas, loadImage } = require('canvas');

async function cropLogo() {
  const inputPath = path.join(__dirname, '../public/icon.png');
  const img = await loadImage(inputPath);
  
  // Create a canvas with the original image size
  const canvas = createCanvas(img.width, img.height);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
  
  const imageData = ctx.getImageData(0, 0, img.width, img.height);
  const data = imageData.data;
  
  // Find bounding box of non-transparent and non-white pixels
  let minX = img.width;
  let minY = img.height;
  let maxX = 0;
  let maxY = 0;
  
  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {
      const alphaIndex = (y * img.width + x) * 4 + 3;
      const rIndex = (y * img.width + x) * 4;
      const gIndex = (y * img.width + x) * 4 + 1;
      const bIndex = (y * img.width + x) * 4 + 2;
      
      const r = data[rIndex];
      const g = data[gIndex];
      const b = data[bIndex];
      const a = data[alphaIndex];
      
      // If it is not white (or transparent)
      const isWhite = r > 240 && g > 240 && b > 240;
      const isTransparent = a < 10;
      
      if (!isWhite && !isTransparent) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  
  // Add small padding (e.g. 5%)
  const width = (maxX - minX) || img.width;
  const height = (maxY - minY) || img.height;
  const pad = Math.round(Math.min(width, height) * 0.05);
  
  const cropX = Math.max(0, minX - pad);
  const cropY = Math.max(0, minY - pad);
  const cropW = Math.min(img.width - cropX, width + pad * 2);
  const cropH = Math.min(img.height - cropY, height + pad * 2);
  
  // Draw cropped image onto new square canvas
  const size = Math.max(cropW, cropH);
  const destCanvas = createCanvas(size, size);
  const destCtx = destCanvas.getContext('2d');
  
  // Center it
  const dx = (size - cropW) / 2;
  const dy = (size - cropH) / 2;
  
  destCtx.drawImage(
    img,
    cropX, cropY, cropW, cropH,
    dx, dy, cropW, cropH
  );
  
  const buffer = destCanvas.toBuffer('image/png');
  fs.writeFileSync(inputPath, buffer);
  console.log('Successfully cropped white margins from logo!');
}

cropLogo().catch(console.error);
