// part of exercise: imports a new about entry into the database for Dan Yong
// run by using 'node aboutImport.js'

require('dotenv').config({ silent: true }) // load environmental variables from a hidden file named .env
const mongoose = require('mongoose')
const { About } = require('./models/About')

// exercise: create my own about information (url to image and paragraph)
async function createAbout() {
    const newAbout = await About.create({
        name: 'Dan Yong',
        description: 'Hi! My name is Dan and I am a junior at CAS studying Computer Science with minors in Film and Interactive Media Arts. I am interested in UI/UX design to allow users to tell their own unique stories. In my free time, I enjoy doing anything that my friends are doing, which ranges from video games to outdoor excursions.',
        image: '/images/dan.png',
    })

    return newAbout
}

async function main() {
    await mongoose.connect(process.env.DB_CONNECTION_STRING)
    const about = await createAbout()
    console.log('Created new about entry:', about)
    await mongoose.disconnect()
}

try {
    main()
} catch (err) {
    console.error(err)
}