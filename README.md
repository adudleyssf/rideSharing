
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


-Can register
-Can login
-Make separate teams
-Put game time, location, date
-Say who’s giving rides
-Take rides from other people
-Can run on android and iphone



#  Models 

*Coaches 
    1.First Name
    2.Last Name
    3.Phone Number

*Teams 
    1.Team Name
    2.Sport
    3.Team key
    4.games

*Players
    1.First Name
    2.Last Name
    3.Phone Number

*Teams On 
    1.User Id
    2.Team Id
    3.Team Key
    4.Games


