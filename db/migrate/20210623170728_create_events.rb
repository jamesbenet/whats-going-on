class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string :date
      t.string :event_url
      t.string :event_name
      t.string :venue_name
      t.string :venue_location
      t.string :venue_capacity
      t.string :venue_image_url
      t.string :venue_website
      t.string :performer_name
      t.string :performer_info
      t.string :performer_img_url
      t.string :performer_url
      t.references :user, null: false, foreign_key: true
      t.timestamps
    end
  end
end
