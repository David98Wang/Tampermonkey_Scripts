// ==UserScript==
// @name         Github Auto Load Diff in PR
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author       David Wang
// @match        www.reddit.com/*
// @grant        none
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// @run-at       document-end
// ==/UserScript==

(function () {
  'use strict';
  let url = window.location.href;
  let oldRedditUrl = url.replace(`www.reddit.com`, `old.reddit.com`);
  location.replace(oldRedditUrl);
})();