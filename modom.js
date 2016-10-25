(function(){
    'use strict'

    var one = function(selector) {
        return document.querySelector(selector)
    }

    var add = function() {
        var numbers = Array.from(arguments)
        var total = 0

        var total = numbers.reduce(function(previousNumber, currentNumber) {
            return previousNumber + currentNumber
        }, 0)

        return total
    }

    // var add = function(value1, value2) {
    //     var total = value1 + value2
    //     return total
    // }
    // var add3 = function(value1, value2, value3) {
    //     var total = value1 + value2
    //     return total
    // }

    window.md = {
        one: one,
        add: add,
    }

}())
