class UsersController < ApplicationController
  def index
    user = User.all
    render json: UserSerializer.new(user).to_serialized_json
  end

  def show
    user = User.find_by(id: params[:id])
    render json: UserSerializer.new(user).to_serialized_json
  end

  def login
    user = User.find_by(username: params[:username])
    if user
      render json: UserSerializer.new(user).to_serialized_json
    else
      render json: {message: "failure"}
    end
  end

  def checkout
    
  end
end
