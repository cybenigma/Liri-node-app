//At the top of the liri.js file, write the code you need to grab the data from keys.js. 
//Then store the keys in a variable.
const spotify_this_song = require('./spotify_this_song');
const my_tweets         = require('./my_tweets');
const movie_this        = require('./movie_this');
const getTwitterKeys    = require('./keys');

'use strict';
var inquirer = require('inquirer');
var answerArr = "";
var questions = [
  {
    type: 'input',
    name: 'command_line',
    message: 'What\'s your command? '
  }
];

inquirer.prompt(questions).then(function (answers) {
  console.log(JSON.stringify(answers, null, '  '));
  console.log(answers.command_line);
  answerArr = answers.command_line;
});

console.log(answerArr);
var commandAns = answerArr;
switch (commandAns)
  {
    case 'my tweets': 
    {
      var checkResponse = client.get('search/tweets', {q: 'node.js'}, function(error, tweets, response) {
      if (!error) {
          console.log(tweets);
          console.log(JSON.stringify(tweets, null, '  '));
          console.log(response);
          console.log(JSON.stringify(response, null, '  '));
      }
          console.log(error);
      });
    }
    break;
            
    case 'spotify this song': 
    {
      var inquirer = require('inquirer');
      var trackName = 'dancing in the moonlight';

      function setTrackName(track)
      {
      trackName = track;
      };

      spotify.search({ type: 'track', query: trackName }, function(err, data) {
            if ( err ) {
                console.log('Error occurred: ' + err);
                return;
            }
         
        console.log(data);
      });
    }
    break;
            
    case 'movie this': 
    {
      var omdb = require('omdb');
 
      omdb.search('saw', function(err, movies) {
          if(err) {
              return console.error(err);
          }
       
          if(movies.length < 1) {
              return console.log('No movies were found!');
          }
       
          movies.forEach(function(movie) {
              console.log('%s (%d)', movie.title, movie.year);
          });
       
          // Saw (2004) 
          // Saw II (2005) 
          // Saw III (2006) 
          // Saw IV (2007) 
          // ... 
      });
       
      omdb.get({ title: 'Saw', year: 2004 }, true, function(err, movie) {
          if(err) {
              return console.error(err);
          }
       
          if(!movie) {
              return console.log('Movie not found!');
          }
       
          console.log('%s (%d) %d/10', movie.title, movie.year, movie.imdb.rating);
          console.log(movie.plot);
       
          // Saw (2004) 7.6/10 
          // Two men wake up at opposite sides of a dirty, disused bathroom, chained 
          // by their ankles to pipes. Between them lies... 
      });
    }
    break;
            
    default:  console.log("Please try another COMMAND")
  }


