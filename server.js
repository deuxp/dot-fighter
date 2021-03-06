require('dotenv').config()

// web server config
const PORT = process.env.PORT || 8080
const express = require('express')
const app = express()
const morgan = require('morgan')

// PG database connection
const { Pool } = require('pg')
const dbParams = require('./lib/db.js')
const db = new Pool(dbParams)
db.connect()

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored  red for server error codes, 
//                                            yellow for client error codes, 
//                                            cyan for redirection codes,
//                                            uncolored for all other codes.
app.use(morgan('dev'))

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))

app.use(express.static('public'))

const cookieSession = require('cookie-session')
app.use(cookieSession({name: 'session', secret: 'amethystPinapple'}))

// Separated Routes for each resource
const usersRoutes = require('./routes/users')


//Mount all resource routes
app.use('api/users', usersRoutes(db))


// home page
app.get('/', (_req, res) => {
  res.render('index')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});