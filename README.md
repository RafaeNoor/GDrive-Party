# GDrive Party

*'GDrive-Party'* is a mini pet project I made to synchronously watch videos hosted on google drive with my friends. It can work on many more different types of videos too, such as YouTube. It's similar to Netflix Party, except that only the `Host` can control play back for everyone. It includes an inline-chat as well. 

## Using GDrive-Party
I made this in the span of a day, so it's most likely very buggy and not good to look at. A `Host` would enter their Display Name and the link to the video they want to watch. This creates a lobby and a `room_id` would be displayed. Other users can enter their Display Names and use that `room_id` to join. Only the `Host` can control playback.

## Build
The project leverages various  NodeJS depedencies. 

    npm install .
   
## Running GDrive-Party
In the root of this directory run

    yarn start


  
A deployed version can be found on:
https://gdrive-party.web.app
