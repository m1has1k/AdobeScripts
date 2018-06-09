/**
 * Created by Миха on 09.06.2018.
 */

//var doc = app.documents[0];

var doc = app.activeDocument;
var docName = doc.name;
var destFolder = Folder.selectDialog( 'Укажите папку для сохранения файла', '~' );
/* change color mode to CMYK */
if ( doc.documentColorSpace == DocumentColorSpace.CMYK ) {
    //all good
    //alert( "Document color space is CMYK." );
} else {
    app.executeMenuCommand('doc-color-cmyk');
    alert('color mode change to CMYK');
}

/* замена текста в кривые */
for (i = 0; i < doc.textFrames.length; i++)  {
    doc.textFrames[i].createOutline();
}

var new_name = 'print ' + docName;
exportFileToAI(doc, destFolder, new_name);
saveFileToPDF(doc, destFolder, new_name);
undo();


function exportFileToAI (doc, dest, newname) {
    if ( app.documents.length > 0 ) {
        var saveOptions = new IllustratorSaveOptions();
        var ai8Doc = new File(dest + '/'+newname);
        saveOptions.embedICCProfile = true;
        saveOptions.embedLinkedFiles = true;
        doc.saveAs( ai8Doc, saveOptions );
    }
}

function saveFileToPDF (doc, dest, newname) {
    if ( app.documents.length > 0 ) {
        var saveName = new File ( dest + '/'+newname );
        saveOpts = new PDFSaveOptions();
        saveOpts.compatibility = PDFCompatibility.ACROBAT5;
        saveOpts.generateThumbnails = true;
        saveOpts.preserveEditability = true;
        doc.saveAs( saveName, saveOpts );
    }
}