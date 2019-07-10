class StudentsController < ApplicationController
  def index
    students = Student.all
    obj = students.collect do |student|
      JSON.parse(UserSerializer.new(student.user).to_serialized_json)
    end
    render json: obj
  end

  def show
    student = Student.find_by(id: params[:id])
    render json: UserSerializer.new(student.user).to_serialized_json
  end
  
end
