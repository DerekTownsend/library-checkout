class LibraryItem < ApplicationRecord
  # has_one :magazine
  # belongs_to :library_itemable, polymorphic: true

  def what
    puts "WHAT"
  end
end
