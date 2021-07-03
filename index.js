function onClick() {
    // This is just a simple function to avoid
    // making many anonymous functions
    // Disregard me :D
    alert("I've been clicked!");
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
$("p").html("<em>bruh momento</em>");
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
$("p").click(onClick)
                                        // Want to add a ton of listeners?
                                        // dont add a loop, just write the same thing.
                                        // it will automatically add the listener
                                        // to all applicable selectors :D
$("button").click(onClick)