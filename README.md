# pomodoro_timer
A simple pomodoro timer built using html, css and js. 


- JavaScript code explanation :

- Line 1 - Line 5 : 
- Grabbing the HTML elements to work with it

- Line 7 - Line 9 : 
- (timer) : this will hold countdown interval
- (timeLeft) : total time remaining which is 25 x 60
- (isRunning) : a flag to prevent the timer from starting again while running

- Line 12 - Line 19
- Updating the timer display
- (timeLeft) calculates minutes and seconds 
- (.padStart(2, '0')) to show 2 digits in proper form like 01 instead of 1
- ((minuteDisplay) and (secondsDisplay)) updates text on the screen

- Line 22 - Line 36
- Starting the timer 
- (isRunning) to check if the timer is already running
- if the timer doesn't run, it starts a countdown using (setInterval()) which runs a function every second
- Inside the function : (timeLeft--) reduces time by 1 second if there is still time
- if time runs out, (clearInterval()) stops the interval and shows an alert

- Line 39 - Line 42
- This function is stop the timer without resetting

- Line 45 - Line 50
- This function stops the timer and resets everything back to 25 minutes and it also refreshes the display

- Line 53 - Line 55
- This lines command js what to do when each button clicked.
- (start Timer()), start
- (pauseTimer()), pause
- (resetTimer()), reset

- Line 58
- This sets the screen to show the default timer when the page first loads

- Note : I will be working more, to add on features so I can get more knowledge about JavaScript
