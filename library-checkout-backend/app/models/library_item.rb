class LibraryItem < ApplicationRecord
  # has_one :magazine
  # has_one :journal
  belongs_to :user, optional: true
  belongs_to :libraryable, polymorphic: true
  # has_one:
  # def what
  #   puts "WHAT"
  # end
end
