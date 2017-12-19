const debug = require('debug')('e2e');

describe('running JS: firstFunc()', () => {
    beforeEach(() => {
        debug('browser.baseUrl', browser.baseUrl);
        browser.ignoreSynchronization = true;
        browser.get('/');
        // for debugging
        // browser.sleep(60000);
    });

    it("can be validated via coverage", async () => {
        const jsButton = element(by.id('js-button-1'));
        await jsButton.click();
    });
});
