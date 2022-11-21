import * as Settings from "./settings"
// when the application is opened, we begin with the input screen
let currentScreen = "input";
const inputScreen = <HTMLElement> document.getElementById("inputScreen");
const main = <HTMLElement> document.getElementById("main");
const settingsButton= <HTMLElement> document.getElementById("changeSettings");

// react upon input from button
settingsButton.onclick = () => {
  if (currentScreen === "input") {
    // remove the input screen so that it can be replaced
    main.removeChild(inputScreen);
    //replace it with the settings screen
    main.appendChild(Settings.settingsScreen);

    currentScreen = "settings";
  }
}

// going back from the settings screen
Settings.buttonBack.onclick = () => {
  if (currentScreen === "settings") {
    // remove the settings screen
    main.removeChild(Settings.settingsScreen)
    // replace it with the input screen
    main.appendChild(inputScreen);
    
    currentScreen = "input";
  }
}
