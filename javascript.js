/*
(function(){
    var buttons = document.getElementsByTagName('button');
        for(var i = 0, len = buttons.length; i < len; i++){
            console.log(buttons[i]);
            buttons[i].onclick = function (){
                if(this === 'addrow'){
                    var table = document.getElementById('myTable'),
                        count = table.getElementsByTagName('tr').length,
                        y = table.insertRow(),
                        i = 0;

                    for(i; i < count; i++) {
                        var x = y.insertCell(i);
                    }
                }else if(this === 'addcol'){
                    var table = document.getElementById('myTable'),
                        trs = table.getElementsByTagName('tr'),
                        count = trs.length,
                        i = 0;
                    for(i; i < count; i++) {
                        var c = i <= 1 ? 2 : 3, x = trs[i].insertCell(c);
                    }
                }else if(this === 'deleteRow'){
                    var i = id.parentNode.parentNode.rowIndex;
                    document.getElementById('myTable').deleteRow(i);
                }else if(this === 'deleteCell'){
                    var row = document.getElementById("myTable"),
                        count = document.getElementsByTagName('tr').length,
                        i = 0;

                    for (i; i < count; i++) {
                        row.rows[i].deleteCell(i)
                    }
                }
            }
        }
})();
*/

function addrow(){
    var table = document.getElementById('myTable'),
        count = table.rows[0].cells.length,
        y = table.insertRow(),
        i = 0;

    for(i; i < count; i++) {
        var x = y.insertCell(i);
    }
}
function addcol(){
    var table = document.getElementById('myTable'),
        oRows = table.getElementsByTagName('tr'),
        i = 0;

    for(i; i < oRows.length; i++) {
        oRows[i].insertCell();
    }
}
function deleteRow(id){
    var i = id.parentNode.parentNode.rowIndex;
    document.getElementById('myTable').deleteRow(i);
}
function deleteCell(){

    var table = document.getElementById("myTable"),
        count = table.rows.length,

        i = 0;
    console.log(count);
    for (i; i < count; i++) {
        console.log(i);
        table.rows[i].deleteCell();
    }

}
function showButton(event) {

    var div1 = document.getElementsByClassName('buttonDelRow'),
        buttonStyleRow = div1[0].style;
    buttonStyleRow.visibility = "visible";
    buttonStyleRow.left = event.clientX + 'px';

    var div = document.getElementsByClassName('buttonDelCell'),
        buttonStyleCell = div[0].style;
    buttonStyleCell.visibility = "visible";
    buttonStyleCell.top = event.clientY + 'px';
}
function hideButton(e){

    setTimeout(function(){hide(e)}, 1000);
}
function hide(e){
    console.log(e);
        if ((document.elementFromPoint(e.clientX, e.clientY).tagName) != "button") {

            var div = document.getElementsByClassName('buttonDelRow'),
                style = div[0].style;
            style.visibility = "hidden";

            var div = document.getElementsByClassName('buttonDelCell'),
                style = div[0].style;
            style.visibility = "hidden";
        }
}