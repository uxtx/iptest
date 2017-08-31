var ip = require('ip');
// get private ip. ip.address( 'public', 'ipv4' ) //
console.log('ADDRESS IS', ip.address('public', 'ipv4'));
