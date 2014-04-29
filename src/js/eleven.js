function iFrameOn(){
	vasigo_richtext.document.designMode = 'On';
}
function justify() {
    vasigo_richtext.document.execCommand('JustifyFull');
}
function right() {
    vasigo_richtext.document.execCommand('JustifyRight');
}
function left() {
    vasigo_richtext.document.execCommand('JustifyLeft');
}
function center() {
    vasigo_richtext.document.execCommand('JustifyCenter');
}
function print() {
    vasigo_richtext.document.execCommand('Print', true);
}
function strike(){
    vasigo_richtext.document.execCommand('StrikeThrough');
}
function subs(){
    vasigo_richtext.document.execCommand('Subscript');
}
function supers(){
    vasigo_richtext.document.execCommand('Superscript');
}
function undos(){
    vasigo_richtext.document.execCommand('Undo');
}
function redos(){
    vasigo_richtext.document.execCommand('Redo');
}
function iBold(){
	vasigo_richtext.document.execCommand('bold',false,null); 
}
function iUnderline(){
	vasigo_richtext.document.execCommand('underline',false,null);
}
function iItalic(){
	vasigo_richtext.document.execCommand('italic',false,null); 
}

function iFontSize(){
	var size = prompt('Enter a size 1 - 7', '');
	vasigo_richtext.document.execCommand('FontSize',false,size);
}
function iForeColor(){
	var color = prompt('Define a basic color or apply a hexadecimal color code for advanced colors:', '');
	vasigo_richtext.document.execCommand('ForeColor',false,color);
}
function iHorizontalRule(){
	vasigo_richtext.document.execCommand('inserthorizontalrule',false,null);
}
function iUnorderedList(){
	vasigo_richtext.document.execCommand("InsertUnorderedList", false,"newOL");
}
function iOrderedList(){
	vasigo_richtext.document.execCommand("InsertOrderedList", false,"newUL");
}
function iLink(){
	var linkURL = prompt("Enter the URL for this link:", "http://"); 
	vasigo_richtext.document.execCommand("CreateLink", false, linkURL);
}
function iUnLink(){
	vasigo_richtext.document.execCommand("Unlink", false, null);
}
function iImage(){
	var imgSrc = prompt('Enter image location', '');
    if(imgSrc != null){
        vasigo_richtext.document.execCommand('insertimage', false, imgSrc); 
    }
}
function submit_form(){
	var theForm = document.getElementById("vasigo_form");
	theForm.elements["vasigo_text"].value = window.frames['vasigo_richtext'].document.body.innerHTML;
	theForm.submit();
}