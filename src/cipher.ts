const inputArea = <HTMLElement> document.getElementById("input");
const outputArea = <HTMLElement> document.getElementById("output");

// create the rotor class


class rotor {
  notch: number;
  initPosition: number;
  charMap: Map<number, number>;
  constructor(notch: number, initPosition: number, charMap: Map<number, number>) {
    this.notch = notch;
    this.initPosition = initPosition;
    this.charMap = charMap;
  }
  
  spin(turns: number): void {
    // change the wheel's inputs and outputs so that 
    // they are always pairwise identical
    // this is meant to immitate the spin of the rotor
    // first we change the position of the notch. If by turning it, it goes over 126,
    // we reduce it by the maximum number of full turns
    this.notch += turns;
    
    while (this.notch >= 95) {
      this.notch -= 95;
    }
    
    // then we change the mappings
    // this was a lot harder than I thought it would be
    // in the end, it turned out I was just being dumb...
    let newMap = new Map<number, number>();

    for (let i = 32; i <= 126; i++) {
      // sort out the new keys and values and remove full rotations until they're less than 126
      let key = i+turns;
      while (key > 126) {
        key -= 95;
      }
      let value = this.charMap.get(i)!+turns;
      while (value > 126) {
        value -= 95;
      }
      // set new key-value pair
      newMap.set(key, value);
    }

    // delete the preexisting charMap
    this.charMap = newMap;
  }
  // to initialize the rotor, we set the position and notch position correctly
  // so that the rotor can then be used
  init(): void {
    this.spin(this.initPosition);
    this.notch -= this.initPosition;
  }
  
  output(input: number) {
    // this function will return the output of the rotor based on the input provided 
    return this.charMap.get(input);
  }
}


// the mappings inside the rotors should be as random as possible, although it's important
// that all mappings stay the same every time the program is run
// these mappings were generated in random_mappings.py
// basically all numbers are sudorandomly paired with another number
//
// note that the entry wheel is excluded because historically, it would just link all the
// letters back to themselves
const rotorMap1 = new Map<number, number>([
  [124, 94], [94, 124], [50, 86], [86, 50], [76, 81], [81, 76], 
  [91, 113], [113, 91], [40, 53], [53, 40], [88, 66], [66, 88], 
  [51, 120], [120, 51], [111, 46], [46, 111], [105, 79], [79, 105], 
  [114, 123], [123, 114], [65, 75], [75, 65], [103, 48], [48, 103], 
  [70, 95], [95, 70], [112, 74], [74, 112], [36, 47], [47, 36], 
  [98, 89], [89, 98], [107, 108], [108, 107], [57, 52], [52, 57], 
  [83, 64], [64, 83], [62, 110], [110, 62], [92, 69], [69, 92], 
  [117, 115], [115, 117], [39, 104], [104, 39], [101, 35], [35, 101], 
  [126, 44], [44, 126], [85, 43], [43, 85], [77, 119], [119, 77], 
  [45, 84], [84, 45], [109, 125], [125, 109], [96, 56], [56, 96], 
  [49, 73], [73, 49], [38, 102], [102, 38], [116, 58], [58, 116], 
  [55, 72], [72, 55], [54, 59], [59, 54], [118, 37], [37, 118], 
  [97, 100], [100, 97], [32, 121], [121, 32], [63, 106], [106, 63], 
  [87, 41], [41, 87], [60, 71], [71, 60], [67, 90], [90, 67], 
  [78, 34], [34, 78], [68, 68], [61, 80], [80, 61], [42, 42], 
  [82, 122], [122, 82], [33, 33], [93, 99], [99, 93]
]);

const rotorMap2 = new Map<number, number>([
  [54, 65], [65, 54], [119, 67], [67, 119], [99, 124], [124, 99], 
  [104, 48], [48, 104], [61, 58], [58, 61], [87, 42], [42, 87], 
  [78, 39], [39, 78], [57, 71], [71, 57], [73, 82], [82, 73], 
  [110, 53], [53, 110], [60, 47], [47, 60], [36, 64], [64, 36], 
  [44, 108], [108, 44], [121, 79], [79, 121], [100, 86], [86, 100], 
  [103, 88], [88, 103], [32, 37], [37, 32], [91, 118], [118, 91], 
  [51, 50], [50, 51], [107, 55], [55, 107], [94, 93], [93, 94], 
  [109, 92], [92, 109], [85, 101], [101, 85], [40, 125], [125, 40], 
  [66, 66], [35, 84], [84, 35], [52, 41], [41, 52], [43, 76], 
  [76, 43], [126, 56], [56, 126], [69, 33], [33, 69], [38, 95], 
  [95, 38], [68, 63], [63, 68], [72, 72], [74, 115], [115, 74], 
  [117, 122], [122, 117], [81, 97], [97, 81], [120, 98], [98, 120], 
  [59, 34], [34, 59], [75, 113], [113, 75], [123, 49], [49, 123], 
  [111, 62], [62, 111], [77, 77], [96, 116], [116, 96], [112, 45], 
  [45, 112], [106, 105], [105, 106], [102, 90], [90, 102], [89, 83], 
  [83, 89], [114, 80], [80, 114], [46, 46], [70, 70]
]);

const rotorMap3 = new Map<number, number>([
  [36, 108], [108, 36], [61, 38], [38, 61], [39, 62], [62, 39], 
  [60, 71], [71, 60], [55, 123], [123, 55], [50, 88], [88, 50], 
  [69, 114], [114, 69], [102, 85], [85, 102], [70, 106], [106, 70], 
  [101, 40], [40, 101], [74, 41], [41, 74], [59, 112], [112, 59], 
  [118, 34], [34, 118], [65, 64], [64, 65], [89, 96], [96, 89], 
  [66, 94], [94, 66], [53, 116], [116, 53], [72, 43], [43, 72], 
  [83, 58], [58, 83], [37, 113], [113, 37], [76, 110], [110, 76], 
  [109, 51], [51, 109], [111, 125], [125, 111], [97, 93], [93, 97], 
  [63, 105], [105, 63], [49, 67], [67, 49], [124, 57], [57, 124], 
  [44, 52], [52, 44], [122, 115], [115, 122], [90, 81], [81, 90], 
  [104, 98], [98, 104], [121, 46], [46, 121], [99, 33], [33, 99], 
  [86, 42], [42, 86], [80, 84], [84, 80], [120, 47], [47, 120], 
  [73, 117], [117, 73], [95, 56], [56, 95], [87, 77], [77, 87], 
  [107, 32], [32, 107], [119, 100], [100, 119], [75, 68], [68, 75], 
  [48, 91], [91, 48], [103, 78], [78, 103], [54, 45], [45, 54], 
  [35, 35], [92, 126], [126, 92], [79, 82], [82, 79]
]);

const reflectorMap = new Map<number, number>([
  [72, 99], [99, 72], [77, 115], [115, 77], [124, 50], [50, 124], 
  [64, 64], [67, 45], [45, 67], [36, 125], [125, 36], [39, 56], 
  [56, 39], [84, 110], [110, 84], [114, 69], [69, 114], [73, 108], 
  [108, 73], [71, 112], [112, 71], [82, 96], [96, 82], [101, 52], 
  [52, 101], [83, 95], [95, 83], [34, 90], [90, 34], [62, 116], 
  [116, 62], [78, 111], [111, 78], [106, 33], [33, 106], [121, 123], 
  [123, 121], [103, 119], [119, 103], [100, 70], [70, 100], [59, 105], 
  [105, 59], [92, 74], [74, 92], [53, 109], [109, 53], [37, 79], 
  [79, 37], [43, 32], [32, 43], [80, 81], [81, 80], [58, 88], 
  [88, 58], [91, 40], [40, 91], [35, 49], [49, 35], [41, 104], 
  [104, 41], [76, 60], [60, 76], [89, 94], [94, 89], [66, 66], 
  [113, 86], [86, 113], [75, 65], [65, 75], [46, 48], [48, 46], 
  [87, 55], [55, 87], [102, 117], [117, 102], [47, 122], [122, 47], 
  [93, 57], [57, 93], [54, 42], [42, 54], [68, 98], [98, 68], 
  [51, 118], [118, 51], [120, 61], [61, 120], [107, 63], [63, 107], 
  [126, 38], [38, 126], [44, 97], [97, 44], [85, 85]
]) 

// create the rotors 
// the default settings will be that the following
// position is set to 0
// notch position is set to 0
// each internal mapping is determinedby the Map objects above

const rotor1 = new rotor(0, 1, rotorMap1);

const rotor2 = new rotor(0, 6, rotorMap2);

const rotor3 = new rotor(0, 1, rotorMap3);

// initialize the rotors

rotor1.init();
rotor2.init();
rotor3.init();

// one disadvantage to using the ascii table as a reference is that the second and third rotor
// hardly ever turn because for the second rotor to turn, the first rotor must turn 95 times
// (of course the same goes for the third rotor)
// to counteract this, the user will be able to input multiple notch positions
// whenever the notch hits one of these positions, the next rotor will spin
// these notch positions are only required for notches one and two since the reflector cannot turn

const notchArray1 = [50, 61, 36, 82, 71, 1, 39, 79, 20, 75, 2, 27, 3];
const notchArray2 = [89, 40, 62, 59, 45, 44, 49, 7, 48];


// the reflector wheel will never turn. Still it is represented as a rotor class object 
// because it severs basically the same purpouse except for the spinning as it "reflects"
// the letter to go throught the rotors a second time
// note also that the reflector does not need to be initialized because its
// position and notch position is arbetrary so long as it always remains the same
const reflector = new rotor(0, 0, reflectorMap);

function encodeCharacter(input: string) {
  // first we run the letter through all of the rotors once
  let firstEncryption = reflector.output(rotor3.output(rotor2.output(rotor1.output(input.charCodeAt(0))!)!)!)!;
  // now, the second time we run the letter through, it will have already 
  // "bounced off" the reflector, so this time, we only run it throught the rotors
  let finalEncryption = rotor1.output(rotor2.output(rotor3.output(firstEncryption)!)!);
  
  // note that we did not spin the rotors in between the runthroughs of the rotors
  // this is because the cipher must be identical backwards in order to decrypt 
  // the message later on
  
  // now we spin the rotors
  rotor1.spin(1);
  if (notchArray1.includes(rotor1.notch)) {
    rotor2.spin(1);
  }
  if (notchArray2.includes(rotor2.notch)) {
    rotor3.spin(1);
  }

  return String.fromCharCode(finalEncryption!);
}

function encodeMessage(input: string) {
  let inputArray = input.split('');
  let output = "";
  inputArray.forEach((character: string) => {
    let codeCharacter = encodeCharacter(character);
    output += codeCharacter;
  });

  return output;
}


console.log(encodeMessage('|RP$;OYu)MeUUgY+]"ILdMr'));
