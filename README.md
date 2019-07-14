Notes App
=========

*Co-authored by: Ollie Brownlow, Laurence Taylor, Nicholas Barnes, and Magnus Arbuthnott*

*Read this for our development process ==>* ***APPROACH.md***

## INTRODUCTION

The aim of this project was to write a frontend, single page app using only pure JavaScript.

The requirement was to build a small notebook where a user can create a note; view it in a notes list where the note is hyperlinked and the link text is the first twenty characters of the note; and a separate view when a user clicks on a note hyperlink to view the full note. In addition to the requirements we were able to link our app to link our app to an API via Ajax.

The restrictions to this project were to only use pure JavaScript, we were not allowed to use any existing web frameworks, libraries or even a test library. We followed no handrails or walkthroughs, everything that has been built over the course of this project stems from group research.

The project is provided by Makers Academy. It is the seventh weekday challenge and provides our learning base for building frontend, single page apps.

## USER STORIES

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

## TECH/FRAMEWORK USED

**Primary programming language:** *JavaScript*

**Other programming languages:** *HTML* is used to render the view in the browser.

**Testing framework:** Built our own testing framework using vanilla *JavaScript*

**API:** In order to link the API we have used *Ajax*. Ajax is a set of web development techniques using many web technologies on the client side to create asynchronous web applications, allowing web applications to send an retrieve data from a server without interfering with the display and behavior of the existing page.

## GETTING STARTED

* Fork/clone this project to your terminal using `git clone` followed by the project's url.
* In the terminal navigate to the project's root directory using `cd notes_app`.
* Open the project in you browser by executing `open index.html` in your terminal.

## HOW TO USE THE APP

1. Enter a note that you would like to log in the text area.

2. Click the 'CREATE' button to save the note.

3. When you click you'll see a hyperlink with the first twenty characters of the note appear below the 'CREATE' button. Hyperlinks to any further notes that you create will also appear here.

4. If you wish to view the note you've just created, click on the note and it will take you to a separate view where you can view the full note. There is a 'BACK' button to take you back to the homepage.

## RUNNING TESTS

To run tests from the terminal:

`open spec/specrunner.html`

## SURGE.SH

To use the app, navigate to http://goslings-noteapp.surge.sh/ in your favourite browser.
