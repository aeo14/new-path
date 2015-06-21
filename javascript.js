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
        count = table.getElementsByTagName('tr').length,
        y = table.insertRow(),
        i = 0;

    for(i; i < count; i++) {
        var x = y.insertCell(i);
    }
}
function addcol(){
    var table = document.getElementById('myTable'),
        trs = table.getElementsByTagName('tr'),
        count = trs.length,
        i = 0;
    for(i; i < count; i++) {
        var c = i <= 1 ? 2 : 3, x = trs[i].insertCell(c);
    }
}
function deleteRow(id){
    var i = id.parentNode.parentNode.rowIndex;
    document.getElementById('myTable').deleteRow(i);
}
function deleteCell(){
    var row = document.getElementById("myTable"),
        count = document.getElementsByTagName('tr').length,
        i = 0;

    for (i; i < count; i++) {
        row.rows[i].deleteCell(i)
    }
    /*var row = document.getElementById("myTable").rows[0];
     row.deleteCell(0);
     row = document.getElementById("myTable").rows[1];
     row.deleteCell(1);
     row = document.getElementById("myTable").rows[2];
     row.deleteCell(2);
     row = document.getElementById("myTable").rows[3];
     row.deleteCell(3);*/
}
function showButton(event) {
    //console.log(event.pageX);
    console.log(document.getElementById('delrow'));
    var div1 = document.getElementsByClassName('button3'),
        style1 = div1[0].style;
//.style = "position:absolute;\n left:160px;\n top:55px;\n"
    style1.visibility = "visible";
    style1.height = 100;

    //style1.height = ;
    //style1.width = ;

    var div = document.getElementsByClassName('button4'),
        style = div[0].style;
    style.visibility = "visible";
}
function hideButton(){
    var div = document.getElementsByClassName('button3'),
        style = div[0].style;
    style.visibility = "hidden";

    var div = document.getElementsByClassName('button4'),
        style = div[0].style;
    style.visibility = "hidden";
}