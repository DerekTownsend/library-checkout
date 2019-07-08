class MagazinesController < ApplicationController
  def index
    magazines = Magazine.all
    render json: ObjectSerializer.new(magazines).to_serialized_json
  end
end
