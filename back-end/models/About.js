const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Schema for an about entry modeled after preexisting code.

const aboutSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
    },
)

const About = mongoose.model('About', aboutSchema)

module.exports = {
    About,
}