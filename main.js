// change origin to subset of current domain
document.domain = "example.com";

// get iframe
var iframe = document.getElementsByTagName( "iframe" )[ 0 ];

// create link
var fileref=document.createElement("link")
fileref.setAttribute("rel", "stylesheet")
fileref.setAttribute("type", "text/css")
fileref.setAttribute("href", "//www.example.com/style.css");

// inject css after load
iframe.onload = function() {
	var iframeDocument = iframe.contentWindow.document;
	var iframeHead = iframeDocument.getElementsByTagName("head")[0];
	iframeHead.appendChild(fileref);
};
