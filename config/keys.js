require('dotenv/config')


module.exports = {
    // use this when using local mongo db
    // mongoURI: "mongodb://localhost:27017/mern-passport",

    // this hooks up to mlab/heroku
    mongoURI: process.env.MLAB_URI,
    secretOrKey: "ericcentrik"
};