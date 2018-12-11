module.exports = {
    ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 3000,
    URL: process.env.BASE_URL || 'http://localhost:3000',
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://bhavik4748:1qaz!QAZ@ds061721.mlab.com:61721/customer_api_restify',
    JWT_SECRET: process.env.JWT_SECRET || 'secret1',
}