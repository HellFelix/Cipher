# Enigma

## Introduction

For this project, the aim was to create an Enigma-like cipher that lacked the weeknesses of the original Enigma machine

The basic idea is the same, although I have modified it in a few ways in order to hopefully make the cipher stronger.

This is my take on the Enigma machine.

### The fatal flaw of Enigma

Upon insistance that a letter would not be encoded as itself, the "Reflektor" was added. This "rotor" would have each character "reflect" (be arbetraraly encoded) upon having gone through all three rotors before once again going through the rotor.

This made sure that no letter could come out the other side having been encoded as itself. Of course, this made no sense and added no additional security, quite the opposite. In fact, it made it much easier to recognize patterns within an encoded message.

## Improvements upon the Enigma Machine

In order to improve upon the Enigma machine, I have made some changes to the original concept

### 1. No Reflektor

First and most obvious is the removal of the "Reflektor". Instead, I have modified the encoding to include seven rotors as opposed to the traditional three, althought each rotor only encodes the letter once, meaning that each character is still encoded seven times. The difference of course being that the character can (in some unlikely cases) come out the other side as itself.

Note: This not being a physical machine, I could technically have added as many rotors as I wanted. I decided to stick with seven because it would yield as many individual encodings as the original Enigma machine. Also, inputting starting positions and notch positions for like 50 rotors would be a nightmare. 

### 2. Inclusion of more characters

The original Enigma machine included only the 26 letters of the alphabet (not even including space-bar). Not only did this make the messages difficult to read after deciphering (because the message would be a long string of words with no spaces between them), it also drastically dragged down the number of possible encryptions possible.
For this project, I have included all of the characters supported by the firefox console i.e. ASCII table values 32 through 126. This allowes messages to include spaces between each word and punctuation while contributing to the overall "randomness" of the encrypted message.
The plugboard has also been modified to reflect the added characters.

### 3. Rotation of the rotors

The original Enigma machine would turn its rotors only once that previous rotor had made one full revolution. This was because each rotor would have a notch, and only once that notch was in the correct position, could the next rotor turn. 
Once again, I have the benefit of not working with a physical machine. In the settings menu, one can input between 1 and 95 notch position for each rotor that would yield a rotation of the next rotor.
This issue was somewhat of my own making though, because increasing the number of possible characters also means that a full rotation of each rotor takes much longer. Thus, the rotors will spin less often.
Adding this extra level of security has the added benefit of the rotors not always spinning the same amount given a message of some length.


## Usage

This section will cover how to use the cipher

### Settings

Clicking the "Change mode" button will bring you to the settings Screee. Here, you can change the settings of the cipher.

#### Rotors

Each rotor has two possible modifications:

    1. Initial position
        This is where you can input the initial position of the rotor. For  
        With no input 
