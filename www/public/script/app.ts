///<reference path="../script/jquery.d.ts"/>

$(document).ready(init);

function init(): any {
    setContainerHeight();
    reSizeElement();
    $(window).on('resize', onResize);
    $(window).on("wheel", onScroll);
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

function onScroll() {

    //change content
    //changeNavBar
    //reMargin stuff


}



