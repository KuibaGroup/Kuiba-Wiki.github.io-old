var fs = require('fs')
fs.readFile('_config.next.yml', function (error, data) {
    if (error) {
        console.log('read error')
    } else {
        fs.writeFile('_config.next.yml', data.toString().replace(/false # Gitalk enable/g, 'true # Gitalk enable').replace(/\$CLIENT_ID/g, process.argv[2]).replace(/\$CLIENT_SECRET/g, process.argv[3]), function (error) {
            if (error) {
                console.log('write error')
            } else {
                console.log('write ok')
            }
        })
    }
})