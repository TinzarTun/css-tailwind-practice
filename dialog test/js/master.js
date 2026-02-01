var dialog = document.getElementById("overLay");

function openDialog() {
  dialog.style.display = "flex";
  var concon = document.getElementById("conTainer");
  var concnon1 = concon.innerHTML;
  var diabody = document.getElementById("dialogBody");
  diabody.innerHTML = concnon1;
}

function closeDialog() {
  dialog.style.display = "none";
}
