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
fs.readFile('_config.next.yml', function (error, data) {
    if (error) {
        console.log('read error')
    } else {
        fs.writeFile('_config.next.yml', data.toString().replace(/google_site_verification: Lx6KtXmKbORXXoEMyg8SFmQVmvL6OK9X_AMBBnnHfMc/g, "google_site_verification: 2b9bRX_y9bcOfteSamVfvKl04A2-h4autV9BpH8tfyA"), function (error) {
            if (error) {
                console.log('write error')
            } else {
                console.log('write ok')
            }
        })
    }
})