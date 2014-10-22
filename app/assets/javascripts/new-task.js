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
    conversation.fail(onFailure);
    return false;
  };

  var resetForm = function() {
    newTaskForm.find("#task_title, #task_description").val("");
    newTaskForm.find("#task_title").focus();
  };

  // render @task result comes in here
  // Successful form
  var addTaskToList = function(taskHTML) {
    var taskList = $("ul#incomplete-task-list");
    taskList.prepend(taskHTML);
    $("#errors").html("");

    resetForm();
  };

  // Failed form
  var onFailure = function(ajaxObject) {
    var htmlFromServer = ajaxObject.responseText;
    $("#errors").html(htmlFromServer);
  };

  newTaskForm.submit(postTaskDataToServer);

});
