APPROACH
========

### DEVELOPMENT FRAMEWORKS

As the project was only to take place over five days and had relatively simple features we adopted a scaled down version of [Scrum (software development)](https://en.wikipedia.org/wiki/Scrum_(software_development)). We created a product backlog of features and the tasks associated with those features which we uploaded to a [Trello](https://trello.com/en-GB) board to manage.

For our software development approach we used [Mob programming](https://en.wikipedia.org/wiki/Mob_programming) where all four members of our team worked on the same thing, at the same time, and on the same computer. The reason for this was because single page web development was new territory for all of us, and we knew that in order to maintain a productive flow of work it would require two people constantly researching the build while a navigator and driver wrote the code. The driver would switch every fifteen minutes.

### USER STORIES

```
As a programmer
I can see a list of my notes, where each note is abbreviated to the first 20 characters
So I can find the one I want

As a programmer
I can create a new note
So I can record something I need to remember

As a programmer
I can see the full text of an individual note on its own page
So I can see all the information in the note
```

### STEP 1: MODELLING

FEATURE MODEL

Initially we produced a feature model in order to visualise the user stories and our build:

***INSERT FEATURE MODEL***

After considering the feature model we understood that the next logical step would be to build our 'create note' feature.

DOMAIN MODEL

Based on our 'create' feature we wrote a domain model to visualise the flow of data:

***INSERT 'CREATE FEATURE' DOMAIN MODEL***

### STEP 2: TESTING LIBRARY

As one of the restrictions with this project was to avoid using any already existing testing libraries we had to come up with our own. In order to do this we looked at our previously written tests and decided on four functions that we used regularly and would be useful in creating the Notes App.

We created the following tests in an `assert.js` file within our `spec` folder:
  1. `isTrue`
  2. `isEqual`
  3. `includes`
  4. `throwsError`

We also need a way to run every test we were going to write against it's relevant object. In order to do this we added a `runner.js` file to our `spec` folder which would iterate through the tests and run them again the relevant object.

#### What is a test?

A test does two things:

1. Sets some conditions up.
2. Checks that some things are true.

#### What are testing libraries for?

A testing library supplies:

1. An easy way to run lots of tests.
1. A way to organise tests.
1. A standard way to describe what a test or group of tests is doing.
1. Assertion functions that help check that specific things are true.
1. Mocking functions to help isolate the part of the code being tested.

###### We wanted to run all our tests from one file so we created a spec runner that requires all the necessaries:
- runner, the module that calls an error handler on each test
- assert, the collection of methods used to do different types of tests
- tests, each file that contains tests is sourced. When they are sourced they are run, which trigger them passing themselves to the runner

Each test file has to include this line at the bottom to send itself to the runner:
```
runner.runTests(exampleTests);
```

### STEP 3: WRITING THE TESTS

### STEP 4: WRITING THE PASSING CODE

### STEP 5: CREATING THE INTERFACE
