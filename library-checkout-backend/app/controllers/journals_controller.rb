class JournalsController < ApplicationController
  def index
    journals = Journal.all
    render json: ObjectSerializer.new(journals).to_serialized_json
  end

  def create
    journal = Journal.create(journal_params)
    libraryItem = LibraryItem.new(journal_params[:library_item_attributes])
    libraryItem.assign_attributes(libraryable: journal)

    render json: LibraryItemSerializer.new(libraryItem).to_serialized_json
  end

private
  def journal_params
    params.require(:journal).permit(:number, library_item_attributes: [:name, :description, :publisher, :url])
  end
end
