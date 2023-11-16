const helpText = `Usage: node index.js port=[portnum] <options>

Options:
(no options at the moment.)`;



import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

import fs from 'fs';
import path from 'path';

import { characters } from './data/characters.js';

import { input } from '@inquirer/prompts';

import express from "express";
const app = express();
let port = 0;

import { generateCroppedImage } from './modules/generateCroppedImage.js';
import { generateTop8 } from './modules/generateTopEight.js';
import { parseARGV } from './modules/parseARGV.js';
import { warn } from 'console';
import { exit } from 'process';

const parsedArgv = parseARGV(process.argv.slice(2));

for (const item of parsedArgv) {
  if (item.key === "port") {
    port = parseInt(item.value);
  }
}

if (port === 0) {
  console.log("PORT NUMBER NOT DEFINED.");
  console.log(helpText);
  exit();
}

function getLexicalPlacement(place) {
  switch (place) {
    case 1:
      return "1st"
    case 2:
      return "2nd";
    case 3:
      return "3rd";
    case 4:
      return "4th";
    case 5:
    case 6:
      return "5th";
    case 7:
    case 8:
      return "7th";
    default:
      break;
  }
}

function getPlayerContainerData(playernum) {
  let retval = `<label for="playername-p${playernum}">${getLexicalPlacement(playernum)} Place Player Tag</label>
            <input type="text" id="playername-p${playernum}" placeholder="Player Tag...">
            <label for="character-p${playernum}">${getLexicalPlacement(playernum)} Place Main Character</label>
            <select id="character-p${playernum}" onchange="editAlts('character-p${playernum}', 'alt-p${playernum}')">
            <optgroup class="top8er-dropdown">\n`;

  for (const character of characters) {
    if (character.name === "mario") {
      retval += `<option selected value="${character.name}">${character.display}</option>\n`;
    }
    else {
      retval += `<option value="${character.name}">${character.display}</option>\n`;
    }
  }

  retval += `</optgroup>
            </select>
            <label for="alt-p${playernum}">${getLexicalPlacement(playernum)} Place Main Character Costume</label>
            <select id="alt-p${playernum}" class="altselector">
            </select>`;
  
  return retval;
}

app.use(express.json());
app.use("/static", express.static("public"));

app.get("/", (req, res) => {
  const filepath = path.join(__dirname, "./sites/index.html");
  fs.readFile(filepath, (err, data) => {
    if (err) {
      console.log(err);
      res.sendFile(`${__dirname}sites/error.html`);
    }
    else {
      const split = data.toString().split("<!-- playerdata -->");
      let outputcontent = split[0];
      //console.log(`PART 0: ${outputcontent}`);
      for (let i = 1; i < split.length; i++) {
        const temp_str = getPlayerContainerData(i);
        
        //console.log(`PART ${i}: ${temp_str}\n\n${split[i]}`);

        outputcontent += temp_str;
        outputcontent += split[i];
      }

      res.send(outputcontent);
    }
  });
});

app.post("/generateTopEight", (req, res) => {
  const today = new Date();
  const outpath = `./public/generations/${today.getTime()}.png`;

  generateTop8(req.body, outpath).then((retpath) => {
    res.send(retpath.replace("./public", "/static"));
  });
});

app.post("/getAlts", (req, res) => {
  if (req.body.characterName == null) {
    res.send(JSON.stringify({isnull: true}));
    return;
  }

  for (const character of characters) {
    if (character.name === req.body.characterName) {
      res.send(JSON.stringify({
        costumes: character.costume_descriptions,
        isnull: false
      }));
      return;
    }
  }

  res.send(JSON.stringify({isnull: true}));
});

const instance = await app.listen(port, () => {
  console.log(`Listening on 127.0.0.1:${port}!`);
});

let serverContinue = true;

while (serverContinue) {
  const cmdline = await input({ message: "> "});
  if (cmdline === "quit") {
    console.log("Quitting server!");
    instance.close();
    serverContinue = false;
  }
  else if (cmdline === "help") {
    console.log(`
SERVER COMMANDS:

help      Display help message
quit      Quit server
`)
  }
  else {
    console.log(`'${cmdline}' is not a command recognized. Type 'help' for command list.`);
  }
}
