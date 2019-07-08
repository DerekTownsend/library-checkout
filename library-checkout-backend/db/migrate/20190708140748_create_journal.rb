class CreateJournal < ActiveRecord::Migration[5.2]
  def change
    create_table :journals do |t|
      t.integer :number
      # t.string :title
      # t.references :library_item, foreign_key: true
    end
  end
end
