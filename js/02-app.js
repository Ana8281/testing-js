// test two values

function sum(a, b) {
    return a + b
}

function subs(a, b) {
    return a - b
}

let result = sum(3, 6);
let expected = 9
expected1(expected).toBe(result)
expected1(expected).toEqual(result)
console.log(result)


result = subs(4, 4)
expected = 0
expected1(expected).toBe(result)
expected1(expected).toEqual(result)
console.log(result)



function expected1(expected) {
    return {
        toBe(result) {
            if (result !== expected) {
                console.error(`The result ${result} is different to expected. test Failed`)
            } else {
                console.log('the test passed successfully')
            }
        },
        toEqual(result) {
            if (result === expected) {
                console.error(`The result ${result} is not equal to expected. test Failed`)
            } else {
                console.log('the test passed successfully')
            }
        }
    }


}