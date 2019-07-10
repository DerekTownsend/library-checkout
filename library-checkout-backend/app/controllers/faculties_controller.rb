class FacultiesController < ApplicationController
  def index
    faculties = Faculty.all
    obj = faculties.collect do |faculty|
      JSON.parse(UserSerializer.new(faculty.user).to_serialized_json)
    end
    render json: obj
  end

  def show
    faculty = Faculty.find_by(id: params[:id])
    render json: UserSerializer.new(faculty.user).to_serialized_json
  end

  def create
    # faculty = Faculty.create_or_find_by(params[:user_attributes][:username])
    faculty = Faculty.find_by(params[:user_attributes][:username])
    puts faculty

    render json: UserSerializer.new(faculty.user).to_serialized_json
  end

private
    def faculty_params
      params.require(:faculty).permit(:years_of_service, user_attributes: [:name, :username, :address])
    end
end
