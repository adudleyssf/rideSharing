
     ,-----.,--.                  ,--. ,---.   ,--.,------.  ,------.
    '  .--./|  | ,---. ,--.,--. ,-|  || o   \  |  ||  .-.  \ |  .---'
    |  |    |  || .-. ||  ||  |' .-. |`..'  |  |  ||  |  \  :|  `--, 
    '  '--'\|  |' '-' ''  ''  '\ `-' | .'  /   |  ||  '--'  /|  `---.
     `-----'`--' `---'  `----'  `---'  `--'    `--'`-------' `------'
    ----------------------------------------------------------------- 

#  Problem to solve  

Make it easier to organize rides. Used by sports teams to help find rides for all players and coaches. Three types of users coaches( who can make games, make new teams, join, teams, and offer or take rides) players (who can take or offer rides for games, can join a new team, and look at who is on the current team), and Team Captain ( who can take or offer rides for games, can join a new team,  look at who is on the current team, and can make new games).

# Use Cases 

- A user registers to use the app on their phone as either coach or player, entering their information including email and password.  

- A user logs in to the app on their phone with their email and password, they can see any games that are made and say if they are giving or taking rides to this game  


#  Features  


- Can register  

- Can login  

- Make separate teams  

- Put game time, location and date for a game  

- Say who’s giving rides  

- Take rides from other people  

- Can run on android and iphone  



#  Models 

- Coaches  
  - First Name  
  - Last Name  
  - Phone Number 
  
  
-Teams  
  - Team Name  
  - Sport  
  - Team key  
  - games 
  
  
-Players  
  - First Name  
  - Last Name 
  - Phone Number  
  
  
-Teams On   
  - .User Id  
  - Team Id  
  - Team Key  
  - Games  
  

