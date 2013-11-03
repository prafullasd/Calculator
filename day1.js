function clickHandler(index) {
    var whatsInside = $("#text"+index).val(); //$ creates a jquery, # is for id , . for a class
    var whatsInsideUp = whatsInside.toUpperCase() 
    $("#text_out"+index).text(whatsInsideUp)
    console.log(whatsInsideUp);
}

$(document).ready( function() {
    $(".calculator").each( function() {
    var inputBox=$('<input type="text" size="50">')
    var calcButton=$('<p><button>Calculate</button></p>')
    var output=$('<div id="text_out">')
    calcButton.on("click", function(){
        var whatsInside=inputBox.val()
        output.text(whatsInside.toUpperCase())
    }) //binding an event to  button
    $(this).append(inputBox, calcButton, output);
        })
});