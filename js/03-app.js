// test two values

function sum(a, b) {
    return a + b
}

function subs(a, b) {
    return a - b
}

async function sumAsync(a,b) {
    return Promise.resolve(sum(a,b))
}

async function substrAsync(a,b) {
    return Promise.resolve(subs(a,b))
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

test('the sum between 5 and 3, should be 8', async () => {
    const result = await sumAsync(5,3) //it wait until Promise sum will be resolved
    const expect = 8
    expected1(expect).toBe(result)
})

test('the subs of 5 - 4 should be 1', async () => {
    const result = await substrAsync(5,4)
    const expected = 1
    expected1(expected).toBe(result)
})


async function test(message, callback) {
    try {
        await callback();
        console.log(`The Test: ${message} was executed correctly`) 
    } catch (error) {
        console.error('Error:', error)
    }
}




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