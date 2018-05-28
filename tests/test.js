import {assert} from "chai";
import GoogleSearchPage from '../pageobjects/googlesearchpage';
import SearchResultsPage from '../pageobjects/searchresultspage';

describe('GoogleSearch Test', function () {
    it('Search for Selenium', function () {
        GoogleSearchPage.open();
        GoogleSearchPage.searchfor('Selenium');
        assert.isOk(SearchResultsPage.linkselenium, 'Selenium Link Present')
    });
});