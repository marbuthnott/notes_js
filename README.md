# NOTES

To run the app, from terminal:
```
open index.html
```

To run tests, from terminal:
```
open spec/specrunner.html
```

---

### Writing tests without a testing library


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
