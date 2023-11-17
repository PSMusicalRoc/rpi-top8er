const characters = [
  {
    name: "banjo",
    display: "Banjo and Kazooie",
    costume_descriptions: [
      "Default",
      "Pink",
      "Black",
      "Red",
      "White",
      "Yellow",
      "Blue",
      "Green"
    ]
  },
  {
    name: "bayonetta",
    display: "Bayonetta",
    costume_descriptions: [
      "Default (Bayonetta 2)",
      "Default (Bayonetta 1)",
      "Yellow (Bayonetta 2)",
      "Green (Bayonetta 1)",
      "Red (Bayonetta 2)",
      "Red (Bayonetta 1)",
      "Silver (Bayonetta 2)",
      "Blue (Bayonetta 1)"
    ]
  },
  {
    name: "bowser",
    display: "Bowser",
    costume_descriptions: [
      "Default",
      "Brown",
      "Yellow",
      "Green",
      "Grey",
      "Pink",
      "Red",
      "Blue"
    ]
  },
  {
    name: "bowserjr",
    display: "Bowser Jr.",
    costume_descriptions: [
      "Bowser Jr.",
      "Larry",
      "Roy",
      "Wendy",
      "Iggy",
      "Morton",
      "Lemmy",
      "Ludwig"
    ]
  },
  {
    name: "byleth",
    display: "Byleth",
    costume_descriptions: [
      "Default (Male)",
      "Default (Female)",
      "Blue (Male)",
      "Red (Female)",
      "Yellow (Male)",
      "Sothis (Female)",
      "Green Hair (Male)",
      "Green Hair (Female)"
    ]
  },
  {
    name: "falcon",
    display: "Captain Falcon",
    costume_descriptions: [
      "Default",
      "Grey",
      "Blood Falcon",
      "Green",
      "Retro Colors",
      "Pink",
      "Gold",
      "Black"
    ]
  },
  {
    name: "chrom",
    display: "Chrom",
    costume_descriptions: [
      "Default",
      "Red",
      "Green",
      "Yellow",
      "Brown",
      "Purple",
      "White",
      "Black"
    ]
  },
  {
    name: "cloud",
    display: "Cloud",
    costume_descriptions: [
      "Default (FF7)",
      "Default (AC)",
      "Blue (FF7)",
      "Blue (AC)",
      "Red (FF7)",
      "Black (AC)",
      "Yellow (FF7)",
      "Purple (AC)"
    ]
  },
  {
    name: "corrin",
    display: "Corrin",
    costume_descriptions: [
      "Default (Male)",
      "Default (Female)",
      "Red (Male)",
      "Orange (Female)",
      "Blue (Male)",
      "Pink (Female)",
      "Teal (Male)",
      "Black (Female)"
    ]
  },
  {
    name: "daisy",
    display: "Daisy",
    costume_descriptions: [
      "Default",
      "Green",
      "Pink",
      "Blue",
      "Red",
      "Purple",
      "White",
      "Black"
    ]
  },
  {
    name: "dpit",
    display: "Dark Pit",
    costume_descriptions: [
      "Default",
      "Teal",
      "Brown",
      "Yellow",
      "Red",
      "Blue",
      "White",
      "Purple"
    ]
  },
  {
    name: "dsamus",
    display: "Dark Samus",
    costume_descriptions: [
      "Default",
      "Green",
      "Purple",
      "Brown",
      "Yellow",
      "Silver",
      "Black",
      "Pink"
    ]
  },
  {
    name: "diddy",
    display: "Diddy Kong",
    costume_descriptions: [
      "Default",
      "Yellow",
      "Pink",
      "Purple",
      "Green",
      "Blue",
      "Dark Yellow/Blue",
      "Cyan"
    ]
  },
  {
    name: "donkey",
    display: "Donkey Kong",
    costume_descriptions: [
      "Default",
      "Black",
      "Red",
      "Purple",
      "Green",
      "White",
      "Yellow",
      "Pink"
    ]
  },
  {
    name: "drmario",
    display: "Doctor Mario",
    costume_descriptions: [
      "Default",
      "Red",
      "Blue",
      "Green",
      "Black",
      "Yellow",
      "Purple",
      "Pink"
    ]
  },
  {
    name: "duckhunt",
    display: "Duck Hunt",
    costume_descriptions: [
      "Default",
      "Black",
      "Blue (according to ssbwiki)",
      "Brown",
      "White",
      "Tan",
      "Yellow",
      "Red"
    ]
  },
  {
    name: "falco",
    display: "Falco",
    costume_descriptions: [
      "Default",
      "Orange",
      "Blue/Purple",
      "Red",
      "Green",
      "Black",
      "Cyan",
      "Purple"
    ]
  },
  {
    name: "fox",
    display: "Fox",
    costume_descriptions: [
      "Default",
      "Black",
      "Pink",
      "Green",
      "Orange",
      "Green/Black",
      "Yellow",
      "Purple"
    ]
  },
  {
    name: "ganon",
    display: "Ganondorf",
    costume_descriptions: [
      "Default",
      "Violet",
      "Blue",
      "Green",
      "Purple",
      "Brown",
      "White (Old Manondorf)",
      "Grey"
    ]
  },
  {
    name: "greninja",
    display: "Greninja",
    costume_descriptions: [
      "Default",
      "Red",
      "Pink",
      "Black",
      "Purple",
      "Green",
      "Grey",
      "Dark Purple"
    ]
  },
  {
    name: "hero",
    display: "Hero",
    costume_descriptions: [
      "Default (Luminary)",
      "Erdrick",
      "Solo",
      "Eight",
      "Red Luminary",
      "Purple Erdrick",
      "Orange Solo",
      "Blue Eight"
    ]
  },
  {
    name: "iceclimbers",
    display: "Ice Climbers",
    costume_descriptions: [
      "Default (Popo Lead)",
      "Blue/Sky Blue (Popo Lead)",
      "Green/Yellow (Popo Lead)",
      "Indigo/Sky Blue (Popo Lead)",
      "Red/Grey (Nana Lead)",
      "Brown/Grey (Nana Lead)",
      "Both Ice Blue (Nana Lead)",
      "Orange/Lavender (Nana Lead)"
    ]
  },
  {
    name: "ike",
    display: "Ike",
    costume_descriptions: [
      "Default (Young)",
      "Default (Old)",
      "Purple (Young)",
      "Red (Old)",
      "Yellow (Young)",
      "Green (Old)",
      "Blue (Young)",
      "Black (Old)"
    ]
  },
  {
    name: "incineroar",
    display: "Incineroar",
    costume_descriptions: [
      "Default",
      "Green",
      "Black/Red",
      "Blue",
      "Orange",
      "Purple",
      "Black",
      "Red/White"
    ]
  },
  {
    name: "inkling",
    display: "Inkling",
    costume_descriptions: [
      "Default (Female)",
      "Default (Male)",
      "Yellow (Female)",
      "Green (Male)",
      "Pink (Female)",
      "Cyan (Male)",
      "Purple (Female)",
      "Purple (Male)"
    ]
  },
  {
    name: "isabelle",
    display: "Isabelle",
    costume_descriptions: [
      "Default",
      "Yellow Jacket",
      "Pink Cardigan",
      "Red Jacket",
      "Light Purple Cardigan",
      "Green Jacket",
      "Grey Cardigan",
      "Cyan Jacket"
    ]
  },
  {
    name: "jigglypuff",
    display: "Jigglypuff",
    costume_descriptions: [
      "Default",
      "Hibiscus Leaf",
      "FireRed/LeafGreen Hat",
      "Sun Hat",
      "Sleeping Cap",
      "Ribbon",
      "Nurse Hat",
      "X/Y Hat"
    ]
  },
  {
    name: "joker",
    display: "Joker",
    costume_descriptions: [
      "Default",
      "Purple",
      "Blue",
      "Yellow",
      "Red",
      "White",
      "Schoolboy Black Jacket",
      "Schoolboy White Jacket"
    ]
  },
  {
    name: "kazuya",
    display: "Kazuya",
    costume_descriptions: [
      "Default",
      "Black Suit",
      "Red Pants",
      "Silver Suit",
      "Blue Pants",
      "Purple Suit",
      "Black Pants",
      "Gold Suit"
    ]
  },
  {
    name: "ken",
    display: "Ken",
    costume_descriptions: [
      "Default",
      "Grey",
      "Purple",
      "White",
      "Green",
      "Yellow",
      "Cyan",
      "Black"
    ]
  },
  {
    name: "dedede",
    display: "King Dedede",
    costume_descriptions: [
      "Default",
      "Light Purple",
      "Cyan/Teal",
      "Purple",
      "Cyan",
      "Monochrome",
      "Dark Purple",
      "Black"
    ]
  },
  {
    name: "krool",
    display: "King K. Rool",
    costume_descriptions: [
      "Default",
      "Orange",
      "Cyan",
      "Yellow",
      "Pink",
      "Black",
      "Maroon",
      "White"
    ]
  },
  {
    name: "luigi",
    display: "Luigi",
    costume_descriptions: [
      "Default",
      "Orange",
      "Pink",
      "Sky Blue",
      "Fire Luigi",
      "Purple",
      "Inverted Colors",
      "Olive Green"
    ]
  },
  {
    name: "mario",
    display: "Mario",
    costume_descriptions: [
      "Default",
      "Striped",
      "Pink",
      "Black",
      "Green",
      "Purple",
      "Builder",
      "Wedding"
    ]
  }
];

export { characters };
