# Formedix JavaScript Test

We would like:
 * A single page web app built using JavaScript and AngularJS
 * No bugs
 * A good user experience
 * Clean, well written code following best practices
 * Git commits used as appropriate
 * At least one Karma and one Protractor test

We have developed a simple server for you to use. It will serve images and randomly some (or all) images will not load but will return HTTP 404 errors. This will hopefully never happen in a real world situation but it is an interesting test.

To load the images you will need to generate the path for the images from user input. There should be a form for the user to input some text and submit it.

The code should be generated using these rules:
 1. The first letter should be discarded
 2. The 2nd letter should be included in the output if it is a digit. If it is not a digit then it should be the next printable ASCII character so `B` becomes `C`.
 3. The process should then discard the 2nd letter and repeat from 1.

For example:

`ACE1`

becomes:

`D1`

Once you have generated the code, you can request the images. Using the example above, there should be 6 images available:

```
/images/D1/0.jpg
/images/D1/1.jpg
/images/D1/2.jpg
/images/D1/3.jpg
/images/D1/4.jpg
/images/D1/5.jpg
```

Your application should have two URLs. The first page should allow the user to enter a code and when submitted should take the user to the second URL.

The second page should show the 6 images. You may enhance this second page as you feel appropriate. Please take care to provide a nice user experience when there are no images available.

To use the image server you should have node installed on your machine. To install dependencies please change directory into the git repository and run

    npm install

You can run the server with

    node index.js

The server will serve public/index.html on http://localhost:3000

Protractor and Karma have both been configured already but feel free to modify the config to suit your needs.
