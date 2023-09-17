// ==UserScript==
// @name         Rearrange MicroCorruption Panels
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://microcorruption.com/debugger/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

//window.addEventListener("load", function() {
//    console.log("after the load")
//    let content = document.getElementById("main_content")
//    console.log(content)
//}, false)

(new MutationObserver(check)).observe(document, {childList: true, subtree: true});

function check(changes, observer) {
    if(document.querySelector('#main_content')) {
        observer.disconnect();

        'use strict';
        console.log("Content is finally loaded")
        rearrange()
    }
}

function rearrange() {
    let content = document.getElementById("main_content")
    let wrap = content.getElementsByClassName("wrap")[0]
    let parent = wrap.getElementsByClassName("column-1")[0]
    let children = parent.childNodes

    parent.remove()

    let len = children.length

    //for (let i = len-1; i >= 0; i--) {
    //    wrap.insertBefore(children[i], wrap.firstChild)
    //}

    //wrap.insertBefore(children[2], wrap.firstChild) // this is the random div that is invisible
    wrap.insertBefore(children[0], wrap.firstChild)
    wrap.insertBefore(children[0], wrap.firstChild) // once you insertBefore, it removes it from the list, This used to be the first index

    for (let child of wrap.childNodes) {
        child.style.display = "inline-block"
        child.style.margin = "10px"
    }

    wrap.style.maxWidth = "none"
    wrap.style.display = "flex"
    wrap.childNodes[0].style.marginLeft = "auto"
    wrap.childNodes[wrap.childElementCount-1].style.marginRight = "auto"
    document.querySelector("#asmbox").style.height = "80vh"
    //document.querySelector("#asmbox").style.height = "850px"
    document.querySelector("#asmbox").style.fontSize = "1.2em"
    document.querySelector("#memorybox").style.height = "80vh"
    //document.querySelector("#memorybox").style.height = "871px"
    document.querySelector("#memorybox").style.width = "550px"
    document.querySelector(".column-2").style.float = "none"

    //document.querySelector("#replresponsesouter").style.width = "400px"
}
