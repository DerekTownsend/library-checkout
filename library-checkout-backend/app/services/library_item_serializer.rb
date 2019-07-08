
class LibraryItemSerializer
  def initialize(library_item_object)
    @library_item = library_item_object
  end

  def to_serialized_json
    obj = {
      only: [:publisher, :title, :url, :name, :type]
    }
    # obj2 = {
    #   only: [:publisher, :title, :url, :name, :type, :number]
    # }
    test = @library_item.collect do |item|
      if item.type == "Jounal"
        item.to_json(obj2)
      else
        item.to_json(obj)
      end
    end

    @library_item.to_json(obj)
  end
end
