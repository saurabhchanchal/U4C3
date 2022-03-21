

const mongoose = require("mongoose");

module.exports = () => {
    return mongoose.connect(
        "mongodb+srv://saurabha110:saurabha110@cluster0.oai75.mongodb.net/project1?retryWrites=true&w=majority"
    );
};