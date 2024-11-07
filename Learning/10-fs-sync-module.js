
const fs = require('fs')

const { readFileSync , writeFileSync} = fs

const first = readFileSync('Learning/content/first.txt', 'utf8')
const second = readFileSync('Learning/content/second.txt', 'utf8')

console.log(first)
console.log(second)

writeFileSync('Learning/content/result-sync.txt', `Here is the result : ${first} , ${second}`, {flag : 'a'})
const result = readFileSync('Learning/content/result-sync.txt', 'utf8')
console.log(result);
