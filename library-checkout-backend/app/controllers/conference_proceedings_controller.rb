class ConferenceProceedingsController < ApplicationController
  def index
    conference_proceedings = ConferenceProceeding.all
    render json: ObjectSerializer.new(conference_proceedings).to_serialized_json
  end

  def create
    conference_proceeding = ConferenceProceeding.create(conference_proceeding_params)
    libraryItem = LibraryItem.new(conference_proceeding_params[:library_item_attributes])
    libraryItem.assign_attributes(libraryable: conference_proceeding)

    render json: LibraryItemSerializer.new(libraryItem).to_serialized_json
  end

private
  def conference_proceeding_params
    params.require(:conference_proceeding).permit(:editor, :date, :location, library_item_attributes: [:name, :description, :publisher, :url])
  end
end
