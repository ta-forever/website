var WPAPI = require('wpapi');
var wp = new WPAPI({ endpoint: 'http://faf-wordpress/wp-json' });

wp.posts()
  .categories(1)
  .then(function(data) {
  console.log(data);
}).catch(function(err) {
  console.log(err);
});
