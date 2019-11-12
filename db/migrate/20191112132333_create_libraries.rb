class CreateLibraries < ActiveRecord::Migration[6.0]
  def change
    create_table :libraries do |t|
      t.string :title
      t.text :description
      t.string :cover

      t.timestamps
    end
  end
end
