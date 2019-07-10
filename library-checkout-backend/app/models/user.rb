class User < ApplicationRecord
  belongs_to :userable, polymorphic: true
  has_many :library_items, as: :libraryable
end
