// ==UserScript==
// @name         Github Automatic Load Diff
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author       David Wang
// @match        github.com/*/pull/*
// @grant        none
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// @run-at       document-end
// ==/UserScript==

(function () {
  'use strict';
  console.log('abcd');
  $(document).ready(function () {
    $('button.load-diff-button').trigger('click');
  });
})();