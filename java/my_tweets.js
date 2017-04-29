//my-tweets

//************    Twitter Node API    **************
//node liri.js my-tweets
//This will show your last 20 tweets and when they were created at in your terminal/bash window.

var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 		'X9TQjZ9xKFUEldTfNo4xdYabO',
  consumer_secret: 		'uPGY8aiNgg5OmdOwx6WclXuJgKYEkgc7SXOSdTCluVWPnNYeNY',
  access_token_key: 	'3668125643-KSLtOKicZnTeNJZdpcgtdGXEY8U4YbMjX4mVrk6',
  access_token_secret: 	'M1gOzp5G39SefONkJ41WRJIImL8s8BfcbpMv6mZzUTZ7Y',
});

console.log(client);
var checkResponse = client.get('search/tweets', {q: 'node.js'}, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
    console.log(JSON.stringify(tweets, null, '  '));
    console.log(response);
    console.log(JSON.stringify(response, null, '  '));
  }
 console.log(error);
});

console.log(checkResponse);
console.log(JSON.stringify(checkResponse, null, '  '));


/*client.get('search/tweets', {q: 'node.js'}, function(error, tweets, response) {
   console.log(tweets);
});
*/
