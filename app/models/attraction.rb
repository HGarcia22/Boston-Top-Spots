class Attraction < ApplicationRecord
  validates :name, presence: true
  validates :description, presence: true
  validates :address, presence: true
  validates :city, presence: true
  validates :state, presence: true
  validates :zip, presence: true

  has_many :reviews, dependent: :destroy
  belongs_to :user
end
