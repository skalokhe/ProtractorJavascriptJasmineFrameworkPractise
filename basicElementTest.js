describe("Load Browser", function() {
  it("Login to angular site", function() {
	  
	  browser.waitForAngularEnabled(true);
       // browser.ignoreSynchronization = true;
        browser.get("http://juliemr.github.io/protractor-demo/");
         //browser.sleep(5000);
         element(by.model('first')).sendKeys(3);
         element(by.model('second')).sendKeys(6);
       // element(by.model("first")).sendkeys('3');

      //element(by.model("first")).sendkeys("3");
        //element(by.model("second")).sendkeys("6");
       // browser.sleep(5000);
		element(by.id('gobutton')).click();
		expect(element(by.css("h2[class='ng-binding']")).getText()).toBe('9');
		//browser.sleep(5000);
		element(by.css("h2[class='ng-binding']")).getText().then(function(text){
			console.log(text);
		
		})
  });
  
  it("Log out to angular site", function() {
	  //close the browser
  });
})
