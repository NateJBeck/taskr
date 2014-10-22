$(function() {
  var newTaskForm = $("form#new_task");

  var postTaskDataToServer = function() {
    var taskData = newTaskForm.serialize();
    var conversation = $.ajax({ url: "/tasks", type: "POST", data: taskData });
    conversation.done(addTaskToList);
    resetForm();
    return false;
  };

  newTaskForm.submit(postTaskDataToServer);

  var addTaskToList = function(task) {
    var taskList = $("#task-list");
    taskList.prepend(task);
  };
});
