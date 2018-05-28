class GoogleSearchPage {

    get searchbox() {return browser.element('#lst-ib');}

    open(){
        browser.url('http://www.google.com')
    }

    searchfor(searchterm){
        this.searchbox.setValue(searchterm);
        browser.keys('Enter');
    }

}

export default new GoogleSearchPage();