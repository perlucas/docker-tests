const mongoose = require('mongoose');

const { MONGO_USER, MONGO_PASSWORD, MONGO_DB, MONGO_PORT, MONGO_HOST} = process.env;

const connectionUrl = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`

const PlayerSchema = new mongoose.Schema({
    name: String,
    score: Number,
    birthdate: String
});

(async () => {
    const connection = await mongoose.connect(connectionUrl);

    const Player = connection.model('Player', PlayerSchema);

    const players = await Player.find({});

    players.forEach(player => {
        const date = new Date(player.birthdate);

        const dateString = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

        const info = `Player: ${player.name}, score: ${player.score}, born on: ${dateString}`;
        
        console.log(info);
    });

    await mongoose.connection.close();

    console.log("DONE")
})()