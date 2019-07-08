class Book < ApplicationRecord
  has_one :library_item, as: :libraryable

end
