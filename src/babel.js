const start = async () => await Promise.resolve('Async is working');
start().then(console.log)

class Util {
    static id = Date.now()
}

console.log(`Util id: ${Util.id}`)