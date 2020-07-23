// ==UserScript==
// @name         allianceMenu
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Expansion for alliance menu.
// @author       MisteryKid/MisteryMan/AARC
// @match        https://*.missionchief.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var allianceMenu = $("#alliance_li").children();
    $('<li role="presentation" class="divider"></li><li role="presentation" class="alliance_true"><a href="/alliance_logfiles" class="lightbox-open">Alliance Logs</a></li>').appendTo(allianceMenu[1]);
})();