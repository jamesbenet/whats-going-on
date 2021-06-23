#  <!-- omit in toc -->

> What's Up? 
>

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## What's Up?

_**What's Up?** is an event manager and social app that allows users to view and search for events and allows authenticated users to create and comment on upcoming events.


<br>

## MVP

-Build and consume a Restful JSON API using Ruby on Rails
-Implement working generic controller actions for Full CRUD (index, show, create, read, update, delete) between (non-user) tables.
-Build a working, interactive front-end React app using React Router for routing
-Style appropriately with CSS, including responsive design/media queries for smaller screens and accessibility

<br>

### Goals

- _Meet MVP targets_
- _Particular focus on responsive design and accessibility_
- _Minimalist design for a user friendly experience_

<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Front end deployment._ |
|   React Router   | _Routing._ |
|   Axios   | _API calls._ |
|     Ruby on Rails      | _Back end deployment._ |


<br>

### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views. No hand-drawn wireframes. Use a tool like wireframe.cc, Whimsical or AdobeXD

[Figma](https://www.figma.com/file/nkVIX5ZNd9jrUPtFDNlrDg/Untitled?node-id=0%3A1)


#### Component Tree


[Whimsical](https://whimsical.com/wusup-XkFNhN6UpfzABxg6mypXE6)

#### Component Architecture

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ screens/
      |__ Home
      |__ SignIn
      |__ SignUp
      |__ Events
      |__ EventsDetail
      |__ EventsCreate
      |__ EventsEdit
      |__ SearchResults
      |__ EventsCreate
      |__ EventsEdit
|__ components/
      |__ Header.jsx
      |__ Footer.jsx
      |__ EventCard.jsx
|__ services/
      |__ api-config.js
      |__ auth.js
      |__ events.js
      |__ user-comments.js


```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Models    |    H     |     2 hrs      |     
| Controllers |    H     |     2 hrs      |    
| Migrations    |    H     |     2 hrs      |    
| Routes |    H     |     3 hrs      |       
| Components   |    H     |     3 hrs      |     
| Screens |    H     |     7 hrs      |    
| Forms    |    H     |     3 hrs      |     
| API calls |    H     |     4 hrs      |    
| Routes    |    H     |     3 hrs      |     
| CSS |    H     |     8 hrs      |     1 hrs   
| TOTAL               |   40 hrs       |     6 hrs      |     3 hrs     |     TBD     |


<br>

### Server (Back End)

#### ERD Model



[draw.io](https://app.diagrams.net/#G1cZ_Zt2Te1i5-jyIMVxii93_e-_MyDSlG)
<br>

***

## Post-MVP

-add some more features/functionality, such as showing User initial in top right (like Google)
  -more complexes searches
  -allow comments on comments
  -allow likes on comments
-use an external API for more robust search results and performer information (song/video links)



***

## Code Showcase



## Code Issues & Resolutions


