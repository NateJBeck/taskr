$(function() {
  var postUnCompleteTask = function() {
    var theElement = $(this);
    var taskData = theElement.serialize();

    var conversation = $.ajax({
      url: theElement.attr("action"),
      type: "PATCH",
      data: taskData
    });

    conversation.done(addTaskToIncomplete);
    $(this).parent("li").fadeOut();

    return false;
  };

  var addTaskToIncomplete = function(taskHTML) {
    var taskList = $("ul#incomplete-task-list");

    taskList.prepend(taskHTML);
  }

  $("body").on("submit", "form.uncomplete_form", postUnCompleteTask);
});


