require('dotenv').config();
const express = require('express');
const app = express();
const axios = require('axios');

app.get('/topnews', async function (req, res, next) {
    const pageSize = parseInt(req.query.pageSize);
    const page = parseInt(req.query.page);
    const q = req.query.q
    try {
        let queryString = `${process.env.NEWS_API_BASE_URL}/everything?sources=bbc-news&apiKey=${process.env.API_KEY}&pageSize=${pageSize}&page=${page}`;
        if (q) queryString += `&q=${q}`;
        const response = await axios.get(queryString);
        if (response.status !== 200) {
            res.status(response?.status).json({ message: response?.statusText })
        }
        else res.status(200).json({
            articles: res?.data?.articles
        })
    }
    catch (err) {
        console.log("Error is", err);
    }
})

// app.get('/sources', async function (req, res, next) {
//     try {
//         const response = await axios.get(`${process.env.NEWS_API_BASE_URL}/top-headlines/sources?apiKey=${process.env.API_KEY}`)
//         if (response.status !== 200) {
//             res.status(response?.status).json({ message: response?.statusText })
//         }
//         else res.status(200).json({ sources: response?.data?.sources })
//     }
//     catch (err) {
//         console.log("Error is", err);
//     }
// })
// app.get('/headlines', async function (req, res, next) {
//     const source = req.query.source;
//     try {
//         const response = await axios.get(`${process.env.NEWS_API_BASE_URL}/top-headlines?sources=${source}&apiKey=${process.env.API_KEY}`)
//         if (response.status !== 200) {
//             res.status(response?.status).json({ message: response?.statusText })
//         }
//         else res.status(200).json({ sources: response?.data?.articles })
//     }
//     catch (err) {
//         console.log("Error is", err);
//     }
// })
app.get('/', function (req, res, next) {
    res.send('Alive and Kicking')
})

app.listen(parseInt(process.env.PORT), function () {
    console.log(`Server listening on port ${process.env.PORT}`);
})