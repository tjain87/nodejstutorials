const request = require('request');
const yargs = require('yargs');
const geoCode = require('./geocode/geocode');

const argv = yargs
            .option({
                a: {
                    demand: true,
                    alias: 'address',
                    describe: 'Address to fetch weather for',
                    string: true
                }
            })
            .help()
            .alias('help', 'h')
            .argv;

geoCode.geoCodeAddress(argv.address, (errormessage, results) => {
    if(errormessage) {
        console.log(errormessage);
    } else {
        console.log(JSON.stringify(results, undefined, 2));
    }
});