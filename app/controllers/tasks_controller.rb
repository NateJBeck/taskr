class TasksController < ApplicationController
  before_action :require_login

  def index
    @incomplete_tasks = current_user.tasks.incomplete
    @complete_tasks = current_user.tasks.complete
    @task = Task.new
  end

  def create
    @task = current_user.tasks.build(task_params)

    if @task.save
      render @task
    else
    #  render text: "You messed up", status: 422
      render partial: "error_messages",
        locals: { target: @task },
        status: 422
    #   @complete_tasks = current_user.tasks.complete
    #   @incomplete_tasks = current_user.tasks.incomplete
    #   render :index
    end
  end

  def update
    task = current_user.tasks.find(params[:id])
    task.update(task_params)

    redirect_to tasks_path
  end

  private

  def task_params
    params.require(:task).permit(:title, :description, :completed)
  end

end

