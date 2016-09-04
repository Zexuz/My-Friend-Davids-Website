///<reference path="./jquery.d.ts"/>

$(document).ready(init);

function init(): any {


    setContainerHeight();
    reSizeElement();
    $(window).on('resize', onResize);
    $(window).on("wheel", onScroll);
    removeClass();
}

function removeClass() {
    $('#placeHolder').removeClass('animated fadeInUp');
}

function onResize(): any {
    setContainerHeight();
    reSizeElement();
}

function centerElement(elementToCenter: JQuery, parentElement: JQuery) {

    var contentHeight = $(parentElement).innerHeight();
    var textHeight = $(elementToCenter).innerHeight();


    var marginTopAndBottom = (contentHeight - textHeight) / 2;


    elementToCenter.css({'margin-top': marginTopAndBottom});
}

function reSizeElement() {
    centerElement($('#placeHolder'), $('#content'));
    centerElement($('#navbar'), $('#content'));
}

function setContainerHeight() {

    var outerMargin = 5;

    var margin = (window.innerHeight / 100) * outerMargin;
    var container = $('#container');

    container.css({'height': (window.innerHeight / 100) * (100 - (outerMargin * 2))});
    container.css({'margin-top': margin});
    container.css({'margin-bottom': margin});
    container.css({'width': 100 - (outerMargin * 2 ) + "%"});

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


function getPagesContent(): Array<Page> {
    var array = [];

    array.push(new Page('Brobygrafiska Utbildning', 'Visuell grafisk kommunikatör', new Loc("Sunne, Värmland", "Yrkeshögskola", "augusti 2014", "april 2016")));
    array.push(new Page('Ord & Bild Reklambyrå', 'Praktik/Lärande i arbete (LIA)', new Loc("Karlstad", "Yrkeserfarenhet", "oktober 2015", "januari 2016")));

    return array;
}

class Scroll {

    lastScroll: number;
    currentScroll: number;


    constructor(currentScroll: number) {
        this.currentScroll = currentScroll;
    }

    delta() {
        return Math.round((this.currentScroll - this.lastScroll) * 1000) - 5;
    }

}

class Page {

    contentTop: string;
    contentBottom: string;
    location: Loc;


    constructor(contentTop: string, contentBottom: string, location: Loc) {
        this.contentTop = contentTop;
        this.contentBottom = contentBottom;
        this.location = location;
    }
}

class Loc {


    place: string;
    type: string;
    start: string;
    end: string;


    constructor(place: string, type: string, start: string, end: string) {
        this.place = place;
        this.type = type;
        this.start = start;
        this.end = end;
    }

}


var myVars = {
    scroll: new Scroll(0)
};




