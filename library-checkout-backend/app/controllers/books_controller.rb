class BooksController < ApplicationController
  def index
    books = Book.all
    render json: ObjectSerializer.new(books).to_serialized_json
  end

  def create
    book = Book.create(book_params)
    libraryItem = LibraryItem.new(book_params[:library_item_attributes])
    libraryItem.assign_attributes(libraryable: book)
    
    render json: LibraryItemSerializer.new(libraryItem).to_serialized_json
  end

private
  def book_params
    params.require(:book).permit(:author, :volume, library_item_attributes: [:name, :description, :publisher, :url])
  end

end
