class JournalsController < ApplicationController
  def index
    journals = Journal.all
    render json: ObjectSerializer.new(journals).to_serialized_json
  end
end
