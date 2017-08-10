### SOLUTIONS ARCHITECT: FRONT-END TEST

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
```markdown
  - Left and right navigation buttons
  - 6 photos showing at a given time.
  - Make it look awesome!
  - Implement the photo objects from the Olapic API response into an image carousel
```
Bonus Points for incorporating an image lightbox modal. For instance, a modal would pop up when you click on a specific photo.

See the following live UX examples:
```markdown
  - [http://www.maurices.com/home/index.jsp] (scroll down to the photo carousel component powered by Olapic
  - [http://shop.guess.com/en/] (at the bottom of the page)
```
## Olapic API Information
Our RESTful API documentation can be found here: http://www.photorank.me/api.html.
API Key you can use for authentication is: 0a40a13fd9d531110b4d6515ef0d6c529acdb59e81194132356a1b8903790c18
Please provide the code in a Github repository. Your file structure should look something like this, but you're not limited to it:
index.html - HTML for the carousel
script.js - JS logic for the carousel
style.css - CSS for the carousel
Hint:
AngularJS does have a steep learning curve. If you are not as familiar, then for the particular exercise you may want to use a simpler library such
as jQuery to perform an AJAX call to the web service, and then inject the content into the DOM directly.



## Welcome to GitHub Pages

You can use the [editor on GitHub](https://github.com/EdwinDian/Olapic_Test/edit/master/README.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/EdwinDian/Olapic_Test/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.
