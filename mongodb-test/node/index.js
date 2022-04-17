const mongoose = require('mongoose');


const PlayerSchema = new mongoose.Schema({
    name: String,
    score: Number,
    birthdate: String
});

(async () => {
    const connection = await mongoose.connect('mongodb://root:root@db:27017/test');

    const Player = connection.model('Player', PlayerSchema);

    const players = await Player.find({});
    console.info(players);
})();