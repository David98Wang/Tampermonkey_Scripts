// ==UserScript==
// @name         Github Auto Load Diff in PR
// @namespace    http://tampermonkey.net/
// @version      0.2
// @author       David Wang
// @match        github.com/*/pull/*
// @grant        none
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// @run-at       document-end
// ==/UserScript==

(function () {
  'use strict';

  $(document).ready(function () {
    $('button.load-diff-button').trigger('click');
  });
})();
