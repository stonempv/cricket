var PouchDB = require('pouchDB');

var _baseURL = 'http://127.0.0.1:5984/';
var localDB;
var remoteDB;
var i = 1;

function newMatch(matchName){
  localDB = new PouchDB(matchName.toLowerCase());
  remoteDB = new PouchDB(_baseURL + matchName.toLowerCase());

  localDB.sync(remoteDB, {
    live: true,
    retry: true
  }).on('change', function (change) {
    // yo, something changed!
    console.log('yo, something changed!')
  }).on('paused', function (info) {
    // replication was paused, usually because of a lost connection
    console.log('replication was paused, usually because of a lost connection')
  }).on('active', function (info) {
    // replication was resumed   
    console.log('replication was resumed')
  }).on('error', function (err) {
    // totally unhandled error (shouldn't happen)
    console.log('totally unhandled error (shouldnt happen)')
  });
}

function addScore(score){
  var doc = {
    '_id': 'score_'+i,
    'score' : score
  }

  localDB.put(doc)
  i = i + 1
}

module.exports = {
  newMatch: newMatch,
  addScore: addScore
}