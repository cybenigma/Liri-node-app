//spotify_this_song
/*node liri.js spotify-this-song '<song name here>'
This will show the following information about the song in your terminal/bash window
Artist(s)
The song's name
A preview link of the song from Spotify
The album that the song is from
if no song is provided then your program will default to
"The Sign" by Ace of Base
*/

var spotify = require('spotify');
'use strict';
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