# Coding-Quiz
## Description
The purpose of this exercise was the utilize web APIs to create a game in which a user would complete a quiz against the clock, penalizing the users time for incorrect answers, having them input their initials, storing the data locally and then pulling that data back out to display a leader board.

This code was entirely created from scratch, this exercise proved to be exceptionally challenging.

## Examples

### Upon loading the user was prompted with this:

 ![StartQuiz](./assets/images/1.png)


### Upon answering questions the user is presented with a question and set of answers:

![QuizQuestion](./assets/images/2.png)
![QuizQuestion2](./assets/images/3.png)
![QuizQuestion3](./assets/images/4.png)
![QuizQuestion4](./assets/images/5.png)
![QuizQuestion5](./assets/images/6.png)

### Initial submission, unstyled:

![Submit](./assets/images/7.png)

## Thoughts

I ran out of time trying to complete this, I spent far too much time trying to get the questions to replace themselves and change the inner html and text and such, spent a lot of time making the timer work properly as well. In the end as far as functionality goes the quiz works properly until one is prompted to enter the initials and for it to spit back the user score. The styling is unfinished as well, althought I was trying to keep it minimalistic in the first place. Below is a screenshot of where I hit a wall, my submit event was storing the initials input and high score, however it was not properly generating a sorted array to display the leaderboard even though it was storing (although rewriting) the variables it was supposed to.

![Error](./assets/images/8.png)


