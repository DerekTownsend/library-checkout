class ConferenceProceeding < ApplicationRecord
  has_one :library_item, as: :libraryable
  accepts_nested_attributes_for :library_item

end
