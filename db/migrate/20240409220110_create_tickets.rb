class CreateTickets < ActiveRecord::Migration[7.1]
  def change
    create_table :tickets do |t|
      t.string :subject
      t.text :description
      t.string :status
      t.string :priority
      t.integer :assignee_id
      t.integer :creator_id
      t.string :category
      t.date :due_date

      t.timestamps
    end
  end
end
