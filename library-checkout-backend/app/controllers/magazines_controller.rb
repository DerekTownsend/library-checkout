class MagazinesController < ApplicationController
  def index
    magazines = Magazine.all
    render json: ObjectSerializer.new(magazines).to_serialized_json
  end
  def create
    magazine = Magazine.create(magazine_params)
    libraryItem = LibraryItem.new(magazine_params[:library_item_attributes])
    libraryItem.assign_attributes(libraryable: magazine)

    render json: LibraryItemSerializer.new(libraryItem).to_serialized_json
  end

private
  def magazine_params
    params.require(:magazine).permit(:date_of_pub, :type_of_mag, library_item_attributes: [:name, :description, :publisher, :url])
  end
end
