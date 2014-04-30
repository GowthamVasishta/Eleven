function iFrameOn(){
	vasigo_richtext.document.designMode = 'On';
}
function cmd(command){
    vasigo_richtext.document.execCommand(command);
}
function print() {
    vasigo_richtext.document.execCommand('Print', true);
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
