'use strict';
/*
//070 PROJECT #1_ Guess My Number!
console.log(document.querySelector('.message').textContent);*/

/*
//071 What's the DOM and DOM Manipulation
//DOM Methods and properties for DOM manipulation NOT PART OF JS
// if the DOM is not a part of the javaScript language ,then how does this all work?
//the DOM an the DOM methods are actually part of something called the web APIs.
// Web APIs: are like libraries that browser implement  and that we can access from our JavaScript code.
//API stands for Application Programming Interface.
//Web APIs are basically libraries that are also written in javaScript and that are ,automatically available for us to use.
*/
/*
//072 Selecting and Manipulating Elements
// document.querySelector('.message').textContent = 'Correct Number! 🎉🎉';
//
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 25;
//to get the actual value we need to use value property
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 15;
// console.log(document.querySelector('.guess').value); to see new value assigned
*/

//073 Handling Click Events
// Event: is Something that happens on the page.
//6:24
document.querySelector('.check').addEventListener('click', function () {
    //first argument is the name of the event that we are listening for
    //second argument we have function value
    console.log(document.querySelector('.guess').value)
    document.querySelector('.message').textContent = 'Correct Number! 🎉🎉';
})