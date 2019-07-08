class CreateMagazine < ActiveRecord::Migration[5.2]
  def change
    create_table :magazines do |t|
      # t.string :brand_name
      t.string :type
      t.date :date_of_pub
      # t.references :library_item, foreign_key: true
    end
  end
end
