// Write a function "leetspeak" which is given a string, and returns the
// leetspeak equivalent of the string.
// To convert text to its leetspeak version, make the following substitutions:
// A => 4
// E => 3
// G => 6
// I => 1
// O => 0
// S => 5
// T => 7
//
// Example:
// leetspeak('Leet') --> "l337"

function leetspeak(myLeetString) {

    var myLeetStringComplete = myLeetString

        if (myLeetString.match(/[l]/gi)) {
            var regexL = /l/gi 
            myLeetStringComplete = myLeetString.replace(regexL, 'l') 
        }
        
        if (myLeetString.match(/[a]/gi)) {
            var regexA = /a/gi 
            myLeetStringComplete = myLeetString.replace(regexA, '4') 
        }

       if (myLeetStringComplete.match(/[e]/gi)) {
            var regexE = /e/gi
            myLeetStringComplete = myLeetStringComplete.replace(regexE, '3')
        }
        
        if (myLeetStringComplete.match(/[g]/gi)) {
            var regexG = /g/gi
            myLeetStringComplete = myLeetStringComplete.replace(regexG, '6')
        }

        if (myLeetStringComplete.match(/[i]/gi)) {
            var regexI = /i/gi
            myLeetStringComplete = myLeetStringComplete.replace(regexI, '1')
        }

        if (myLeetStringComplete.match(/[o]/gi)) {
            var regexO = /o/gi
            myLeetStringComplete = myLeetStringComplete.replace(regexO, '0')
        }

        if (myLeetStringComplete.match(/[s]/gi)) {
            var regexS = /s/gi
            myLeetStringComplete = myLeetStringComplete.replace(regexS, '5')
        }

        if (myLeetStringComplete.match(/[t]/gi)) {
            var regexT = /t/gi
            myLeetStringComplete = myLeetStringComplete.replace(regexT, '7')
        }

    return myLeetStringComplete

}//function

console.log(leetspeak('Leet'))
