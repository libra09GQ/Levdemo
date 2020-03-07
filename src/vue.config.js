module.exports = {
    configureWebpack: {
        resolve:{
            alias: {
                'assect': '@/assect',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
            }
        }
    }
}