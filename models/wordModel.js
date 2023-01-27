const { Schema, model } = require("mongoose");

const gameSchema = new Schema({
    name: { type: String, require: true },
    difficultyLevel: { type: String, require: true }
})

const gameModel = model("game", gameSchema);

module.exports = gameModel;