function modtooltip(){
    document.getElementById("tooltip").innerHTML = "Copied to clipboard";
}

function resettooltip() {
    document.getElementById("tooltip").innerHTML = "Click to copy to clipboard";
    if (window.getSelection) {window.getSelection().removeAllRanges();}
    else if (document.selection) {document.selection.empty();}
}

new ClipboardJS('.sel');