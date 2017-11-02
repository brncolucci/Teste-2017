$("#tick1").click(ontop1);
function ontop1() {
    $("#tick1").toggleClass("tick tickgreen");
}
$("#tick2").click(ontop2);
function ontop2() {
    $("#tick2").toggleClass("tick tickgreen");
}
$("#tick3").click(ontop3);
function ontop3() {
    $("#tick3").toggleClass("tick tickgreen");
}
$("#tick4").click(ontop4);
function ontop4() {
    $("#tick4").toggleClass("tick tickgreen");
}
$("#tick5").click(ontop5);
function ontop5() {
    $("#tick5").toggleClass("tick tickgreen");
}
var dialog = document.querySelector('dialog');
var showDialogButton = document.querySelector('#show-dialog');
if (!dialog.showModal) {
    dialogPolyfill.registerDialog(dialog);
}
showDialogButton.addEventListener('click', function () {
    dialog.showModal();
});
dialog.querySelector('.close').addEventListener('click', function () {
    dialog.close();
});