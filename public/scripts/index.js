function generateTopEight() {
  const request = new XMLHttpRequest();
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      // do thing
      document.getElementById("generator-output").setAttribute("src", request.responseText);
      document.getElementById("generate-button").setAttribute("class", "");
      document.getElementById("loading-spinner").setAttribute("class", "disabled");
      document.getElementById("generator-output").scrollIntoView({
        behavior: "smooth"
      });
    }
  };
 

  let tournamentName = document.getElementById("tournament-name").value;
  if (tournamentName === "") {
    tournamentName = "Top 8";
  }

  const requestBody = {
    tournamentName: tournamentName,
    players: [
      {
        character: document.getElementById("character-p1").value,
        alt: parseInt(document.getElementById("alt-p1").value)
      },
      {
        character: document.getElementById("character-p2").value,
        alt: parseInt(document.getElementById("alt-p2").value)
      },
      {
        character: document.getElementById("character-p3").value,
        alt: parseInt(document.getElementById("alt-p3").value)
      },
      {
        character: document.getElementById("character-p4").value,
        alt: parseInt(document.getElementById("alt-p4").value)
      },
      {
        character: document.getElementById("character-p5").value,
        alt: parseInt(document.getElementById("alt-p5").value)
      },
      {
        character: document.getElementById("character-p6").value,
        alt: parseInt(document.getElementById("alt-p6").value)
      },
      {
        character: document.getElementById("character-p7").value,
        alt: parseInt(document.getElementById("alt-p7").value)
      },
      {
        character: document.getElementById("character-p8").value,
        alt: parseInt(document.getElementById("alt-p8").value)
      }
    ]
  };

  request.open("POST", "/top8er/generateTopEight", true);
  request.setRequestHeader("Content-Type", "application/json");
  request.send(JSON.stringify(requestBody));

  document.getElementById("generate-button").setAttribute("class", "disabled");
  document.getElementById("loading-spinner").setAttribute("class", "bottom");
}

function editAlts(char_obj, alt_obj) {
  const request = new XMLHttpRequest();
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      // do thing
      // console.log(request.responseText);
      const ret = JSON.parse(request.responseText);
      let ctr;
      if (ret.isnull === true) {
        for (let element of document.getElementById(alt_obj).children) {
          element.innerHTML = `Alt ${ctr}`;
          ctr++;
        }
      }
      else {
        let num_alts = 0;
        if (!ret.num_alts) {
          num_alts = 8;
        }
        else {
          num_alts = parseInt(ret.num_alts);
        }
        for (let element of document.getElementById(alt_obj).children) {
          if (ctr < num_alts) {
            element.classList.remove("hidden");
            element.innerHTML = `Alt ${ctr}: ${ret.costumes[ctr-1]}`;
          }
          else {
            element.classList.add("hidden");
          }
          ctr++;
        }
        if (ctr < num_alts) {
          let temp = document.createElement("option");
          temp.id = `${alt_obj}-${ctr}`;
          temp.value = `${ctr}`;
          temp.innerHTML = `Alt ${ctr}: ${ret.costumes[ctr - 1]}`;
          document.getElementById(alt_obj).append(temp);
        }
      }
    }
  };

  const requestBody = {
    characterName: document.getElementById(char_obj).value
  };

  request.open("POST", "/top8er/getAlts", true);
  request.setRequestHeader("Content-Type", "application/json");
  request.send(JSON.stringify(requestBody));
}

function populateAltSelectors() {
  const allSelectors = document.getElementsByClassName("altselector");
  for (const s of allSelectors) {
    const sname = s.getAttribute("id");
    for (let i = 1; i <= 8; i++) {
      let temp = document.createElement("option");
      temp.id = `${sname}-${i}`;
      temp.value = `${i}`;
      temp.innerHTML = `Alt ${i}`;

      s.append(temp);
    }
  }
}
