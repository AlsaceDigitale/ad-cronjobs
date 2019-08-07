var cron = require('cron');
var axios = require('axios');

// checks out coworkers who forgot to check out manually
var flexGlobalCheckout = new cron.CronJob({
	cronTime: process.env.FLEX_CHECKOUT_TIME || '2 0 * * *',
	onTick: function() {
		now = new Date();
		console.log(now + ': job flexGlobalCheckout ticked');

		if(process.env.FLEX_CHECKOUT_URL) {
			axios.get(process.env.FLEX_CHECKOUT_URL)
			  .then(function (response) {
			 	console.log("job flexGlobalCheckout - HTTP Request made on " + process.env.FLEX_CHECKOUT_URL);
			  })
			  .catch(function (err) {
			 	console.log("job flexGlobalCheckout - Error: " + err);
			  });
		}
		else
		{
		 	console.log("job flexGlobalCheckout - Error: env variable FLEX_CHECKOUT_URL not set");
		}
	},
	start: true,
	timeZone: 'Europe/Paris'
});

// just in case the first script didn't run smooth we run flexGlobalCheckout again a few minutes later
var flexGlobalCheckout2 = new cron.CronJob({
	cronTime: process.env.FLEX_CHECKOUT_TIME2 || '5 0 * * *',
	onTick: function() {
		now = new Date();
		console.log(now + ': job flexGlobalCheckout2 ticked');

		if(process.env.FLEX_CHECKOUT_URL) {
			axios.get(process.env.FLEX_CHECKOUT_URL)
			  .then(function (response) {
			 	console.log("job flexGlobalCheckout2 - HTTP Request made on " + process.env.FLEX_CHECKOUT_URL);
			  })
			  .catch(function (err) {
			 	console.log("job flexGlobalCheckout2 - Error: " + err);
			  });
		}
		else
		{
		 	console.log("job flexGlobalCheckout2 - Error: env variable FLEX_CHECKOUT_URL not set");
		}
	},
	start: true,
	timeZone: 'Europe/Paris'
});

// same thing on staging
var flexGlobalCheckoutStaging = new cron.CronJob({
	cronTime: process.env.STAGING_FLEX_CHECKOUT_TIME || '2 0 * * *',
	onTick: function() {
		now = new Date();
		console.log(now + ': job flexGlobalCheckoutStaging ticked');

		if(process.env.STAGING_FLEX_CHECKOUT_URL) {
			axios.get(process.env.STAGING_FLEX_CHECKOUT_URL)
			  .then(function (response) {
			 	console.log("job flexGlobalCheckoutStaging - HTTP Request made on " + process.env.STAGING_FLEX_CHECKOUT_URL);
			  })
			  .catch(function (err) {
			 	console.log("job flexGlobalCheckoutStaging - Error: " + err);
			  });
		}
		else
		{
		 	console.log("job flexGlobalCheckoutStaging - Error: env variable STAGING_FLEX_CHECKOUT_URL not set");
		}
	},
	start: true,
	timeZone: 'Europe/Paris'
});