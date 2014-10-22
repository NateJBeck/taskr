$(function() {
  var newTaskForm = $("form#new_task");

  var postTaskDataToServer = function() {
    var taskData = newTaskForm.serialize();
    var conversation = $.ajax({ 
      url: "/tasks", 
      type: "POST",
      data: taskData
    });
    conversation.done(addTaskToList);
    resetForm();
    return false;
  };

  newTaskForm.submit(postTaskDataToServer);

  var resetForm = function() {
    newTaskForm.find("#task_title, #task_description").val("");
    newTaskForm.find("#task_title").focus();
  };

  // render @task result comes in here
  var addTaskToList = function(taskHTML) {
    var taskList = $("ul#incomplete-task-list");
    taskList.prepend(taskHTML);
  };
});
