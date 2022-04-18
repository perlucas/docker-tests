const mongoose = require('mongoose');


const PlayerSchema = new mongoose.Schema({
    name: String,
    score: Number,
    birthdate: String
});

(async () => {
    const connection = await mongoose.connect('mongodb://tester:tester@db:27017/test');

    const Player = connection.model('Player', PlayerSchema);

    const players = await Player.find({});

    console.info(players);

    await mongoose.connection.close();

    console.log("DONE")
})()