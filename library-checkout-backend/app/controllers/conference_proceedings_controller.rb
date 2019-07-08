class ConferenceProceedingsController < ApplicationController
  def index
    conference_proceedings = ConferenceProceeding.all
    render json: ObjectSerializer.new(conference_proceedings).to_serialized_json
  end
end
