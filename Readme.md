Space invaders

Intro Page
    Types out letter by letter
    “MY SPACE INVADERS”
    Play button


Page 2
    Rules
        One player
        Destroy all enemies as fast as you can
        Destroy 10 enemies, gain a life
        Destroy Golden Enemy, gain a life



User (light gray)
    Moves left and right with arrow keys at bottom of map
    Shoots bullet vertically when spacebar is pressed
    Can die if 
        Gets hit by enemy bullet
        Gets hit by enemy 
    Starts with 2 lives
    Can gain lives 
        After killing 10 enemies 
        After killing very hard enemy
    Life appears in middle of user space when triggered


Enemies
    21 total enemies
    10 easy, 7 medium, 3 hard, 1 very hard
    Easy (green)
        Worth 10 points
        Moves right slowly, hits the edge of the map, moves down slightly, moves left slowly, hits the edge of the map, moves down slightly, repeats until touches the bottom of the map
    Medium (blue)
        Worth 25 points
        Moves slightly faster than easy in the same pattern
        Shoots a bullet randomly with 10 sec being max time between shots
    Hard (red)
        Worth 50 points
        Moves slightly faster than medium from left to right at the top of map
        Shoots faster bullets than medium every 3 seconds
        Appears every 20 seconds
    Very Hard (gold)
        Worth 100 points
        Moves vertically top to bottom of map faster than hard
        Shoots bullets every 2 seconds 
        Takes two hits to kill
        When killed triggers extra life
        Reappears every 10 sec in random x axis path




Gameplay
	Pregame
        Displays title of game and play button
        Displays goal of game, controls, enemy point worth, start button
        Starts game when start button is clicked

Post-Game
    ‘Victory’ when all enemies are killed 
    ‘Game Over’ when deaths > lives
    Score is calculated:
    (Total # enemies / difficulty) x time bonus
    Time bonus = 1,000 - total playing time ( in seconds) 
        Or 
    5000 - 20 sec or less
    4000 - 30 sec or less
    3000 - 40 sec or less
    2000 - 50 sec or less
    1000 - 60 sec or less
    500 - 70 sec or less
    400 - 80 sec or less
    300 - 90 sec or less
    200 - 100 sec or less
    100 - 110 sec or less
    50 - 120 sec or less
    25 - 130 sec or less
    10 - 140 sec or less
    Displays total score
    Displays scoreboard
    Player is able to key in initials into scoreboard if applicable
    Displays final GG after scoreboard entry and done button is clicked


Design
    Black background
    White bullets
    Color coded enemies
    Light gray player
    Background flashes rainbow for 0.5 sec when player picks up extra life
