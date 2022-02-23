var fs = require('fs')
fs.readFile('_config.yml', function (error, data) {
    if (error) {
        console.log('read error')
    } else {
        console.log(data.toString().replace(/url: https:\/\/kuiba-wiki.github.io # Site url/g, "url: https:\/\/kuiba-wiki.gitee.io # Site url").replace(/repo: git@github.com:Kuiba-Wiki\/Kuiba-Wiki.github.io.git # Deploy repo/g, "repo: git@gitee.com:kuiba-wiki\/kuiba-wiki.git # Deploy repo"))
        // fs.writeFile('_config.yml', data.toString().replace(/url: https:\/\/kuiba-wiki.github.io # Site url/g, "url: https:\/\/kuiba-wiki.gitee.io # Site url").replace(/repo: git@github.com:Kuiba-Wiki\/Kuiba-Wiki.github.io.git # Deploy repo/g, "repo: git@gitee.com:kuiba-wiki\/kuiba-wiki.git # Deploy repo"), function (error) {
        //     if (error) {
        //         console.log('write error')
        //     } else {
        //         console.log('write ok')
        //     }
        // })
    }
})