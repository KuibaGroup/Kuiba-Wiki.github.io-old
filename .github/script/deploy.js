var fs = require('fs')
fs.readFile('_config.yml', function (error, data) {
    if (error) {
        console.log('read error')
    } else {
        fs.writeFile('_config.yml', data.toString().replace(/url: https:\/\/kuiba-wiki.github.io # Site url/g, "url: https:\/\/kuiba-wiki.gitee.io # Site url").replace(/branch: github # Deploy branch/g, "branch: gitee # Deploy branch"), function (error) {
            if (error) {
                console.log('write error')
            } else {
                console.log('write ok')
            }
        })
    }
})