class Magazine < ApplicationRecord
  # self.table_name = :magazines
  # belongs_to :library_item
  # has_one :library_item
  has_one :library_item, as: :libraryable
  # has_many :library_items, as: :library_itemable


end
