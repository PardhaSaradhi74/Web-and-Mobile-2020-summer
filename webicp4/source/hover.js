function upDate(previewPic) {
/*changing the background image to preview image when mouse is hovered*/
    $('#image').css('background-image', 'url(' + previewPic.src + ')');
    /*changing the text of the empty frame to text*/
    $('#image').html(previewPic.alt);

}
function unDo() {
    /*changing back to empty frame when mouse is moved*/
    $('#image').css('background-image','none');
    $('#image').html("Hover over an image below to display here.");
}