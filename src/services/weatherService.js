var env = require("./../config/envConfig");
var axios = require("axios") ;


    async function temperature (destination){

        var url = env.OPEN_WEATHER_MAP_URL + `?q=${destination}&units=${env.OPEN_WEATHER_MAP_UNITS}&appid=${env.OPEN_WEATHER_MAP_API_KEY}`;
        var options = {
            method:"GET",
            url: url,
            headers:{"Content-Type":"application/json"},
        };
    
           var weatherPayload = await axios(options);
           var temptObj = weatherPayload.data.main;
           var note = temperatureNote(parseFloat(temptObj.temp));
        return note;

    }

    const temperatureNote=(temperature)=>{
        
        var month = parseInt(new Date().getMonth())+1;
        temperature = temperature || 0;

        if(month > 2 && month < 6){
            return spring(temperature);
        }else if(month > 5 && month < 9){
            return summer(temperature);
        }else if(month > 8 && month < 12){
                return fall(temperature);
        }else if(month > 11 || (month > 0 && month <3)){
            return winter(temperature);
        }else{
            return "Out of range";
        }

    };

    const summer = (temp) =>{

        temp = temp || 0;
        
        if(temp > 33){
            return "Pool time...";
        }else if(temp > 26 && temp < 33){
            return "Icecream time";
        } else if(temp > 19 && temp < 26){
            return "Warm";
        }
        else if(temp < 20){
            return "Cold";
        }
        else{
            return "Outside range";
        }
    };

    const winter = (temp) => {

        temp = temp || 0;

        if(temp > 20){
            return "Let's take a walk";
        }else if(temp > 11 && temp < 21){
            return "Cool";
        } else if(temp > 6 && temp < 12){
            return "Really Cold";
        }
        else if(temp < 7){
            return "Freezing";
        }
        else{
            return "Outside range";
        }
    };

    const spring = (temp) => {
        temp = temp || 0;
        
        if(temp > 29){
            return "Get lost in the pool";
        }else if(temp > 24 && temp < 31){
            return "Let's go to the beach";
        } else if(temp > 17 && temp < 26){
            return "Ok";
        }
        else if(temp < 18){
            return "Cooling Cold";
        }
        else{
            return "Outside range";
        }
    };

    const fall = (temp) => {
        temp = temp || 0;
        
        if(temp > 26){
            return "Take a dip dive";
        }else if(temp > 17 && temp < 27){
            return "Beach time";
        } else if(temp > 13 && temp < 18){
            return "Warm dive";
        }
        else if(temp < 14){
            return "Cold here and here";
        }
        else{
            return "Outside range";
        }
    };

    module.exports = {
        temperature:temperature
    };