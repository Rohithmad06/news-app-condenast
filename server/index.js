require('dotenv').config();
const express = require('express');
const app = express();
const axios = require('axios');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDocs = require('swagger-jsdoc');

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "News API",
            description: "Get latest news from newsapi.org service",
            contact: {
                name: "Rohith Maddineni"
            },
            servers: [`http://localhost:${process.env.PORT}`]
        }
    },
    apis: ["index.js"]
}
const swaggerDocs = swaggerJsDocs(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
/**
 * @swagger
 *  /topnews:
 *   get:
 *    description: Get top news from source bbc-news. You can change the page size, page number and filter using key words by passing them as query params like pageSize page and q.
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.get('/topnews', async function (req, res, next) {
    const pageSize = parseInt(req.query.pageSize) || 10;
    const page = parseInt(req.query.page) || 1;
    const q = req.query.q
    try {
        let queryString = `${process.env.NEWS_API_BASE_URL}/everything?sources=bbc-news&apiKey=${process.env.API_KEY}&pageSize=${pageSize}&page=${page}`;
        if (q) queryString += `&q=${q}`;
        const response = await axios.get(queryString);

        if (response.status !== 200) {
            res.status(response?.status).json({ message: response?.statusText })
        }
        else res.status(200).json({
            articles: response?.data?.articles
        })
    }
    catch (err) {
        console.log("Error is", err);
    }
})

app.get('/', function (req, res, next) {
    res.send('Alive and Kicking')
})

var server = app.listen(parseInt(process.env.PORT), function () {
    console.log(`Server listening on port ${process.env.PORT}`);
})
module.exports = server;