require('dotenv').config();
const express = require('express');
const app = express();
const axios = require('axios');
const { response } = require('express');

app.get('/topnews', async function (req, res, next) {
    const pageSize = parseInt(req.query.pageSize);
    const page = parseInt(req.query.page);
    const q = req.query.q
    try {
        // let queryString = `${process.env.NEWS_API_BASE_URL}/everything?sources=bbc-news&apiKey=${process.env.API_KEY}&pageSize=${pageSize}&page=${page}`;
        // if (q) queryString += `&q=${q}`;
        // const response = await axios.get(queryString);
        // if (response.status !== 200) {
        //     res.status(response?.status).json({ message: response?.statusText })
        // }
        // else
         res.status(200).json({
            articles: [
                {
                    "source": {
                        "id": null,
                        "name": "New York Times"
                    },
                    "author": "Katie Benner",
                    "title": "Justice Dept. Announces Raft of Changes Meant to Deter Cyberthreats",
                    "description": "The moves came a week after the department made its largest financial seizure ever, confiscating over $3.6 billion worth of Bitcoin stolen in a 2016 hacking.",
                    "url": "https://www.nytimes.com/2022/02/17/us/politics/justice-department-cybersecurity.html",
                    "urlToImage": "https://static01.nyt.com/images/2022/02/17/us/politics/17dc-justice/merlin_199612353_b05bfb07-3da8-404e-8a75-221181e5d014-facebookJumbo.jpg",
                    "publishedAt": "2022-02-17T23:51:49Z",
                    "content": "Even in cyberspace, the Department of Justice is able to use a tried and true investigative technique, following the money, Ms. Monaco said. Its what led us to Al Capone in the 30s. It helped us dest… [+1176 chars]"
                }]
        })
    }
    catch (err) {
        console.log("Error is", err);
    }
})

app.get('/sources', async function (req, res, next) {
    try {
        const response = await axios.get(`${process.env.NEWS_API_BASE_URL}/top-headlines/sources?apiKey=${process.env.API_KEY}`)
        if (response.status !== 200) {
            res.status(response?.status).json({ message: response?.statusText })
        }
        else res.status(200).json({ sources: response?.data?.sources })
    }
    catch (err) {
        console.log("Error is", err);
    }
})
app.get('/headlines', async function (req, res, next) {
    const source = req.query.source;
    try {
        const response = await axios.get(`${process.env.NEWS_API_BASE_URL}/top-headlines?sources=${source}&apiKey=${process.env.API_KEY}`)
        if (response.status !== 200) {
            res.status(response?.status).json({ message: response?.statusText })
        }
        else res.status(200).json({ sources: response?.data?.articles })
    }
    catch (err) {
        console.log("Error is", err);
    }
})
app.get('/', function (req, res, next) {
    res.send('Alive and Kicking')
})

app.listen(parseInt(process.env.PORT), function () {
    console.log(`Server listening on port ${process.env.PORT}`);
})