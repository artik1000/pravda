const fs = require('fs')
module.exports = {
    devServer: {
        https: true,
        host: 'pravda116.ru', // you can change this ip with your ip
        port: 443,
        inline: true,
        public: 'pravda116.ru',
        https: {
            key: fs.readFileSync(`./cert/server.key`),
            cert: fs.readFileSync(`./cert/certificate.cer`),
            ca: fs.readFileSync(`./cert/certificate_ca.cer`)
        },
        historyApiFallback: true,
              publicPath: '/',
              
              disableHostCheck: true,
    }
}
