# frozen_string_literal: true

class LibraryItemSerializer
  def initialize(library_item_object)
    @library_item = library_item_object
  end

  def to_serialized_json
    obj = { include: {
      libraryable: {
        except: %i[created_at updated_at]
      }
    }, only: %i[publisher title url name libraryable_type checkout_date return_date] }

    @library_item.to_json(obj)
  end
end
