require('dotenv').config();
const config = {
    PORT : process.env.PORT,
    MONGO_URI : process.env.MONGO_URI,
};

module.exports = config;