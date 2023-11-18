import sharp from 'sharp';
import path from 'path';
import { fighter_data } from '../data/fighters/fighter_data.js';
import Color from 'color';

const rect_width = 950;
const rect_height = 1316;

async function generateCroppedImage(dirname, characterName, alt) {
  return new Promise((resolve, reject) => {
    if (!fighter_data[characterName]) {
      reject(`Error: Character with name ${characterName} does not exist!`);
    }
  
    const fd_all = fighter_data[characterName];
    let fd = null;
    for (const fd_temp of fd_all) {
      if (fd_temp.alts.includes(alt)) {
        fd = fd_temp;
        break;
      }
    }
  
    if (fd == null) {
      reject(`Error: Alt ${alt} of character ${characterName} does not exist!`);
    }

    let beginning = sharp(path.join(dirname, `data/fighters/${characterName}/${characterName}_${alt}.png`));
    if (fd.resizedWidth) {
      beginning = beginning.resize(fd.resizedWidth, null);
    }

    beginning.png()
      .toBuffer((err, begin_buf, info) => {
        if (err) {
          reject(`TO BUFFER REJECTION: ${err}`);
        }
        // Distance in pixels for the crop operation to be
        // offset by
        let cropY = fd.offsetY < 0 ? -fd.offsetY : 0;
        let cropX = fd.offsetX < 0 ? -fd.offsetX : 0;
        
        // Distance in pixels for the composite operation to
        // be offset by
        let pasteX = fd.offsetX < 0 ? 0 : fd.offsetX;
        let pasteY = fd.offsetY < 0 ? 0 : fd.offsetY;
       
          beginning.metadata((err, meta) => {
            if (err) {
              reject(`REJECT GENERATECROPPED: ${err}`);
            }
            else {
              let xDimension = Math.max(rect_width, meta.width);
              xDimension += Math.max(cropX, pasteX);
              let yDimension = Math.max(rect_height, meta.height);
              yDimension += Math.max(cropY, pasteY);
      
              // console.log(`${characterName}, ${xDimension}, ${yDimension}`);
              // console.log(`${characterName}, ${meta.width + pasteX}, ${meta.height + pasteY}`);
              // console.log(`${characterName}, ${rect_width + cropX}, ${rect_height + cropY}`);
      
              sharp({
                create: {
                  width: xDimension,
                  height: yDimension,
                  channels: 4,
                  background: Color("#ffffff").alpha(0.0)
                }
              }).png().toBuffer((err, buf, info) => {
                sharp(buf).composite([
                  {
                    input: begin_buf,
                    top: pasteY,
                    left: pasteX
                  }
                ]).png().toBuffer((err, buf, info) => {
                  sharp(buf).extract({
                    left: cropX,
                    top: cropY,
                    width: rect_width,
                    height: rect_height
                  })
                  .toFile(path.join(dirname, `data/interim/${characterName}_${alt}.png`))
                  .then((val) => resolve(""));
                });
              });
            }
        });

      });
  
  });
  
}

export { generateCroppedImage };
