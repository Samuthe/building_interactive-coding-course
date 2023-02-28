const fs = require('fs')
const assert = require('assert')

async function run(){
    const result = []

//test challenge one
try {
    const mod = await import('/home/damner/code/index.mjs')
    assert.equal(mod.hello(), 'Hello')
    result.push(true)
} catch(error){
    console.log(error)
    result.push(false)
}

//test challenge two
try {
    const mod = await import('/home/damner/code/index.mjs')
    assert.equal(mod.world(), 'World')
    result.push(true)
} catch(error){
    console.log(error)
    result.push(false)    
}

fs.writeFileSync(process.env.UNIT_TEST_OUTPUT_FILE, JSON.stringify(result))

}

run()
