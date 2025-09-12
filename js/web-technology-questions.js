// Web Technology MCQ Questions
const webTechnologyQuestions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Tech Modern Language",
            "Hyperlink and Text Markup Language",
            "Home Tool Markup Language"
        ],
        answer: 0,
        explanation: "HTML stands for Hyper Text Markup Language, which is the standard markup language for creating web pages."
    },
    {
        question: "Which of the following is used to style web pages?",
        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        answer: 1,
        explanation: "CSS (Cascading Style Sheets) is used to style and layout web pages."
    },
    {
        question: "What is the correct HTML element for the largest heading?",
        options: [
            "<heading>",
            "<h6>",
            "<head>",
            "<h1>"
        ],
        answer: 3,
        explanation: "The <h1> element is used for the main heading and is the largest heading in HTML."
    },
    {
        question: "Which property is used to change the text color in CSS?",
        options: [
            "text-color",
            "font-color",
            "color",
            "text-style"
        ],
        answer: 2,
        explanation: "The 'color' property is used to set the color of text in CSS."
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        options: [
            "class",
            "styles",
            "style",
            "font"
        ],
        answer: 2,
        explanation: "The 'style' attribute is used to add inline CSS styles directly to HTML elements."
    },
    {
        question: "What is the correct HTML for creating a hyperlink?",
        options: [
            "<a url='http://example.com'>Link</a>",
            "<a href='http://example.com'>Link</a>",
            "<link>http://example.com</link>",
            "<a>http://example.com</a>"
        ],
        answer: 1,
        explanation: "The correct HTML for a hyperlink uses the <a> tag with the 'href' attribute."
    },
    {
        question: "Which CSS property is used to change the font of an element?",
        options: [
            "font-family",
            "text-font",
            "font-style",
            "font-type"
        ],
        answer: 0,
        explanation: "The 'font-family' property is used to specify the font for an element."
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        options: [
            "<break>",
            "<lb>",
            "<br>",
            "<newline>"
        ],
        answer: 2,
        explanation: "The <br> tag is used to insert a single line break in HTML."
    },
    {
        question: "Which HTML element is used to define the title of a document?",
        options: [
            "<meta>",
            "<head>",
            "<title>",
            "<header>"
        ],
        answer: 2,
        explanation: "The <title> element defines the title of the document shown in the browser's title bar or tab."
    },
    {
        question: "What does CSS stand for?",
        options: [
            "Creative Style Sheets",
            "Cascading Style Sheets",
            "Computer Style Sheets",
            "Colorful Style Sheets"
        ],
        answer: 1,
        explanation: "CSS stands for Cascading Style Sheets, which describes how HTML elements are to be displayed."
    },
    // Additional questions start here
    {
        question: "Which HTML element is used to define an unordered list?",
        options: ["<ol>", "<list>", "<ul>", "<li>"],
        answer: 2,
        explanation: "The <ul> tag defines an unordered (bulleted) list."
    },
    {
        question: "Which property is used to change the background color in CSS?",
        options: ["bgcolor", "color-background", "background-color", "bg-color"],
        answer: 2,
        explanation: "The 'background-color' property sets the background color of an element."
    },
    {
        question: "What is the correct HTML for creating a checkbox?",
        options: [
            "<checkbox>",
            "<input type='check'>",
            "<input type='checkbox'>",
            "<check>"
        ],
        answer: 2,
        explanation: "The correct HTML for a checkbox is <input type='checkbox'>."
    },
    {
        question: "Which CSS property controls the text size?",
        options: ["text-size", "font-size", "text-style", "font-style"],
        answer: 1,
        explanation: "The 'font-size' property sets the size of the text."
    },
    {
        question: "What is the correct HTML for inserting an image?",
        options: [
            "<img href='image.jpg' alt='MyImage'>",
            "<image src='image.jpg' alt='MyImage'>",
            "<img src='image.jpg' alt='MyImage'>",
            "<img src='image.jpg' alt='MyImage'/>"
        ],
        answer: 2,
        explanation: "The correct HTML is <img src='image.jpg' alt='MyImage'>. The self-closing tag is optional in HTML5."
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        options: ["style", "class", "font", "styles"],
        answer: 0,
        explanation: "The 'style' attribute is used to add inline styles to HTML elements."
    },
    {
        question: "Which HTML element defines the title of a document?",
        options: ["<meta>", "<head>", "<title>", "<header>"],
        answer: 2,
        explanation: "The <title> element defines the title of the document, shown in the browser's title bar or tab."
    },
    {
        question: "What is the correct HTML for making a text input field?",
        options: [
            "<input type='textfield'>",
            "<textinput>",
            "<input type='text'>",
            "<textfield>"
        ],
        answer: 2,
        explanation: "<input type='text'> is the correct HTML for a single-line text input field."
    },
    {
        question: "Which CSS property is used to change the font of an element?",
        options: ["font-family", "font-style", "text-font", "font"],
        answer: 0,
        explanation: "The 'font-family' property specifies the font for an element."
    },
    {
        question: "What is the correct HTML for making a drop-down list?",
        options: [
            "<input type='dropdown'>",
            "<select>",
            "<list>",
            "<input type='list'>"
        ],
        answer: 1,
        explanation: "The <select> element is used to create a drop-down list."
    },
    {
        question: "Which CSS property is used to change the left margin of an element?",
        options: ["margin-left", "padding-left", "indent", "text-indent"],
        answer: 0,
        explanation: "The 'margin-left' property sets the left margin of an element."
    },
    {
        question: "What is the correct HTML for making a text area?",
        options: [
            "<input type='textarea'>",
            "<input type='textbox'>",
            "<textarea>",
            "<textbox>"
        ],
        answer: 2,
        explanation: "The <textarea> element defines a multi-line text input control."
    },
    {
        question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        options: ["title", "src", "alt", "longdesc"],
        answer: 2,
        explanation: "The 'alt' attribute provides alternative information for an image if it cannot be displayed."
    },
    {
        question: "Which doctype is correct for HTML5?",
        options: [
            "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 5.0//EN\" \"http://www.w3.org/TR/html5/strict.dtd\">",
            "<!DOCTYPE html>",
            "<!DOCTYPE HTML5>",
            "<HTML5>"
        ],
        answer: 1,
        explanation: "<!DOCTYPE html> is the correct declaration for HTML5."
    },
    {
        question: "Which HTML element is used to specify a header for a document or section?",
        options: ["<head>", "<header>", "<heading>", "<h1>"],
        answer: 1,
        explanation: "The <header> element represents a container for introductory content or a set of navigational links."
    },
    {
        question: "What is the correct HTML element for playing video files?",
        options: ["<media>", "<video>", "<movie>", "<play>"],
        answer: 1,
        explanation: "The <video> element is used to embed video content in a document."
    },
    {
        question: "What is the correct HTML for making a checkbox that is checked by default?",
        options: [
            "<checkbox checked>",
            "<input type='checkbox' default='true'>",
            "<input type='checkbox' checked>",
            "<input type='checkbox' checked='checked'>"
        ],
        answer: 2,
        explanation: "<input type='checkbox' checked> is the correct HTML for a checked checkbox."
    },
    {
        question: "Which HTML element is used to specify a footer for a document or section?",
        options: ["<bottom>", "<footer>", "<section>", "<div class='footer'>"],
        answer: 1,
        explanation: "The <footer> element specifies a footer for a document or section."
    },
    {
        question: "Which HTML element is used to display a scalar measurement within a known range?",
        options: ["<range>", "<gauge>", "<measure>", "<meter>"],
        answer: 3,
        explanation: "The <meter> element defines a scalar measurement within a known range."
    },
    {
        question: "Which HTML element is used to specify a header for a document or section?",
        options: ["<section>", "<head>", "<header>", "<top>"],
        answer: 2,
        explanation: "The <header> element represents a container for introductory content."
    },
    {
        question: "What is the correct HTML element for playing audio files?",
        options: ["<sound>", "<audio>", "<mp3>", "<media>"],
        answer: 1,
        explanation: "The <audio> element is used to embed sound content in documents."
    },
    {
        question: "Which HTML element is used to specify a header for a document or section?",
        options: ["<head>", "<header>", "<heading>", "<h1>"],
        answer: 1,
        explanation: "The <header> element represents a container for introductory content."
    },
    {
        question: "What is the correct HTML for creating a hyperlink?",
        options: [
            "<a>http://www.w3schools.com</a>",
            "<a name='http://www.w3schools.com'>W3Schools.com</a>",
            "<a url='http://www.w3schools.com'>W3Schools.com</a>",
            "<a href='http://www.w3schools.com'>W3Schools</a>"
        ],
        answer: 3,
        explanation: "The correct HTML for creating a hyperlink is <a href='url'>link text</a>."
    },
    {
        question: "Which HTML element defines the most important heading?",
        options: ["<h1>", "<head>", "<heading>", "<h6>"],
        answer: 0,
        explanation: "<h1> defines the most important heading (largest)."
    },
    {
        question: "What is the correct HTML for adding a background color?",
        options: [
            "<body bg='yellow'>",
            "<background>yellow</background>",
            "<body style='background-color:yellow;'>",
            "<body bgcolor='yellow'>"
        ],
        answer: 2,
        explanation: "The correct way to add a background color is using the style attribute: <body style='background-color:yellow;'>"
    },
    {
        question: "Which HTML attribute is used to define the language of the web page?",
        options: ["lang", "language", "xml:lang", "doclang"],
        answer: 0,
        explanation: "The 'lang' attribute specifies the language of the element's content."
    },
    {
        question: "What is the correct HTML element for the largest heading?",
        options: ["<h1>", "<heading>", "<h6>", "<head>"],
        answer: 0,
        explanation: "<h1> is the largest heading element."
    },
    {
        question: "What is the correct HTML for inserting a background image?",
        options: [
            "<body style='background-image:url(background.gif)'>",
            "<background img='background.gif'>",
            "<body bg='background.gif'>",
            "<img src='background.gif' background>"
        ],
        answer: 0,
        explanation: "The correct way to add a background image is using the style attribute: <body style='background-image:url(background.gif)'>"
    },
    {
        question: "Which HTML element defines the title of a document?",
        options: ["<meta>", "<head>", "<title>", "<header>"],
        answer: 2,
        explanation: "The <title> element defines the title of the document, shown in the browser's title bar or tab."
    },
    {
        question: "Which HTML attribute specifies an alternate text for an image?",
        options: ["src", "alt", "title", "longdesc"],
        answer: 1,
        explanation: "The 'alt' attribute provides alternative information for an image."
    },
    {
        question: "What is the correct HTML for creating a hyperlink to W3Schools?",
        options: [
            "<a>http://www.w3schools.com</a>",
            "<a name='http://www.w3schools.com'>W3Schools.com</a>",
            "<a url='http://www.w3schools.com'>W3Schools.com</a>",
            "<a href='http://www.w3schools.com'>W3Schools</a>"
        ],
        answer: 3,
        explanation: "The correct HTML for creating a hyperlink is <a href='url'>link text</a>."
    },
    {
        question: "Which HTML element is used to specify a header for a document or section?",
        options: ["<header>", "<head>", "<section>", "<h1>"],
        answer: 0,
        explanation: "The <header> element represents a container for introductory content."
    },
    {
        question: "What is the correct HTML for making a drop-down list?",
        options: [
            "<input type='dropdown'>",
            "<select>",
            "<list>",
            "<input type='list'>"
        ],
        answer: 1,
        explanation: "The <select> element is used to create a drop-down list."
    },
    {
        question: "What is the correct HTML for making a text area?",
        options: [
            "<input type='textarea'>",
            "<input type='textbox'>",
            "<textarea>",
            "<textbox>"
        ],
        answer: 2,
        explanation: "The <textarea> element defines a multi-line text input control."
    },
    {
        question: "What is the correct HTML for inserting an image?",
        options: [
            "<img href='image.jpg' alt='MyImage'>",
            "<image src='image.jpg' alt='MyImage'>",
            "<img src='image.jpg' alt='MyImage'>",
            "<img src='image.jpg' alt='MyImage'/>"
        ],
        answer: 2,
        explanation: "The correct HTML is <img src='image.jpg' alt='MyImage'>. The self-closing tag is optional in HTML5."
    },
    {
        question: "What is the correct HTML for creating a hyperlink?",
        options: [
            "<a>http://www.w3schools.com</a>",
            "<a name='http://www.w3schools.com'>W3Schools.com</a>",
            "<a url='http://www.w3schools.com'>W3Schools.com</a>",
            "<a href='http://www.w3schools.com'>W3Schools</a>"
        ],
        answer: 3,
        explanation: "The correct HTML for creating a hyperlink is <a href='url'>link text</a>."
    },
    {
        question: "Which HTML element defines the most important heading?",
        options: ["<h1>", "<head>", "<heading>", "<h6>"],
        answer: 0,
        explanation: "<h1> defines the most important heading (largest)."
    },
    {
        question: "What is the correct HTML for adding a background color?",
        options: [
            "<body bg='yellow'>",
            "<background>yellow</background>",
            "<body style='background-color:yellow;'>",
            "<body bgcolor='yellow'>"
        ],
        answer: 2,
        explanation: "The correct way to add a background color is using the style attribute: <body style='background-color:yellow;'>"
    },
    {
        question: "Which HTML attribute is used to define the language of the web page?",
        options: ["lang", "language", "xml:lang", "doclang"],
        answer: 0,
        explanation: "The 'lang' attribute specifies the language of the element's content."
    },
    {
        question: "What is the correct HTML element for the largest heading?",
        options: ["<h1>", "<heading>", "<h6>", "<head>"],
        answer: 0,
        explanation: "<h1> is the largest heading element."
    },
    {
        question: "What is the correct HTML for inserting a background image?",
        options: [
            "<body style='background-image:url(background.gif)'>",
            "<background img='background.gif'>",
            "<body bg='background.gif'>",
            "<img src='background.gif' background>"
        ],
        answer: 0,
        explanation: "The correct way to add a background image is using the style attribute: <body style='background-image:url(background.gif)'>"
    },
    {
        question: "Which HTML element defines the title of a document?",
        options: ["<meta>", "<head>", "<title>", "<header>"],
        answer: 2,
        explanation: "The <title> element defines the title of the document, shown in the browser's title bar or tab."
    },
    {
        question: "Which HTML attribute specifies an alternate text for an image?",
        options: ["src", "alt", "title", "longdesc"],
        answer: 1,
        explanation: "The 'alt' attribute provides alternative information for an image."
    }
];
