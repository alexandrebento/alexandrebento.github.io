function modtooltip(){
    document.getElementById("tooltip").innerHTML = "Copied to clipboard";
}

function resettooltip() {
    document.getElementById("tooltip").innerHTML = "Copy to clipboard";
    if (window.getSelection) {window.getSelection().removeAllRanges();}
    else if (document.selection) {document.selection.empty();}
}

new ClipboardJS('.sel');