function AlertFunc() {
    // This is just a simple function to avoid
    // making many anonymous functions
    // Disregard me :D
    alert("I've been called!");
}




                                        // Okay so think of $ as document.QuerySelectorAll
                                        // but instead of being spaghetti it is very pog now
                                        // how you essentially write stuff in jquery is
                                        // $(selector).FUNCTION(text/attr/function)


                                        // Pretty much self explanatory,
                                        // adds classes and removes classes
$("p").addClass("big-title ugly-color");
$("p").removeClass("ugly-color");


                                        // The equivalent of
                                        // innerHTML & innerText
$("p").text("sexy wexy");
$("p").html("<em>read index.js to understand lol</em>");
                                        // You can also get the text with this
var pTagText = $("p").text();


                                        // Attributes can be interacted with
                                        // .attr
                                        // While .removeAttr does what its told lol

$("a").removeAttr("href");
$("a").attr("href", "http://google.com");
var aTagAttrHref = $("a").attr("href"); // console.log("aTagAttrHref");
                                        // quick sidenote, CSS classes ARE attributes :D
var pTagClasses = $("p").attr("class"); // console.log("pTagClasses");

                                        
                                        // the .click method
                                        // is essentially adding an
                                        // event listener
$("p").click(AlertFunc);
                                        // Want to add a ton of listeners?
                                        // dont add a loop, just write the same thing.
                                        // it will automatically add the listener
                                        // to all applicable selectors :D
$(".alert").click(AlertFunc);
                                        // want to check keyboard events?
                                        // bro there is a built in function for that
                                        // so its pretty pog
$("input").keyup(AlertFunc);

                                        // So you wanna be extra special and make html
                                        // changes in javascript.
                                        // thats where these functions come in!

$("p").before("<button> im before the p tag! </button>");   // shows before the p tag
$("p").after("<button> im after the p tag! </button>");     // shows after the p tag

$("p").prepend("<button>prepend</button>");                 // before the content, inside the tag
$("p").append("<button>append</button>");                   // after the content, inside the tag

                                        // So you fucked up and now you want to remove stuff
                                        // just do this my guy
$(".remove-me").remove();                   

                                        // Maybe removing is too much and you just wanna hide stuff
                                        // tis a simple fix my guy
$(".hide-me").hide();

                                        // Okay maybe hiding something forever is a bad thing
                                        // why not toggle them
function toggleP() { $("p").toggle() ;} // This function right here broski  
$(".toggle-p").click(toggleP);

                                        // Do you want to be extra fancy?
                                        // Jquery has some built in animations my guy
                                        // These are the sexy animations

function slideAnim() { $("p").slideToggle() ;}              // slideUp & slideDown exist too
$(".slide-p").click(slideAnim);

function animateFunction() {            // Can do css stuff on the func below
    $("p").animate( {opacity: 0.5} );   // EXTREMELY IMPORTANT!!!
                                        // you can only use numeric CSS values on the .animate func
}
$(".animate-p").click(animateFunction);

                                        // Be mr fancy pants and chain the animations
                                        // Jquery orders the animation changes from left to right
function chainAnim() {
    $("p").slideUp().slideDown().animate( {margin: "10%"} ).animate( {margin : 0} );
}
$(".chain-p").click(chainAnim);

