const env = require("./../config/envConfig");
const weather  = require("./weatherService");
const dbOperations = require('./../db/operations.db');

let scrapeDeparture = async () =>{
    const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  
  await page.goto(env.SITE_URL);

  
 /**
  * scrape steps for the vienna airline departure data after getting the sites markup data:
  * 1) Select the element that contains the data to scrape: It returns a NodeList
  * 2) Convert Nodelist to Array to perform regular Array operations on data
  * 3) Clean up data to remove unwanted charaters from it
  * 4) Restructure the data
  */
 const departureList = await page.evaluate(() => Array.from(document.querySelectorAll("div.detail-table__row")).map((too)=>too.innerText.replace(/[\r\n]+/gm, " ").trim()));

 const flightDetail = departureList.map(async (flight)=>{
     let flightInfo = flight.split(" ");
     let temp = await weather.temperature(!!flightInfo[1]);
     let tst ={
         destination: flightInfo[1],
         time: flightInfo[0],
         temperature: temp.temperature,
         note:temp.note
     } ;
     dbOperations.insert(tst).then(data=>{
         return data;
     });
 });

  browser.close();

  return flightDetail;
})();
};

const getFlightInfo = async()=>{
    let res = await dbOperations.findAll();
    return res;
}

module.exports = {
    scrapeDeparture:scrapeDeparture,
    getFlight:getFlightInfo
};