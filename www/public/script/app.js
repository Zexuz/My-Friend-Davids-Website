///<reference path="../script/jquery.d.ts"/>
$(document).ready(init);
function init() {
    setContainerHeight();
    reSizeElement();
    $(window).on('resize', onResize);
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
//# sourceMappingURL=app.js.map