const mongoose = require('mongoose');
const connect = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_learn');
        console.log('connect success')

    } catch (err) {
        console.log('connect failure', err)
    }
}

module.exports = { connect }
