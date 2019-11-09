module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/' //задаем путь или папку под продакшн
    : '/', 
    assetsDir: '', //создаем папку например 'assets' или указываем пустую строку '' под js и css
    productionSourceMap: false, //убираем из продакшена карту скриптов и стилей
}