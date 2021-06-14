// test two values


function sum(a, b) {
    return a + b
}

function subs(a, b) {
    return a - b
}

const result = sum(3, 6);
const expected = 9
console.log(result)


if (result !== expected) {
    console.error(`The result ${result} is different to expected. test Failed`)
} else {
    console.log('the test passed successfully')
}


const resultSubs = subs(4, 4)
const expectedSubs = 1
console.log(resultSubs)



if (resultSubs !== expectedSubs) {
    console.error(`The result ${resultSubs} is different to expected. test Failed`)
} else {
    console.log('the test passed successfully')
}