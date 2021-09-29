const axios = require('axios');

class CasesHelper {
    constructor() {
        this.response = null;
    }

    async getCases(country) {
        await axios.get(`https://sre-test-api.herokuapp.com/country/${country}`)
            .then(res => {
                this.response = res;
            });
    }
}

module.exports = CasesHelper;
