var uniq = require('uniq');
var $ = require('jquery');

var data = [1, 2, 2, 3];

$('body').append(uniq(data));
