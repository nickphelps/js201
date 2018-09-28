// Write a function "hello" that takes one argument (a name), and returns a
// string that says hello to the name.
// Example: hello('Mustache') should return 'Hello, Mustache!'


function hello (name) {
    var myName = 'Hello, ' + name + '!'
    return myName
}

hello('Mustache')

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "helloDefault" such that if no name is given it will return
// 'Hello, world!'
// Otherwise it behaves the same as the "hello" function.

function helloDefault (name) {
    if (name == "") {
        var noName = "Hello, world!"
        return noName
    } else {
        return hello('Mustache')
    }
} 
helloDefault("Mustache")