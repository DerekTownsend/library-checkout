class BooksController < ApplicationController
  def index
    books = Book.all
    render json: ObjectSerializer.new(books).to_serialized_json
  end
end
