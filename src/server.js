// const express = require('express')
import express from 'express'
const app = express()

const hostname = 'localhost'
const port = 8010

app.get('/', function(req,res) {
    res.send("毎日ITをべんきょうしてる頑張りましょう")
})

app.listen(port, hostname, () => {
    console.log(`Hello YushingDev, I'm running server at http://${hostname}:${port}/`)
})