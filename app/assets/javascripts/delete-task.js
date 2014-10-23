$(function() {
  var deleteTask = function() {
    var theElement = $(this);
    var taskData = theElement.serialize();

    var conversation = $.ajax({
      url: theElement.attr("action"),
      type: "DELETE",
      data: taskData
    });

    $(this).parent("li").fadeOut();

    // conversation.done(deleteTask);
    return false;
  };

  $("body").on("submit", ".delete_form", deleteTask);
});

  // var deleteTask = function(data) {
  //   var taskId = data.task_id;
  //   // $("#task_" + taskId).fadeOut();
  //
  //   //console.log("DELETED!!!!!!!!!!!");
  // };
