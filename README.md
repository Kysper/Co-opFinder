# CO-OP Finder


### Instructions

Please follow the link to #
The first page will be the intro page upon clicking the button you will be introduced to a 
name input, image link input and a list of questions. The questions are based on a number system one through five. The smallest number is the least agreed and the highest is the most. After answering all of the questions. A popup will form in a sense of the best possible user of the app.
That's about all there is to use it. Thank you!

## Design
First wrote out my design and flow chart on a piece of paper.
Designed the HTML sites first with bootstrap in a fairly simple format of a jumbotron and some forms with options inside and q1-10 for id's with values corresponding to the selection of the radio button.

Installed the NPM for express and path then used it to setup the server.js then used path to setup the htmlroutes.js to aquire the html files from the localhost server. Then created the apiroutes for the get and post of information from the user.

Added the jquery to aquire the information from the questions and get the values from the options and sent them to a global variable.

Did a basic check to see if I could add user information input objects to the friends.js.

Created some variables to hold the modelhtml and made the /api/friends route a variable for easier typing.

Created an if statement to call a formIsValid and did an if for each input box that did not equal to a value to make it true and run the first if statement otherwise call the else statement

Send a get request to the friends.js route and fetched the data from the file. Used a makeMatch function to do the calculations of using Math.abs and checked the new person total minus the person total in an foreach statement to check all the people in the friends.js file.

Returns the match variable with the name and image of the smallest difference of total to yours from their JSON object and then calls post to post your information in the JSON file

Makes and If statement to check that match.name is not undefined then uses modal to display the match.name and match.image.

uses a modal to display the match.name and match.image in an 
.text method & .html method 








