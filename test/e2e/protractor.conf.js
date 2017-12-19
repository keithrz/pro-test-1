
exports.config = {
    // directConnect: true,
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['../specs/**/*.spec.js'],
    baseUrl: 'http://127.0.0.1:8000'
};
