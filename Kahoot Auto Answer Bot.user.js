// ==UserScript==
// @name         Kahoot Auto Answer Bot
// @description  A script that automatically answers Kahoot questions correctly.
// @version      1.0
// @author       Midnight
// @namespace    https://google.com
// @match        https://kahoot.it/*
// @run-at       document-start
// @grant        none
// @license      MIT
// @downloadURL https://update.greasyfork.org/scripts/476563/Kahoot%20Auto%20Answer%20Bot.user.js
// @updateURL https://update.greasyfork.org/scripts/476563/Kahoot%20Auto%20Answer%20Bot.meta.js
// ==/UserScript==
 
(function() {
  "use strict";
 
  // Get the question element.
  const questionElement = document.querySelector(".kahoot-question");
 
  // Get the answer options.
  const answerOptions = questionElement.querySelectorAll(".kahoot-answer-option");
 
  // Get the correct answer.
  const correctAnswer = answerOptions[questionElement.dataset.correctAnswerIndex];
 
  // Select the correct answer.
  correctAnswer.click();
})();