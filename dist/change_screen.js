"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.settingsScreen = void 0;
const changeButton = document.getElementById("changeMode");
const inputScreen = document.getElementById("inputScreen");
const main = document.getElementById("main");
// when the application is opened, we begin with the input screen
let currentScreen = "input";
// create all the elemens for the settings screen
// note that the plugboard is handled separately in a 
// file called src/plugboard.ts, for the sake of simplicity
exports.settingsScreen = document.createElement("div");
exports.settingsScreen.id = "settingsScreen";
const rotorsScreen = document.createElement("div");
rotorsScreen.id = "rotorsScreen";
exports.settingsScreen.appendChild(rotorsScreen);
const separator = document.createElement("hr");
separator.style.width = "1px";
separator.style.height = "100%";
separator.style.float = "left";
separator.style.margin = "0";
separator.style.border = "0";
separator.style.padding = "0";
separator.style.color = "balck";
separator.style.background = "black";
exports.settingsScreen.appendChild(separator);
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
inputRotor1Div.style.height = "30%";
inputRotor1Div.style.width = "100%";
inputRotor1Div.className = "rotorDiv";
rotorsScreen.appendChild(inputRotor1Div);
const labelRotor1 = document.createElement("label");
labelRotor1.textContent = "Position for rotor I";
inputRotor1Div.appendChild(labelRotor1);
const inputRotor1 = document.createElement("input");
inputRotor1.type = "text";
inputRotor1.placeholder = "1";
inputRotor1.style.width = "20%";
inputRotor1Div.appendChild(inputRotor1);
// notch position
const labelNotch1 = document.createElement("label");
labelNotch1.textContent = "Notch position:";
inputRotor1Div.appendChild(labelNotch1);
const inputNotch1 = document.createElement("input");
inputNotch1.placeholder = "1";
inputNotch1.style.width = "20%";
inputRotor1Div.appendChild(inputNotch1);
// rotor 2
const inputRotor2Div = document.createElement("div");
inputRotor2Div.style.height = "30%";
inputRotor2Div.style.width = "100%";
inputRotor2Div.className = "rotorDiv";
rotorsScreen.appendChild(inputRotor2Div);
const labelRotor2 = document.createElement("label");
labelRotor2.textContent = "Position for rotor II";
inputRotor2Div.appendChild(labelRotor2);
const inputRotor2 = document.createElement("input");
inputRotor2.placeholder = "1";
inputRotor2.type = "text";
inputRotor2.style.width = "20%";
inputRotor2Div.appendChild(inputRotor2);
// notch position
const labelNotch2 = document.createElement("label");
labelNotch2.textContent = "Notch position:";
inputRotor2Div.appendChild(labelNotch2);
const inputNotch2 = document.createElement("input");
inputNotch2.placeholder = "1";
inputNotch2.style.width = "20%";
inputRotor2Div.appendChild(inputNotch2);
// rotor 3
const inputRotor3Div = document.createElement("div");
inputRotor3Div.style.height = "30%";
inputRotor3Div.style.width = "100%";
inputRotor3Div.className = "rotorDiv";
rotorsScreen.appendChild(inputRotor3Div);
const labelRotor3 = document.createElement("label");
labelRotor3.textContent = "Position for rotor III";
inputRotor3Div.appendChild(labelRotor3);
const inputRotor3 = document.createElement("input");
inputRotor3.placeholder = "1";
inputRotor3.type = "text";
inputRotor3.style.width = "20%";
inputRotor3Div.appendChild(inputRotor3);
// notch position
const labelNotch3 = document.createElement("label");
labelNotch3.textContent = "Notch position:";
inputRotor3Div.appendChild(labelNotch3);
const inputNotch3 = document.createElement("input");
inputNotch3.placeholder = "1";
inputNotch3.style.width = "20%";
inputRotor3Div.appendChild(inputNotch3);
// plug board representation
// this is where the client can interact and input things to the plugboard
const plugScreen = document.createElement("div");
plugScreen.id = "plugScreen";
plugScreen.style.height = "100%";
plugScreen.style.width = "69%";
plugScreen.style.paddingLeft = "5px";
plugScreen.style.float = "left";
exports.settingsScreen.appendChild(plugScreen);
const plugScreenLabel = document.createElement("div");
plugScreenLabel.id = "plugScreenLabel";
plugScreen.appendChild(plugScreenLabel);
let plugInputs = new Map;
let plugDivs = new Map;
const plugTitle = document.createElement("h2");
plugTitle.textContent = "plugboard";
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
let plugboard = new Map;
// of course, when nothing else is specified, the plugboard should 
// just give the value of the specified character
for (let i = 32; i <= 126; i++) {
    plugboard.set(String.fromCharCode(i), String.fromCharCode(i));
}
// function for setting the pairs
function input(asciiKey) {
    let input = plugInputs.get(asciiKey).value;
    console.log(input);
    //check for possible null
    if (input) {
        // get ACSII value for the inputted character and 
        let asciiValue = input.charCodeAt(0);
        // "link" up the two characters
        plugInputs.get(asciiKey).value = String.fromCharCode(asciiValue);
        plugInputs.get(asciiValue).value = String.fromCharCode(asciiKey);
        // gray out the two specified characters to signify that they are connected
        plugDivs.get(asciiKey).style.color = "lightgreen";
        plugDivs.get(asciiValue).style.color = "lightgreen";
        // reset other input if the specified input was already linked
        let previousLink = plugboard.get(String.fromCharCode(asciiKey)).charCodeAt(0);
        if (previousLink !== asciiKey) {
            plugInputs.get(previousLink).value = "";
            plugDivs.get(previousLink).style.color = "black";
        }
        // set the plugboard map to the correct values
        plugboard.set(String.fromCharCode(asciiValue), String.fromCharCode(asciiKey));
        plugboard.set(String.fromCharCode(asciiKey), String.fromCharCode(asciiValue));
    }
    else {
        // if this else statement is reached, it must mean that the character
        // has been changed back to itself
        // decide the ASCII value of the previously linked character
        let asciiValue = plugboard.get(String.fromCharCode(asciiKey)).charCodeAt(0);
        plugInputs.get(asciiValue).value = "";
        // reset upon removal
        plugDivs.get(asciiKey).style.color = "black";
        plugDivs.get(asciiValue).style.color = "black";
        // reset the plugboard values
        plugboard.set(String.fromCharCode(asciiValue), String.fromCharCode(asciiValue));
        plugboard.set(String.fromCharCode(asciiKey), String.fromCharCode(asciiKey));
    }
}
for (let i = 32; i <= 126; i++) {
    plugInputs.get(i).onchange = () => {
        input(i);
    };
}
// react upon input from button
changeButton.onclick = () => {
    if (currentScreen === "input") {
        // remove the input screen so that it can be replaced
        main.removeChild(inputScreen);
        //replace it with the settings screen
        main.appendChild(exports.settingsScreen);
        currentScreen = "settings";
    }
    else if (currentScreen === "settings") {
        // remove the settings screen so that it can be replaced
        main.removeChild(exports.settingsScreen);
        //replace it with the input screen
        main.appendChild(inputScreen);
        currentScreen = "input";
    }
};
