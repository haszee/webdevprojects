/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from "qr-image";
import fs from 'fs';

inquirer
  .prompt([
    {   
    message: "Enter a URL:   ",
    name: "url"
    } 
  ])
  .then((answers) => {
    const urlText = answers.url;
    var qr_svg = qr.image(urlText);
    qr_svg.pipe(fs.createWriteStream('qr_imageHZ.png'));

    fs.writeFile("URLHZ.txt",urlText, (err) => {
        if (err) throw err;
        console.log("The file has been saved")
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      throw err;
      console.log("the url could not be converted into a QR image")
    }
  });

  