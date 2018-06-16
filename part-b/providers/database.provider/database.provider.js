let sqlite3 = require('sqlite3').verbose()
module.exports.db = new sqlite3.Database('./sqlite.db')
module.exports.init = function() {
  this.db.run('CREATE TABLE if not exists booking (' + 'id INTEGER PRIMARY KEY AUTOINCREMENT,' + ' firstName TEXT,' + ' lastName TEXT,' + ' flight INT' + ')')
  this.db.run('CREATE TABLE if not exists flight (' + 'id INTEGER PRIMARY KEY AUTOINCREMENT,' + ' name TEXT,' + ' airline TEXT)')
}
