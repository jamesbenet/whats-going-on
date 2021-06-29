# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Comment.destroy_all
Event.destroy_all
User.destroy_all



@user = User.create!(username: 'Juan', email: 'loon@email.com', password: '654321')

puts "#{User.count} users created"

# BLANK/EMPTY EVENT MODEL
# @some_event = Event.create!(date: '',
#  event_url: '',
#   event_name: '',
#    venue_name: '',
#     venue_location: '',
#      venue_capacity: '',
#       venue_image_url: '',
#        venue_website: '',
#         performer_name: '',
#          performer_info: "",
#           performer_img_url: '',
#            performer_url: '',
#              user: @user)

@counting_crows = Event.create!(date: '10/05/2021',
 event_url: 'https://mc34.com/upcoming/#event=41766013',
 event_name: 'Live Nation Presents Counting Crows',
  venue_name: 'Hammerstein Ballroom',
   venue_location: 'NY,NY',
    venue_capacity: '3500',
    venue_image_url: 'https://34thstreet-prod.imgix.net/images/34thstreet_uploads/images/Hammerstein_Ballroom.jpg?fit=min&w=1280&h=720',
      venue_website: 'https://mc34.com/events-venue/',
       performer_name: 'Counting Crows',
        performer_info: "Fresh off the release of their first album in nearly seven years, BUTTER MIRACLE, SUITE ONE,  the legendary Counting Crows today announce the dates for their highly anticipated return to the road with the Butter Miracle tour. Kicking off August 7 at the Hard Rock Atlantic City, the 32-date run will be making stops at major cities across the US including headlining the BeachLife Festival in Redondo Beach, CA before ending October 5 at the Hammerstein Ballroom and the Underwater Sunshine Festival in New York City. Frank Turner, Seán Barna and Matt Sucich are set as support acts for the tour. - countingcrows.com",
         performer_img_url: 'https://portcitydaily.com/wp-content/uploads/2021/05/assets.aboutamazon-copy.jpg',
          performer_url: 'https://www.countingcrows.com/',
            user: @user)

@digable_planets_811 = Event.create!(date: '08/11/2021',
 event_url: 'http://www.bluenotejazz.com/newyork/schedule/moreinfo.cgi?id=19166',
  event_name: 'Sony Presents Blue Note Jazz Festival: Digable Planets',
   venue_name: 'Blue Note Jazz Club',
    venue_location: 'NY, NY',
     venue_capacity: '250',
     venue_image_url: 'https://img.bizbash.com/files/base/bizbash/bzb/image/2015/03/o60a0384.png?ar=16%3A9&auto=format&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&w=1140',
       venue_website: 'http://www.bluenotejazz.com/',
        performer_name: 'Digbable Panets',
         performer_info: "Digable Planets burst onto the music scene in 1993 with their Grammy-winning single, “Rebirth Of Slick (Cool Like Dat)”. Made up of Ishmael Butler (Butterfly), Craig (C Know/ Doodlebug) Irving, and Mary Ann (Ladybug Mecca) Vieira, the trio carved out a unique style of jazz-informed Hip Hop. -bluenotejazz.com",
          performer_img_url: 'https://www.officialdigableplanets.com/uploads/1/3/2/9/132908672/published/dpnew.jpg?1609205203',
           performer_url: 'https://www.officialdigableplanets.com/',
             user: @user)

@digable_planets_812 = @some_event = Event.create!(date: '08/12/2021',
 event_url: 'http://www.bluenotejazz.com/newyork/schedule/moreinfo.cgi?id=19168',
  event_name: 'Sony Presents Blue Note Jazz Festival: Digable Planets',
   venue_name: 'Blue Note Jazz Club',
    venue_location: 'NY, NY',
     venue_capacity: '250',
     venue_image_url: 'https://img.bizbash.com/files/base/bizbash/bzb/image/2015/03/o60a0384.png?ar=16%3A9&auto=format&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&w=1140',
       venue_website: 'http://www.bluenotejazz.com/',
        performer_name: 'Digbable Panets',
         performer_info: "Digable Planets burst onto the music scene in 1993 with their Grammy-winning single, “Rebirth Of Slick (Cool Like Dat)”. Made up of Ishmael Butler (Butterfly), Craig (C Know/ Doodlebug) Irving, and Mary Ann (Ladybug Mecca) Vieira, the trio carved out a unique style of jazz-informed Hip Hop. -bluenotejazz.com",
          performer_img_url: 'https://www.officialdigableplanets.com/uploads/1/3/2/9/132908672/published/dpnew.jpg?1609205203',
           performer_url: 'https://www.officialdigableplanets.com/',
             user: @user)

@madlib = Event.create!(date: '10/08/2021',
 event_url: 'https://www.elsewherebrooklyn.com/events/madlib-8th-oct-elsewhere-the-hall-new-york-tickets',
  event_name: 'Madlib, 16+ show',
   venue_name: 'Elsewhere',
    venue_location: 'Brooklyn,NY',
     venue_capacity: '675',
      venue_image_url: 'https://www.datocms-assets.com/46309/1619690629-rentals-module.jpg?auto=compress%2Cformat&dpr=0.75',
       venue_website: 'https://www.datocms-assets.com/46309/1619690629-rentals-module.jpg?auto=compress%2Cformat&dpr=0.75',
        performer_name: 'Madlib',
         performer_info: "Describing himself as \"a DJ first, producer second, and MC last,\" Madlib is the primary alias of Otis Jackson, Jr., who has become one of the most celebrated, prolific, and eclectic artists in hip-hop since emerging on the scene in the early '90s. Also known as Quasimoto, Beat Konducta, and Yesterdays New Quintet, among his dozens of handles, the unique sound and feel of Madlib's work -- created primarily without computers, using old-school recording and sampling gear -- has made him a valued collaborator with a number of leading hip-hop performers, and a widely praised figure in the underground rap community.- allmusic.com",
          performer_img_url: 'https://www.stonesthrow.com/app/uploads/2018/05/madlib-1.jpg',
           performer_url: 'https://www.stonesthrow.com/artist/madlib/',
            user: @user)

@modest_mouse = Event.create!(date: '08/09/2021',
 event_url: 'https://collegestreetmusichall.com/e/modest-mouse-155996982173/',
  event_name: 'Premier Concerts and Manic Presents: Modest Mouse',
   venue_name: 'College Street Music Hall',
    venue_location: 'New Haven, CT',
     venue_capacity: '2000',
     venue_image_url: 'https://www.infonewhaven.com/cms/wp-content/uploads/2017/12/college-street-music-hall.jpg',
       venue_website: 'https://collegestreetmusichall.com/',
        performer_name: 'Modest Mouse',
         performer_info: "Capable of punkish rawness, simmering atmosphere, and light-hearted pop, Modest Mouse shaped the sound of late-'90s indie rock and enjoyed mainstream success in the years that followed. -allmusic.com",
          performer_img_url: 'https://www.nme.com/wp-content/uploads/2021/06/Modest-Mouse-by-James-Joiner-696x442.jpg',
           performer_url: 'https://www.modestmouse.com/',
             user: @user)

@primus = Event.create!(date: '09/24/2021',
 event_url: 'https://www.oakdale.com/EventDetail?tmeventid=G5vVZp78d7Vk4&offerid=0',
  event_name: 'Primus: A Tribute to Kings',
   venue_name: 'Toyota Oakdale Theater',
    venue_location: 'Wallingford, CT',
     venue_capacity: '5000',
     venue_image_url: 'https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/ccsb/oakdale-main-theater-2--f21b69b05056a36_f21b6afb-5056-a36a-065db67b4e913b76.jpg',
       venue_website: 'https://www.oakdale.com/',
        performer_name: 'Primus',
         performer_info: "Finally, the clouds are parting, the planets are aligning, the dough is rising…whatever metaphor floats your preverbal boat, PRIMUS is going on tour again. We were poised and ready for a massive, bent-rock extravaganza when the gremlins of covid came and yanked the rug out from under us all. I personally have been climbing the walls like a shit-house rat and, after my first season off in 30 some odd years, I’m very anxious and excited to stand in front of the microphone with my four string piece of furniture and belt out some girthy ditties to sweaty throngs of punters. - Les Claypool, Primusville",
          performer_img_url: 'http://primusville.com/images/news/news_desat_seven.jpg',
           performer_url: 'http://primusville.com/',
             user: @user)

# example placeholder
# @sushi = Food.create!(name: 'Sushi', user: @user, flavors: [@salty, @umami])

puts "#{Event.count} events created"

Comment.create!(comment: 'I love the last album!', user: @user, event: @madlib)
Comment.create!(comment: 'Have not seen these guys since high school', user: @user, event: @counting_crows)

puts "#{Comment.count} comments created"
