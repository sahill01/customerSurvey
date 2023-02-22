# customerSurvey
A frontend application to survey the customers in a shop. 
Every thing is working just fine, from asking question's to storing them on the local databse. 
Every question and answer's have a unique id and can be identified uniquely.
And then again redirecting on the welcome screen.
Bur the application is not completed yet.
It's unble to save every customer's session.
When the next customer enter's his answer's the first one's answer's are overridden by the second.

I've tried several approaches:
    1. INIT variable custID = 1; and then in the end increment by +1. (But when the program again goes to welcome the custID becomes 1)
    2. Loops.(can't be used)
    3. Assign random numbers to the custId.(Saves All customers All question's and answers. But retrieving each customer's answers will not be possible as the number's are                                                 random and unknown)
    4. Tried to count the number of times the START button was clicked. and assign it to custId.(Didn't work)
    5. Tried to initialise custId in HTML and acess it in js
