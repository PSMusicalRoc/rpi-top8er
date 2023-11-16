import sharp from 'sharp';
import { generateCroppedImage } from './generateCroppedImage.js';


async function populateCompositeImages(composite_imgs) {
  for (const player of data.players) {
    await generateCroppedImage(player.character, parseInt(player.alt));
    composite_imgs.push({
      input: `data/interim/${player.character}_${player.alt}.png`,
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

  return new Promise((resolve) => resolve());
}

async function generateTop8(data, outpath) {
  return new Promise((resolve, reject) => {
    let composite_imgs = [];
    populateCompositeImages(composite_imgs).then((_) => {
      
    })
  });
}

export { generateTop8 };
