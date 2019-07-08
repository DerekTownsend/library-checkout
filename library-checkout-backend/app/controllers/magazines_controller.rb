class MagazinesController < ApplicationController
  def index
    magazines = Magazine.all
    render json: magazines
  end
end
