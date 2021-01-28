// ==UserScript==
// @name         Majsoul Korean (EN Server)
// @namespace    majsoul-plus-korean
// @version      0.1.6
// @description  Apply majsoul-plus-korean using UserScript!
// @author       YF-Dev
// @license      MIT
// @icon         https://file.update.sh/mpk/korean/preview.png
// @supportURL   https://github.com/yf-dev/majsoul-korean-resources/issues
// @homepageURL  https://github.com/yf-dev/majsoul-korean-resources/
// @downloadURL  https://raw.githubusercontent.com/yf-dev/majsoul-korean-resources/main/majsoul-plus-korean.user.js
// @updateURL    https://raw.githubusercontent.com/yf-dev/majsoul-korean-resources/main/majsoul-plus-korean.user.js
// @include      https://mahjongsoul.game.yo-star.com/*
// @grant        unsafeWindow
// @grant        GM_getResourceText
// @run-at       document-start
// @resource     resourcepack https://raw.githubusercontent.com/yf-dev/majsoul-korean-resources/main/resources/korean/resourcepack.json
// ==/UserScript==

(function () {
    'use strict';
    const GAME_BASE_URL = 'https://mahjongsoul.game.yo-star.com/';
    const MAJSOUL_PLUS_BASE_URL = 'https://localhost:8887/';
    const RES_BASE_URL = 'https://raw.githubusercontent.com/yf-dev/majsoul-korean-resources/main/resources/korean/';
    const RESOURCEPACK_URL = 'https://raw.githubusercontent.com/yf-dev/majsoul-korean-resources/main/resources/korean/resourcepack.json';
    const version_re = /v\d+\.\d+\.\d+\.w\//i;

    let resourcepack = null;

    replaceCodeScript();

    if ('function' === typeof GM_getResourceText) {
        resourcepack = JSON.parse(GM_getResourceText('resourcepack'));
    } else {
        var resourcepack_xhr = new XMLHttpRequest();
        resourcepack_xhr.open("GET", RESOURCEPACK_URL, false);
        resourcepack_xhr.send();
        resourcepack = JSON.parse(resourcepack_xhr.response);
    }

    replaceXhrOpen();

    function replaceCodeScript() {
        console.log(window.Laya);
        if (window.Laya !== undefined && window.Laya.Loader !== undefined && window.Laya.Loader.prototype !== undefined) {
            replaceLayaLoadImage();
            replaceLayaLoadSound();
            replaceLayaLoadTtf();
            return;
        }
        let observer = null;
        observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                const scripts = document.getElementsByTagName('script');
                for (let i = 0; i < scripts.length; i++) {
                    const script = scripts[i];
                    if (script.src && script.src.indexOf('code.js') !== -1) {
                        script.onload = function () {
                            replaceLayaLoadImage();
                            replaceLayaLoadSound();
                            replaceLayaLoadTtf();
                        };
                        observer.disconnect();
                    }
                }
            });
        });
        const config = {
            childList: true,
            subtree: true
        };
        observer.observe(document, config);
    }

    function updateUrl(url) {
        const original_url = url;
        // console.log('original url: ' + url);
        if (url.startsWith(GAME_BASE_URL)) {
            url = url.substring(GAME_BASE_URL.length);
        }
        if (url.startsWith(MAJSOUL_PLUS_BASE_URL)) {
            url = url.substring(MAJSOUL_PLUS_BASE_URL.length);
        }
        url = url.replace(version_re, '');
        if (resourcepack.replace.includes(url)) {
            url = RES_BASE_URL + 'assets/' + url;
            console.log(' updated url: ' + url);
            return url;
        } else {
            return original_url;
        }
    }

    function replaceXhrOpen() {
        const original_function = window.XMLHttpRequest.prototype.open;
        window.XMLHttpRequest.prototype.open = function (method, url, async, user, password) {
            return original_function.call(this, method, updateUrl(url), async, user, password);
        };
    }

    function replaceLayaLoadImage() {
        const original_function = Laya.Loader.prototype._loadImage;
        Laya.Loader.prototype._loadImage = function (url) {
            return original_function.call(this, updateUrl(url));
        }
    }

    function replaceLayaLoadSound() {
        const original_function = Laya.Loader.prototype._loadSound;
        Laya.Loader.prototype._loadSound = function (url) {
            return original_function.call(this, updateUrl(url));
        }
    }

    function replaceLayaLoadTtf() {
        const original_function = Laya.Loader.prototype._loadTTF;
        Laya.Loader.prototype._loadTTF = function (url) {
            return original_function.call(this, updateUrl(url));
        }
    }
})();
