import express from 'express'
import path from 'path'
import http from 'http'
import render from './utils/render'

const app = express()

app.set('views', 'src/server/views/')
app.set('view engine', 'ejs')

app.use('/public', express.static(path.join(__dirname, '../../dist')))

app.use('/favicon.ico', (req, res) => {
  return
})

app.use('/', render)

module.exports = http.Server(app)
