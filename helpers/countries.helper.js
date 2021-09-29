const axios = require('axios');

class CountriesHelper {
    constructor() {
        this.response = null;
    }

     async getCountries() {
         await axios.get('https://sre-test-api.herokuapp.com/country_codes')
            .then(res => {
                this.response = res;
            });
    }
}

module.exports = CountriesHelper;
