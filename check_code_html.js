const fs = require('fs')
const fetch = require('node-fetch')

console.log('Hello world')

async function checkResults(){
    const results = []
    const indexFileExists = fs.existsSync('/home/damner/code/')
    if(indexFileExists) {
        //index.html exists
        results.push(true)
    } else {
        //non-exists
        results.push(false)
    }

    try {
        //contents of url
        const contentsOfUrl = await fetch('http://localhost:1337/').then(t => t.text)
        if (contentsOfUrl.includes('<h1')) {
            results.push(true)
        } else {
            //not existing
            results.push(false)
        }

    } catch(error) {
        //do not exist
        results.push(false)
    }
    fs.writeFileSync(process.env.UNIT_TEST_OUTPUT_FILE, JSON.stringify(results))
}

checkResults().then(() => console.log('done'))
