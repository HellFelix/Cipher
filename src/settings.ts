// create all the elemens for the settings screen
// note that the plugboard is handled separately in a 
// file called src/plugboard.ts, for the sake of simplicity

export const settingsScreen = document.createElement("div")
settingsScreen.id = "settingsScreen";

const rotorsScreen = document.createElement("div");
rotorsScreen.id = "rotorsScreen";
settingsScreen.appendChild(rotorsScreen);

const separator = document.createElement("hr");
separator.style.width = "1px";
separator.style.height = "100%";
separator.style.float = "left";
separator.style.margin = "0";
separator.style.border = "0";
separator.style.padding = "0";
separator.style.color = "balck";
separator.style.background = "black";
settingsScreen.appendChild(separator);

// let's start with the rotors
// for each individual rotor, there will be a label and a textbox to fill
// out the position of the rotors

// label for rotors
const rotorLabelDiv = document.createElement("div");
rotorLabelDiv.id = "rotorLabelDiv";
rotorsScreen.appendChild(rotorLabelDiv);

const rotorLabel = document.createElement("h2");
rotorLabel.textContent = "Rotors";
rotorLabel.style.paddingTop = "15%";
rotorLabelDiv.appendChild(rotorLabel);

// rotor 1
const inputRotor1Div = document.createElement("div");
inputRotor1Div.style.height = "18%";
inputRotor1Div.style.width = "100%";
inputRotor1Div.className = "rotorDiv";
rotorsScreen.appendChild(inputRotor1Div);

const labelRotor1 = document.createElement("label");
labelRotor1.textContent = "Position for rotor I";
inputRotor1Div.appendChild(labelRotor1);

const inputRotor1 = document.createElement("input");
inputRotor1.type = "text";
inputRotor1.placeholder = "1";
inputRotor1.style.width = "20%"
inputRotor1Div.appendChild(inputRotor1);

// notch position

const labelNotch1 =document.createElement("label");
labelNotch1.textContent = "Notch positions:";
inputRotor1Div.appendChild(labelNotch1);

const inputNotch1 = document.createElement("input");
inputNotch1.placeholder = "1";
inputNotch1.style.width = "20%";
inputRotor1Div.appendChild(inputNotch1);

// rotor 2
const inputRotor2Div = document.createElement("div");
inputRotor2Div.style.height = "18%";
inputRotor2Div.style.width = "100%";
inputRotor2Div.className = "rotorDiv";
rotorsScreen.appendChild(inputRotor2Div);

const labelRotor2 = document.createElement("label");
labelRotor2.textContent = "Position for rotor II";
inputRotor2Div.appendChild(labelRotor2);

const inputRotor2 = document.createElement("input");
inputRotor2.placeholder = "1";
inputRotor2.type = "text";
inputRotor2.style.width = "20%"
inputRotor2Div.appendChild(inputRotor2);

// notch position

const labelNotch2 =document.createElement("label");
labelNotch2.textContent = "Notch positions:";
inputRotor2Div.appendChild(labelNotch2);

const inputNotch2 = document.createElement("input");
inputNotch2.placeholder = "1";
inputNotch2.style.width = "20%";
inputRotor2Div.appendChild(inputNotch2);

// rotor 3
const inputRotor3Div = document.createElement("div");
inputRotor3Div.style.height = "18%";
inputRotor3Div.style.width = "100%";
inputRotor3Div.className = "rotorDiv";
rotorsScreen.appendChild(inputRotor3Div);

const labelRotor3 = document.createElement("label");
labelRotor3.textContent = "Position for rotor III";
inputRotor3Div.appendChild(labelRotor3);

const inputRotor3 = document.createElement("input");
inputRotor3.placeholder = "1";
inputRotor3.type = "text";
inputRotor3.style.width = "20%"
inputRotor3Div.appendChild(inputRotor3);

// notch position

const labelNotch3 =document.createElement("label");
labelNotch3.textContent = "Notch positions:";
inputRotor3Div.appendChild(labelNotch3);

const inputNotch3 = document.createElement("input");
inputNotch3.placeholder = "1";
inputNotch3.style.width = "20%";
inputRotor3Div.appendChild(inputNotch3);

// rotor 4
const inputRotor4Div = document.createElement("div");
inputRotor4Div.style.height = "18%";
inputRotor4Div.style.width = "100%";
inputRotor4Div.className = "rotorDiv";
rotorsScreen.appendChild(inputRotor4Div);

const labelRotor4 = document.createElement("label");
labelRotor4.textContent = "Position for rotor IV";
inputRotor4Div.appendChild(labelRotor4);

const inputRotor4 = document.createElement("input");
inputRotor4.type = "text";
inputRotor4.placeholder = "1";
inputRotor4.style.width = "20%"
inputRotor4Div.appendChild(inputRotor4);

// notch position

const labelNotch4 =document.createElement("label");
labelNotch4.textContent = "Notch positions:";
inputRotor4Div.appendChild(labelNotch4);

const inputNotch4 = document.createElement("input");
inputNotch4.placeholder = "1";
inputNotch4.style.width = "20%";
inputRotor4Div.appendChild(inputNotch4);

// rotor 5
const inputRotor5Div = document.createElement("div");
inputRotor5Div.style.height = "18%";
inputRotor5Div.style.width = "100%";
inputRotor5Div.className = "rotorDiv";
rotorsScreen.appendChild(inputRotor5Div);

const labelRotor5 = document.createElement("label");
labelRotor5.textContent = "Position for rotor V";
inputRotor5Div.appendChild(labelRotor5);

const inputRotor5 = document.createElement("input");
inputRotor5.type = "text";
inputRotor5.placeholder = "1";
inputRotor5.style.width = "20%"
inputRotor5Div.appendChild(inputRotor5);

// notch position

const labelNotch5 =document.createElement("label");
labelNotch5.textContent = "Notch positions:";
inputRotor5Div.appendChild(labelNotch5);

const inputNotch5 = document.createElement("input");
inputNotch5.placeholder = "1";
inputNotch5.style.width = "20%";
inputRotor5Div.appendChild(inputNotch5);

const rotorPositionsElem: HTMLInputElement[] = [inputRotor1, inputRotor2, inputRotor3, inputRotor4, inputRotor5];
// create the default positions
export const rotorPositions: number[] = [1, 1, 1, 1, 1];


for (let i = 0; i < 5; i++) {
  rotorPositionsElem[i].onchange = () => {
    if (rotorPositionsElem[i]) {
      rotorPositions[i] = parseInt(rotorPositionsElem[i].value);
    } else {
      // if input is empty, we set to default
      rotorPositions[i] = 1;
    }
  }
}

const notchPositionElem: HTMLInputElement[] = [inputNotch1, inputNotch2, inputNotch3, inputNotch4, inputNotch5];
// set the default
export const notchPositions: number[][] = [[1], [1], [1], [1], [1]];

for (let i = 0; i < 5; i++) {
  notchPositionElem[i].onchange = () => {
    if (notchPositionElem[i]) {
      let notchArray: number[] = [];
      notchPositionElem[i].value.split(",").forEach((numb: string) =>{
        notchArray.push(parseInt(numb));
      });
      notchPositions[i] = notchArray;
    }
  }
}


// plug board representation
// this is where the client can interact and input things to the plugboard

const plugScreen = document.createElement("div");
plugScreen.id = "plugScreen";
plugScreen.style.height = "100%";
plugScreen.style.width = "69%";
plugScreen.style.paddingLeft = "5px";
plugScreen.style.float = "left";
settingsScreen.appendChild(plugScreen);

const plugScreenLabel = document.createElement("div");
plugScreenLabel.id = "plugScreenLabel";
plugScreen.appendChild(plugScreenLabel);

export const buttonBack = document.createElement("button");
buttonBack.textContent = "Back";
buttonBack.id="buttonBack";
plugScreenLabel.appendChild(buttonBack);

let plugInputs = new Map<number, HTMLInputElement>;
let plugDivs = new Map<number, HTMLDivElement>;

const plugTitle = document.createElement("h2");
plugTitle.textContent = "plugboard"
plugScreenLabel.appendChild(plugTitle);

for (let i = 32; i <= 126; i++) {
  // create the symbols individual div
  let plugDiv = document.createElement("div");
  plugDiv.className = "plugDiv";
  plugScreen.appendChild(plugDiv);
  // create the nametag (label) for the character
  let plugLabel = document.createElement("h5");
  plugLabel.textContent = String.fromCharCode(i);
  plugLabel.style.margin = "5px";
  plugLabel.style.float = "left";
  plugDiv.appendChild(plugLabel);
  // create the text input for each character
  let plugInput = document.createElement("input");
  plugInput.type = "text";
  plugInput.style.width = "20%";
  plugInput.style.float = "right";
  plugInput.style.marginRight = "23%";
  plugInput.placeholder = String.fromCharCode(i);
  plugDiv.appendChild(plugInput);
  // set the mapping of each number to the correct input
  plugInputs.set(i, plugInput);
  plugDivs.set(i, plugDiv);
}

// logic for when the plugboard changes

// this map will hold the values submitted on the plugboard
export let plugboard = new Map<string, string>

// of course, when nothing else is specified, the plugboard should 
// just give the value of the specified character
for (let i = 32; i <= 126; i++) {
  plugboard.set(String.fromCharCode(i), String.fromCharCode(i));
}

// function for setting the pairs
function input(asciiKey: number) {
  let input = plugInputs.get(asciiKey)!.value;
  //check for possible null
  if (input) {
    // get ACSII value for the inputted character and 
    let asciiValue = input.charCodeAt(0);
    // "link" up the two characters
    plugInputs.get(asciiKey)!.value = String.fromCharCode(asciiValue);
    plugInputs.get(asciiValue)!.value = String.fromCharCode(asciiKey);
    // gray out the two specified characters to signify that they are connected
    plugDivs.get(asciiKey)!.style.color = "lightgreen";
    plugDivs.get(asciiValue)!.style.color = "lightgreen";
    // reset other input if the specified input was already linked
    let previousLink = plugboard.get(String.fromCharCode(asciiKey))!.charCodeAt(0);
    if (previousLink !== asciiKey) {
      plugInputs.get(previousLink)!.value = "";
      plugDivs.get(previousLink)!.style.color = "#D22730";
    }
    // set the plugboard map to the correct values
    plugboard.set(String.fromCharCode(asciiValue), String.fromCharCode(asciiKey));
    plugboard.set(String.fromCharCode(asciiKey), String.fromCharCode(asciiValue));

  } else {
    // if this else statement is reached, it must mean that the character
    // has been changed back to itself

    // decide the ASCII value of the previously linked character
    let asciiValue = plugboard.get(String.fromCharCode(asciiKey))!.charCodeAt(0);
    plugInputs.get(asciiValue)!.value = "";
    // reset upon removal
    plugDivs.get(asciiKey)!.style.color = "#D22730";
    plugDivs.get(asciiValue)!.style.color = "#D22730";
    // reset the plugboard values
    plugboard.set(String.fromCharCode(asciiValue), String.fromCharCode(asciiValue));
    plugboard.set(String.fromCharCode(asciiKey), String.fromCharCode(asciiKey));
  }
}

for (let i = 32; i <= 126; i++) {
  plugInputs.get(i)!.onchange = () => {
    input(i)
  }
}

// button for reseting the plugboard

const buttonReset = document.createElement("button");
buttonReset.textContent = "Reset";
buttonReset.id="buttonReset";
plugScreen.appendChild(buttonReset);

buttonReset.onclick = () => {
  for (let i = 32; i <= 126; i++) {
    plugboard.set(String.fromCharCode(i), String.fromCharCode(i));
    plugDivs.get(i)!.style.color = "#D22730";
    plugInputs.get(i)!.value = "";
  }
}
