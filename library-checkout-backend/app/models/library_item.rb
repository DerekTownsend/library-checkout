class LibraryItem < ApplicationRecord
  # has_one :magazine
  # has_one :journal
  belongs_to :libraryable, polymorphic: true

  # def what
  #   puts "WHAT"
  # end
end
