/*
	MediaCenterJS - A NodeJS based mediacenter solution
	
    Copyright (C) 2013 - Jan Smolders

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

// Choose your render engine. The default choice is JADE:  http://jade-lang.com/
exports.engine = 'jade';

var gs = require('grooveshark')
, client = new gs('your_api_key', 'your_api_secret');

// Render the indexpage
exports.index = function(req, res, next){

	client.authenticate('your_grooveshark_username', 'you_grooveshark_password', function(err) {
	  client.request('someMethod', {param1: 'foobar', param2: 1234}, function(err, status, body) {
		if(err) {
			console.log('Error client request', err);
		}else {
			console.log(body);
		}
	  });
	})

	res.render('grooveshark');
};

