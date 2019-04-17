var request = require('request');

const list = async (req, res, next) => {
    try {
        const { input } = req.query;
        request('https://terriblytinytales.com/test.txt', function (error, response, body) {
            console.error('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

            var wordsArray = body.split(/\s+/);
            var wordsMap = Object.create(null);
            wordsArray.forEach(function (key) {
                if (wordsMap[key]) {
                wordsMap[key]++;
                } else {
                wordsMap[key] = 1;
                }
            });

            let finalWordsArray = [];
            finalWordsArray = Object.keys(wordsMap).map(function (key) {
                return {
                name: key,
                count: wordsMap[key]
                };
            });

            finalWordsArray.sort(function (a, b) {
                return b.count - a.count;
            });
            finalWordsArray = finalWordsArray.slice( 0, input);

            res.json({ data: { 'frequentWords': finalWordsArray }, success: true});
        });
    }catch(e) {
        next(e);
    }
}

module.exports = {
    list
}