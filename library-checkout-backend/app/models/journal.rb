class Journal < ApplicationRecord
  # has_one :library_item
  has_one :library_item, as: :libraryable
  # has_many :library_items, as: :library_itemable
end
