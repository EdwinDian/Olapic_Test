# SOLUTIONS ARCHITECT: FRONT-END TEST
## Intro
Our intent of the test is to measure how you approach solving problems from both technical and business perspectives. You may find that our test is not that difficult. To put it in other words, it can be as difficult as you want. The idea behind the test is for you to present all of your knowledge about solving problems, and show how awesome of a front-end tech guru you are.
At the end of the explanation of the problem case, you'll find the conditions of the test. Pay extra attention to these as they are very important.
Process is very important to us - we don't want to you to show just couple of lines of code. We want you to explain your train of thought, how you did whatever you did, why you decided whatever you decided. You can do that either in this email thread, or in the Readme file of the repository you'll be sending.
You should have everything you need, feel free to reach out if you don't. Happy hacking!

## Problem Case
Your task is to translate the business requirement from a "hypothetical" customer of ours, and create a working version of the experience that the customer is requesting.
Here is a business requirement from the customer:
I want to create a simple front-end experience that would showcase latest photos from my Olapic account. I want the photos to be in a scrollable
carousel like so: [http://www.maurices.com/home/index.jsp]
Your goal is to create a simple front-end display of UGC pulled from Olapic API, and incorporate a carousel feature to make the content
scrollable.

## Conditions
See below for the conditions of the working example:
Create a scrollable image carousel with the following specs:
  - Left and right navigation buttons
  - 6 photos showing at a given time.
  - Make it look awesome!
  - Implement the photo objects from the Olapic API response into an image carousel
Bonus Points for incorporating an image lightbox modal. For instance, a modal would pop up when you click on a specific photo.

See the following live UX examples:
  - [http://www.maurices.com/home/index.jsp] (scroll down to the photo carousel component powered by Olapic
  - [http://shop.guess.com/en/] (at the bottom of the page)

## Olapic API Information
Our RESTful API documentation can be found here: [http://www.photorank.me/api.html].
API Key you can use for authentication is: 0a40a13fd9d531110b4d6515ef0d6c529acdb59e81194132356a1b8903790c18.
Please provide the code in a Github repository. Your file structure should look something like this, but you're not limited to it:
  - index.html - HTML for the carousel
  - script.js - JS logic for the carousel
  - style.css - CSS for the carousel
#### Hint:
AngularJS does have a steep learning curve. If you are not as familiar, then for the particular exercise you may want to use a simpler library such
as jQuery to perform an AJAX call to the web service, and then inject the content into the DOM directly.
