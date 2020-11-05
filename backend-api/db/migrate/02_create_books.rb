class CreateBooks < ActiveRecord::Migration[6.0]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.string :description
      t.string :isbn
      t.integer :user_id
      t.string :comment

      t.timestamps
    end
  end
end
