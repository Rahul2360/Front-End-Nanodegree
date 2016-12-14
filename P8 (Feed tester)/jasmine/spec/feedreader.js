/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* : Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it ('url defined and it is not empty',function(){
           for(var i=0;i<allFeeds.length;i++)
           {
             expect(allFeeds[i].url).toBeDefined();
             expect(allFeeds[i].url.length>0).toBe(true);

           }
        });

        /* : Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('name defined and it is not empty',function(){
           for(var j=0;j<allFeeds.length;j++)
           {
             expect(allFeeds[j].name).toBeDefined();
             expect(allFeeds[j].name.length>0).toBe(true);
           }
         });
    });


    /* : Write a new test suite named "The menu" */
describe('The menu',function(){

        /* : Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         it('Hidden HTML of the menu elment',function(){
           expect($('body').hasClass('menu-hidden')).toBe(true);
         });
         /* : Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('Disply or hide when click',function(){
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);

            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
          });
});
    /* : Write a new test suite named "Initial Entries" */

describe('Initial Entries',function(){

        /* : Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         beforeEach(function(done){
           loadFeed(0,done);
         });
         it('single entry',function(done){
           expect($('.feed .entry').length>0).toBe(true);
           done();
         });
});
    /*: Write a new test suite named "New Feed Selection"

        /* : Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
describe('New Feed Selection',function(){
        var feed;
        var newfeed;

        beforeEach(function(done){
          loadFeed(0,function(){
            feed = $('.header-title').html();
            loadFeed(1,function(){
              newfeed=$('.header-title').html();
              done();
              });
            });
        });
        it('Feed changes at reload',function(){
          expect(feed).not.toEqual(newfeed);
        });
});

}());
