$(function() {
  var headers = $("#incomplete-header, #complete-header");
  headers.click(function() {
    var header = $(this);
    var list = $("#" + header.data("list-id"));

    header.toggleClass("collapsed");
    list.toggle();
  });
});
