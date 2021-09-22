const express = require('express');
const dotenv = require("dotenv");
const router = require("./src/controllers");
const morgan = require('morgan');
const http = require('http');
var mongo = require("./src/db/mongo");

const app = express();

dotenv.config();
app.set('case sensitive routing', true);

/** Logging */
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/** RULES OF OUR API 
 * seting the CORS policy
 * set the CORS headers
 * set the allowed CORS method headers
*/
app.use((req, res, next) => {
    
    res.header('Access-Control-Allow-Origin', '*');
    
    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
    
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
        return res.status(200).json({});
    }
    next();
});

/** LOG REQUESTS */
const logRequestCalls = (req, res, next) => {
    
    console.info(`${req.method} ${req.url}`);
    res.on('finish', () => {
        console.info(`${res.statusCode} ${res.statusMessage}; ${res.get('Content-Length') || 0}b sent`);
    });

    next();
}

app.use(logRequestCalls);

/** ROUTES */
app.use("/api",router);

app.get("/", (req, res) => {
    res.send("Welcome to Sample web scraper");
});

/** ERRORS */
app.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});

/** SERVER */
const httpServer = http.createServer(app);
const PORT = process.env.PORT?process.env.PORT: 3081;

httpServer.listen(PORT, () => {
    console.info(`Sample web scraper applicated started on port:${PORT}`);

});