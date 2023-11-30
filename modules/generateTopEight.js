import sharp from 'sharp';
import { generateCroppedImage } from './generateCroppedImage.js';
import path from 'path';

async function populateCompositeImages(dirname, data) {
  let composite_imgs = [];

  for (const player of data.players) {
    await generateCroppedImage(dirname, player.character, parseInt(player.alt));
    composite_imgs.push({
      input: path.join(dirname, `data/interim/${player.character}_${player.alt}.png`),
      top: 0,
      left: 0
    });
  }

  if (composite_imgs[0]) {
    composite_imgs[0].top = 700;
    composite_imgs[0].left = 520;
  }

  if (composite_imgs[1]) {
    composite_imgs[1].input = await sharp(composite_imgs[1].input)
      .resize(532, null).png()
      .toBuffer();
    composite_imgs[1].top = 700;
    composite_imgs[1].left = 1535;
  }

  if (composite_imgs[2]) {
    composite_imgs[2].input = await sharp(composite_imgs[2].input)
    .resize(532, null).png()
    .toBuffer();
    composite_imgs[2].top = 700;
    composite_imgs[2].left = 2122;
  }
  
  if (composite_imgs[3]) {
    composite_imgs[3].input = await sharp(composite_imgs[3].input)
    .resize(532, null).png()
    .toBuffer();
    composite_imgs[3].top = 702;
    composite_imgs[3].left = 2710;
  }

  if (composite_imgs[4]) {
    composite_imgs[4].input = await sharp(composite_imgs[4].input)
      .resize(360, null).png()
      .toBuffer();
    composite_imgs[4].top = 1517;
    composite_imgs[4].left = 1535;
  }

  if (composite_imgs[5]) {
    composite_imgs[5].input = await sharp(composite_imgs[5].input)
      .resize(360, null).png()
      .toBuffer();
    composite_imgs[5].top = 1517;
    composite_imgs[5].left = 1987;
  }

  if (composite_imgs[6]) {
    composite_imgs[6].input = await sharp(composite_imgs[6].input)
      .resize(360, null).png()
      .toBuffer();
    composite_imgs[6].top = 1517;
    composite_imgs[6].left = 2441;
  }

  if (composite_imgs[7]) {
    composite_imgs[7].input = await sharp(composite_imgs[7].input)
      .resize(360, null).png()
      .toBuffer();
    composite_imgs[7].top = 1517;
    composite_imgs[7].left = 2882;
  }

  return new Promise((resolve) => resolve(composite_imgs));
}

async function generateTop8(dirname, data, outputname) {
  return new Promise((resolve, reject) => {
    populateCompositeImages(dirname, data).then((comp_imgs_return) => {
      const composite_imgs = comp_imgs_return;

      const fontpath = path.resolve(path.join(dirname, "fonts/Anton-Regular.ttf"));

      sharp(path.join(dirname, "img/bottom-layer.png"))
      .composite(composite_imgs).png()
      .toBuffer((err, buf, info) => {
        if (err) {
          console.log(`PART 1 ERROR: ${err}`);
          reject("Part 1 of GenerateTop8 had an error");
        }
        const step2 = sharp(buf).composite([
          {
            input: {
              text: {
                text: data.tournamentName,
                font: "Anton",
                fontfile: fontpath,
                width: 3000,
                height: 440
              }
            },
            top: 50,
            left: 660
          },
          {
            input: path.join(dirname, "img/top-layer.png"),
            top: 0,
            left: 0
          }
        ]);
        step2.toFile(path.join(dirname, outputname), (err, info) => {
          if (err) {
            reject(`FILEOUT ERR: ${err}`);
          }
          else {
            resolve(path.join("top8er", outputname));
          }
        });
      });
    })
  });
}

export { generateTop8 };
