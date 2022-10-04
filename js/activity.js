$(document).ready(function(){
  $(document).bind("click", function(e) {
   $(e.target).closest("td").toggleClass("highlight");
   $("td").filter(".none").removeClass("highlight");
 }); 
  //User interaction with table cells
  $("td").click(function () {
    // user select a table data cell
    var content = $(this).text(); // get content of cell

    if (content != "Not Available") {
      // check if content does not contain a particular string
      $(this).toggleClass("tdhighlight"); // add or remove class when cell is selected

      if ($(this).hasClass("tdhighlight")) {
        //check if selected cell has class
        $("#displaySelected").css("visibility", "visible"); //make display box visible
        $("#displaySelected").css("margin-top", "2em"); //add spaces above display box
        $("#result").append("<p>" + content + ' at' + ' $("td:eq(0)").text(index))' + "</p>" ); //add child element with contents of cell
        //$("#result").append("")
      } else {
        // if selected cell don't have class
        $("#result p:contains(" + content + ")").remove(); //remove child element

        if ($("#result").has(p).lenght == false) {
          // check if there are any child elements within parent
          $("#displaySelected").css("visibility", "hidden"); //make display box hidden
          $("#displaySelected").css("margin-top", "0"); // remove spaces above display box
        }
      }
    }
  });
}); 



