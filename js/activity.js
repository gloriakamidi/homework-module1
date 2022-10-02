$(document).ready(function(){
 $(document).bind("click", function(e) {
   $(e.target).closest("td").toggleClass("highlight").siblings(".none").removeClass("highlight");
 });
   //$("td").filter(".none").removeClass("highlight");
});
