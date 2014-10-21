class TasksController < ApplicationController
  def index
    @tasks = current_user.tasks.incomplete
    @task = Task.new
  end

  def create
    @task = current_user.tasks.build(task_params)

    if @task.save
      render @task
    else
      @tasks = current_user.tasks.incomplete
      render :index
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
