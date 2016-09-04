///<reference path="./jquery.d.ts"/>
$(document).ready(init);
function init() {
    setContainerHeight();
    reSizeElement();
    $(window).on('resize', onResize);
    $(window).on("wheel", onScroll);
    removeClass();
}
function removeClass() {
    $('#placeHolder').removeClass('animated fadeInUp');
}
function onResize() {
    setContainerHeight();
    reSizeElement();
}
function centerElement(elementToCenter, parentElement) {
    var contentHeight = $(parentElement).innerHeight();
    var textHeight = $(elementToCenter).innerHeight();
    var marginTopAndBottom = (contentHeight - textHeight) / 2;
    elementToCenter.css({ 'margin-top': marginTopAndBottom });
}
function reSizeElement() {
    centerElement($('#placeHolder'), $('#content'));
    centerElement($('#navbar'), $('#content'));
}
function setContainerHeight() {
    var outerMargin = 5;
    var margin = (window.innerHeight / 100) * outerMargin;
    var container = $('#container');
    container.css({ 'height': (window.innerHeight / 100) * (100 - (outerMargin * 2)) });
    container.css({ 'margin-top': margin });
    container.css({ 'margin-bottom': margin });
    container.css({ 'width': 100 - (outerMargin * 2) + "%" });
}
function onScroll(e) {
    console.log(e);
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    console.log(delta);
    var pages = getPagesContent();
    var page = pages[1];
    $('#contentTop').text(page.contentTop);
    $('#contentBottom').text(page.contentBottom);
    $('#location').text(page.location.place);
    $('#type').text(page.location.type);
    $('#periodStart').text(page.location.start);
    $('#periodEnd').text(page.location.end);
    $('#placeHolder').addClass('animated fadeInUp');
    setTimeout(removeClass, 1000);
    //change content
    //changeNavBar
    //reMargin stuff
}
function getPagesContent() {
    var array = [];
    array.push(new Page('Brobygrafiska Utbildning', 'Visuell grafisk kommunikatör', new Loc("Sunne, Värmland", "Yrkeshögskola", "augusti 2014", "april 2016")));
    array.push(new Page('Ord & Bild Reklambyrå', 'Praktik/Lärande i arbete (LIA)', new Loc("Karlstad", "Yrkeserfarenhet", "oktober 2015", "januari 2016")));
    return array;
}
var Scroll = (function () {
    function Scroll(currentScroll) {
        this.currentScroll = currentScroll;
    }
    Scroll.prototype.delta = function () {
        return Math.round((this.currentScroll - this.lastScroll) * 1000) - 5;
    };
    return Scroll;
}());
var Page = (function () {
    function Page(contentTop, contentBottom, location) {
        this.contentTop = contentTop;
        this.contentBottom = contentBottom;
        this.location = location;
    }
    return Page;
}());
var Loc = (function () {
    function Loc(place, type, start, end) {
        this.place = place;
        this.type = type;
        this.start = start;
        this.end = end;
    }
    return Loc;
}());
var myVars = {
    scroll: new Scroll(0)
};
//# sourceMappingURL=app.js.map