module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ?
        '/main/' :
        '/',
    configureWebpack: {
        resolve: {
            alias: {
                'components': '@/components',
                'content': 'components/content',
                'common': 'components/common',
                'assets': '@/assets',
                'network': '@/network',
                'views': '@/views',
            }
        }
    }
}