$(document).ready(function(){
/*
var opts = {
  container: 'epiceditor',
  basePath: 'epiceditor',
  clientSideStorage: true,
  localStorageName: 'epiceditor',
  parser: marked,
  file: {
    name: 'epiceditor',
    defaultContent: '',
    autoSave: 100
  },
  theme: {
    base:'/themes/base/epiceditor.css',
    preview:'/themes/preview/github.css',
    editor:'/themes/editor/epic-dark.css'
  },
  focusOnLoad: false,
  shortcut: {
    modifier: 18,
    fullscreen: 70,
    preview: 80,
    edit: 79
  }
}
*/
  console.log("cargando opciones");
var editor = new EpicEditor().load();
//setTimeout("editor.load();",2000);
//var editor = new EpicEditor(opts).load();

$("#editmd").onclick = function () {
  console.log("en modo de edicion");
  editor.edit();
}

$("#previewmd").onclick = function () {
  editor.preview();
  console.log("en modo de vista previa");
}

previewmd.onclick = function () {
  editor.preview();
  console.log("en modo de vista previa por previewmd");
}

});