var row = 1;

var submit = document.getElementById("submit");
submit.addEventListener("click",displayDetails);

function displayDetails() {
    var name = document.getElementById("name").value;
    var cname = document.getElementById("cname").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    
    if(!name || !cname || !email || !age) {
        alert("Please fill all the details");
        return;
    }

    var display = document.getElementById("display");
    var newRow = display.insertRow(row);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    cell1.innerHTML =name;
    cell2.innerHTML =cname;
    cell3.innerHTML =email;
    cell4.innerHTML =age;
    row++;
}

function reset(){
    document.getElementById('name').value=''
    document.getElementById('cname').value=''
    document.getElementById('email').value=''
    document.getElementById('age').value=''
}