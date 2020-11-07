# CleanUp
Gamifying environmental clean-up efforts by connecting others.

11/7/2020

FRONTEND TODO:
- Feed page
  * Continuously grab posts from API
  * Will be sort of like Reddit feed
- Profile page 
  * Displays profile picture
  * Allows user to edit info, send update request to API
- Pet page
  * Possibly render pet in 3-D? Low-poly style, make use of react-three-fiber.
- Map page event markers 
  * No idea how to implement this without possibly lagging the entire app Lol
- Site-wide dark mode
- Use a store (maybe from Redux) to store user info so we don't need to keep sending requests to the server. No idea how to go about this, only know either Context API or Redux is gonna be used.

BACKEND TODO:
- Person model
  * Able to store relationships with other Persons (AKA friendships)
  * Find a way to receive image upload from frontend and add to Person objects
- Event model
  * Implement countdown timer or expiration dates somehow. Some events will only last a few days.
- Pet model
- Serializers for every model
- Implement API endpoints (to be done in the urls.py folder and the views.py) so we can start sending axios requests from the frontend
                                       GET REQUESTS
  * /event/{eventID}/ will send back info about a specific event given an eventID.
  * /p/{personID}/ will send back info about a specific person given their ID.
  * /p/{personID}/pet will send back the person's pet info.
...and more! But we'll decide later.
