# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Event.destroy_all
Comment.destroy_all
User.destroy_all

@user = User.create!(username: 'Juan', email: 'loon@email.com', password: '654321')

puts "#{User.count} users created"





# BLANK/EMPTY EVENT MODEL
# @some_event = Event.create!(date: '', event_url: '', event_name: '', venue_name: '', venue_location: '', venue_capacity: '', venue_img_url: '', venue_website: '', performer_name: '', performer_info: "", performer_img_url: '', performer_url: '',  user: @user)

@counting_crows = Event.create!(date: '10/05/2021',
 event_url: 'https://mc34.com/upcoming/#event=41766013',
  event_name: 'Live Nation Presents Counting Crows', venue_name: 'Hammerstein Ballroom', venue_location: 'NY,NY', venue_capacity: '3500', venue_image_url: 'https://34thstreet-prod.imgix.net/images/34thstreet_uploads/images/Hammerstein_Ballroom.jpg?fit=min&w=1280&h=720', venue_website: 'https://mc34.com/events-venue/', performer_name: 'Counting Crows', performer_info: "Fresh off the release of their first album in nearly seven years, BUTTER MIRACLE, SUITE ONE,  the legendary Counting Crows today announce the dates for their highly anticipated return to the road with the Butter Miracle tour. Kicking off August 7 at the Hard Rock Atlantic City, the 32-date run will be making stops at major cities across the US including headlining the BeachLife Festival in Redondo Beach, CA before ending October 5 at the Hammerstein Ballroom and the Underwater Sunshine Festival in New York City. Frank Turner, Seán Barna and Matt Sucich are set as support acts for the tour. - countingcrows.com", performer_img_url: 'https://portcitydaily.com/wp-content/uploads/2021/05/assets.aboutamazon-copy.jpg', performer_url: 'https://www.countingcrows.com/',  user: @user)

@madlib = Event.create!(date: '10/08/2021', event_url: 'https://www.elsewherebrooklyn.com/events/madlib-8th-oct-elsewhere-the-hall-new-york-tickets', event_name: 'Madlib, 16+ show', venue_name: 'Elsewhere', venue_location: 'Brooklyn,NY', venue_capacity: '675', venue_image_url: 'https://www.datocms-assets.com/46309/1619690629-rentals-module.jpg?auto=compress%2Cformat&dpr=0.75', venue_website: 'https://www.datocms-assets.com/46309/1619690629-rentals-module.jpg?auto=compress%2Cformat&dpr=0.75', performer_name: 'Madlib', performer_info: "Describing himself as \"a DJ first, producer second, and MC last,\" Madlib is the primary alias of Otis Jackson, Jr., who has become one of the most celebrated, prolific, and eclectic artists in hip-hop since emerging on the scene in the early '90s. Also known as Quasimoto, Beat Konducta, and Yesterdays New Quintet, among his dozens of handles, the unique sound and feel of Madlib's work -- created primarily without computers, using old-school recording and sampling gear -- has made him a valued collaborator with a number of leading hip-hop performers, and a widely praised figure in the underground rap community.- allmusic.com", performer_img_url: 'https://www.stonesthrow.com/app/uploads/2018/05/madlib-1.jpg', performer_url: 'https://www.stonesthrow.com/artist/madlib/',  user: @user)



# example placeholder
# @sushi = Food.create!(name: 'Sushi', user: @user, flavors: [@salty, @umami])

puts "#{Event.count} events created"

Comment.create!(comment: 'I love the last album!', user: @user, event: @madlib)

puts "#{Comment.count} comments created"
