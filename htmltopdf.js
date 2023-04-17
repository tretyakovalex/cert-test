// const puppeteer = require('puppeteer');
// const path = require('path');

// async function generatePDF() {
//   try {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
  
//     const url = 'http://localhost:4000/';
//     await page.goto(url, {waitUntil: 'networkidle0'});
  
//     await page.pdf({
//       path: 'output.pdf',
//       format: 'A4',
//       printBackground: true
//     });
  
//     await browser.close();
//   } catch (error) {
//     console.error(error);
//   }
// }

// generatePDF();


const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

function generatePDF() {
  const html = fs.readFileSync(path.join(__dirname, 'public', 'index.html'), 'utf-8');
  puppeteer
  .create(html, { printBackground: true })
  .then((pdfBuffer) => {
    fs.writeFileSync(path.join(__dirname, 'output.pdf'), pdfBuffer);
  })
  .catch((error) => {
    console.error(`Error generating PDF: ${error}`);
  });
}

generatePDF();
