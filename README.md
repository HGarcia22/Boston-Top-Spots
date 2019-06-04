<h2>BostonTopSpots</h2>
As a team, we discovered that we all love the city of Boston. We wanted to create a site that would make new visitors fall in love with this city too. Thusly, BostonTopSpots was born - a website where users can view, create, and rate the top spots/attractions in Boston.

BostonTopSpots is a Ruby on Rails application with a React frontend. User and admin functionality is handled via Devise. Profile image uploading is accomplished using Carrierwave and AWS is used for remote storage.

[![Codeship Status for HGarcia22/Boston-Top-Spots](https://app.codeship.com/projects/f0750a00-474f-0137-cd63-3a91933c600e/status?branch=master)](https://app.codeship.com/projects/337461)

Contributors: <a href="https://github.com/Hurlyburly2">Doug Simon
</a>, <a href="https://github.com/BorisMargarian">Boris Margarian
</a>, <a href="https://github.com/kemmerle/">Allison Kemmerle
</a>, and <a href="https://github.com/HGarcia22/">Heather Garcia</a>

<h3>See the Live Version Here:</h3>
https://boston-top-spots.herokuapp.com/

<h3>Screencast:</h3>
https://youtu.be/gxqV-qnM4f4

<h3>To Run Locally:</h3>
<ul>
  <li>Download the Repo</li>
  <li>'yarn install' and 'bundle install' from your terminal</li>
  <li>create the database: 'bundle exec rake db:create', 'bundle exec rake db:migrate', 'bundle exec rake db:seed'</li>
  <li>You will need an AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY, placed in a .env file</li>
  <li>'yarn run start' and 'rails s'</li>
  <li>Navigate your browser to localhost:3000</li>
</ul>

<h3>Config:</h3>
<ul>
  <li>Ruby v2.4.5</li>
  <li>Run tests with 'bundle exec rspec' and 'yarn run test'</li>
</ul>
