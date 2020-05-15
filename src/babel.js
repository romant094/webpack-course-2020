const start = async () => await Promise.resolve('Async is working');
start().then(console.log)

class Util {
    static id = Date.now()
}

console.log(`Util id: ${Util.id}`)

const unused = 42

import('lodash').then(_ => {
    console.log(`Lodash: ${_.random(0, 42, true)}`)
})