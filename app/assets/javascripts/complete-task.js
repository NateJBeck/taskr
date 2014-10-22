$(function() {
  var postCompleteTask = function() {
    var theElement = $(this);
    var taskData = theElement.serialize();

    var conversation = $.ajax({
      url: theElement.attr("action"),
      type: "PATCH",
      data: taskData
    });

    conversation.done(addTaskToComplete);
    $(this).parent("li").fadeOut();

    return false;
  };

  var addTaskToComplete = function(taskHTML) {
    var taskList = $("ul#complete-task-list");
    taskList.prepend(taskHTML);
  }

  $("body").on("submit", "form.complete_form", postCompleteTask);
});


