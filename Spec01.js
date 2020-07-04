describe("Open Browser", function() {
  it("Login to angular site", function() {
	  
	  browser.waitForAngularEnabled(true);
	  browser.get("https://angularjs.org/");
	  
	  
	  
	  
	  
  });
  
  it("Log out to angular site", function() {
	  //close the browser
  });
});

/*describe('Protractor baby steps',function() {  


	it('Open Angular js website',function() {


		browser.get("https://angularjs.org/");


//		write your protractor raw code



	})




//	Each it block will be called as a spec



	it('close browswer', function() {



//		code to close browser
	})



})

*/



