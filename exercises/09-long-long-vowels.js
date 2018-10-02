// Write a function "longLongVowels" which is given a string, and returns a
// version of that string extending any long vowels to 5 characters.
//
// Examples:
// > longLongVowels('Good')
// 'Goooood'
// > longLongVowels('Cheese')
// 'Cheeeeese'
// > longLongVowels('Man')
// 'Man'

function longLongVowels (myLongVowelString, whatsSup) {
    /*var myObj = {}
    
    myObj['hello-world'] = 5
    //console.log( myObj.hello )

    var world = 'world'
    var hello = 'hello'

    //console.log( myObj[hello + '-' + world] )

    //myObj.hello = 'hello'
    //var helloWorld = 'hello-world-string'
    //console.log( myObj[helloWorld] )

    var myAry = []

    myAry.push("hello")

    console.log ( myAry )*/


//console.log( arguments[0] )

var counter = (function() {
    let count = 0

    return {
        up: function() {count++},
        down: function() {count--},
        value: function() {return count}
    }
})()

for (var i = 0; i < 6; i++) {
    counter.up();
}

console.log ( counter.value() )
counter.down()

console.log( counter.value() )

}
longLongVowels('alpha', 'beta')