/*eslint-env browser*/

var row = 1;

var $ = function(id){
    "use strict";
    return document.getElementById(id);
};


var processEntries = function(){
    var name,title,ext,display;
    name = $("name").value;
    title = $("title").value;
    ext = $("extension").value;
    
    
    if (name === ""){
        $("add_name").innerHTML = "Required Field";  
            
    }
    if (title === ""){
        $("add_title").innerHTML = "Required Field";   
        
    }
    if (ext === ""){
        $("add_ext").innerHTML ="Required Field";
        
    }
    if (name === "" || title ==="" || ext ===""){
        return;
    }else{
        display = $("show_employees");
        var newRow = display.insertRow(row);
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);
        cell1.innerHTML = name;
        cell2.innerHTML = title;
        cell3.innerHTML = ext;
        cell4.innerHTML = "<input type=\"button\" value=\"Delete\" onclick=\"deleteRow(this)\">";
        row += 1;
        
    }
    showCount(display);
};


function display(){
    var employee_list = [["Sally Smith", "Quality Assurance", 3455],
                         ["Mark Martin", "Director", 5425],
                         ["John Johnson", "Marketing", 7623],
                         ["Mary Keith", "Engineer", 2305],
                         ["Wills Kayne", "Developer", 8415]];
    var table = $("show_employees");
    
    for (var a = 1;  a < table.rows.length; a++){
        for (var j = 0; j <table.rows[a].cells.length;j++){
            table.rows[a].cells[j].innerHTML = employee_list[a-1][j]; 
            table.rows[a].cells[3].innerHTML = "<input type=\"button\" value=\"Delete\" onclick=\"deleteRow(this)\">";
        }  
    }
    showCount(table);
};


function showCount(t){
    var count = t.getElementsByTagName("tr").length;
    $("show_count").innerHTML = "Showing " + (count - 1) + " employees";
};


function deleteRow(r){
    "use strict";
    var i = r.parentNode.parentNode.rowIndex;
    $("show_employees").deleteRow(i);
    var deletedRow = $("show_employees").getElementsByTagName("tr").length - 1;
    $("show_count").innerHTML = "Showing " + deletedRow  + " employees";  
};


window.addEventListener("load", function(){
    "use strict";
    display();
    $("add").addEventListener("click", processEntries);
    $("name").focus();    
});