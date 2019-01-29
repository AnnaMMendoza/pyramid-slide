/**
1st Assignment - Unit 3 - LC101
 */



function drawPyramid() {// pyramid drawing function

    var height = document.getElementById("slider").value; //gets the height from the slider input
    var symbolElem = symbol.options[symbol.selectedIndex].value;  // gets the symbol from the drop down menu

/**
 * drawPyramid
 *
 * Renders, in the HTML document, a pyramid of the specified height and symbol
 */
    document.getElementById("pyramid").innerHTML = "";

    for (var row = 0; row < height; row++) //for each row (iteration)
        {
            // figure out number of bricks and spaces
            var numBricks = row + 2;
            var numSpaces = height - row - 1;
            var rowStr = "";  
            
            for (var i = 0; i < numSpaces; i++) {
                var spaceChar = "&nbsp";
                rowStr += spaceChar; // build up a string for this row - &nbsp code for spaceChar
        }
    for (var i = 0; i < numBricks; i++) {
        rowStr += symbolElem;
        }
        // create a <p> element with the text inside, insert into #pyramid
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);

        // document.getElementById("pyramid").innerHTML = height; // tried to show the slider value
}
}
// function showHeight() {
    // document.getElementsByTagName(input);
// }