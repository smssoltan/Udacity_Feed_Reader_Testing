/*
*Name: Sultan Shagal
*Project 4 Feed Reader
*/

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


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('has a URL defined.', function(){
            allFeeds.forEach(element => {
            expect(element.url).toBeDefined();
            expect(element.url.length).not.toBe(0)
        });
    })
        

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('has a name defined.', function(){
            allFeeds.forEach(element => {
            expect(element.name).toBeDefined();
            expect(element.name.length).not.toBe(0)
        });
    })
    });


    /* TODO: Write a new test suite named "The menu" */

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         describe("The menu",()=>{

            it("is hidden by default", ()=>{

                let isHidden= document.body.classList.contains("menu-hidden");
                expect(isHidden).toBe(true);
            })

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
         
            it("visibility changes on click.", ()=>{

            let menuIcon = document.querySelector(".menu-icon-link")
            
            menuIcon.click();
            expect(document.body.classList).not.toContain("menu-hidden");
            menuIcon.click();
            expect(document.body.classList).toContain("menu-hidden");
                        
        })
      
    });    
   
    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

         describe("Initial Entries", ()=>{

            beforeEach((done)=>{

                loadFeed(1, done)
            });

            it("has at least 1 entry element with in the feed container", function(){

               let allEntries = document.querySelectorAll('article.entry');
                expect(allEntries.length).toBeGreaterThan(0);
            })
        })
    /* TODO: Write a new test suite named "New Feed Selection" */
        describe("New Feed Selection", ()=>{


        
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        let feedSelection;
         beforeEach((done)=>{

            loadFeed(0, () => {
                feedSelection = document.querySelector(".feed").innerHTML;
                loadFeed(1, () =>{
                    done();
                })
            })
         })

         it("a new feed is loaded, and content has changed", ((done)=>{

            let newFeedSelection = document.querySelector(".feed").innerHTML;
            expect(feedSelection).not.toBe(newFeedSelection);
            done();
         }))
        })
}());
