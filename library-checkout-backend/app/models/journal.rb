class Journal < ApplicationRecord
  # has_one :library_item
  has_one :library_item, as: :libraryable
  accepts_nested_attributes_for :library_item

  # has_many :library_items, as: :library_itemable
end
