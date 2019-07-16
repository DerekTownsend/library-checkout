# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_07_12_134648) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "books", force: :cascade do |t|
    t.string "author"
    t.integer "volume"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "conference_proceedings", force: :cascade do |t|
    t.string "location"
    t.date "date"
    t.string "editor"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "faculties", force: :cascade do |t|
    t.integer "years_of_service"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "journals", force: :cascade do |t|
    t.integer "number"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "library_items", force: :cascade do |t|
    t.string "publisher"
    t.string "url"
    t.string "name"
    t.text "description"
    t.date "checkout_date"
    t.date "return_date"
    t.string "libraryable_type"
    t.integer "libraryable_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
    t.index ["libraryable_type", "libraryable_id"], name: "index_library_items_on_libraryable_type_and_libraryable_id"
    t.index ["user_id"], name: "index_library_items_on_user_id"
  end

  create_table "magazines", force: :cascade do |t|
    t.string "type_of_mag"
    t.date "date_of_pub"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "reservations", force: :cascade do |t|
    t.integer "user_id"
    t.integer "library_item_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["library_item_id"], name: "index_reservations_on_library_item_id"
    t.index ["user_id"], name: "index_reservations_on_user_id"
  end

  create_table "students", force: :cascade do |t|
    t.string "major"
    t.float "gpa"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "username"
    t.string "address"
    t.string "userable_type"
    t.integer "userable_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["userable_type", "userable_id"], name: "index_users_on_userable_type_and_userable_id"
  end

end
