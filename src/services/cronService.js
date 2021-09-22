const cron = require('node-cron');
const scrapeService = require('./scrapeService');


/**
 * @description
 * scheduling the data scrape activity to run every hour 
 * const task =
 */
 cron.schedule('0 1 0 0 0', async() => {
  console.log('running scraping data every one hour');
  await scrapeService.scrapeDeparture();
});

/**
* @description For future purposes, if there's need to stop this task,
* uncomment the line of code below
*/
// task.stop();