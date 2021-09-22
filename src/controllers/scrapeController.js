const weather  = require("./../services/weatherService");


const getTemperature = async (req, res, next) => {
    const destination = req.params.destination;
    let temp;
    try {
        temp = await weather.temperature(destination);

        if (temp)
         {
            res.status(200).json({
                message: "success",
                data: temp
            });
        }else{
            res.status(400).json({
                message: "error",
                data: temp
            });
        }


    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }


}

module.exports = {
    getTemperature
};



