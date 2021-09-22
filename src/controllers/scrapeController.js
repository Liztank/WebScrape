const  scrape  = require("./../services/scrapeService");
const weather  = require("./../services/weatherService");


const getFlightInfo = async(req, res, next) =>{
    try {
     scrape.getFlight().then(data=>{
        res.status(200).json({
        message:"succesfful",
        data: data
    });
     });
    
    } catch (error) {
        res.status(400).json({
        message:"failed",
        data: error
    });
    }
    
};

module.exports = {
    getFlightInfo
};



