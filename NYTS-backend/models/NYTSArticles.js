const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const nytsSchema = new Schema({
        title: {type: String, required: true},
        summary: {type: String, required: true},
        publishDate: {type: Date, required: true},
        url: {type: String, require: true}
    }
)

const Article = mongoose.model('Article', nytsSchema);

module.exports = Article;