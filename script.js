var row = 1;

var btn = document.getElementById("submit")

btn.addEventListener("click", displayElement)

function displayElement(event){
    event.preventDefault();
    var firstname = document.getElementById("first-name").value;
    console.log(firstname)
    var lastname = document.getElementById("last-name").value;
    console.log(lastname)
    var address = document.getElementById("address").value;
    console.log(address)
    var pincode = document.getElementById("pincode").value;
    console.log(pincode)
    var gender = document.querySelector(`input[name="gender"]:checked`).value;
    console.log(gender)
    var foodList = [];
    var list = document.getElementsByName(`flist`)
    var State = document.getElementById("State").value;
    console.log(State)
    var Country = document.getElementById("Country").value;
    console.log(Country)
    
    
    
    
    for(var i =0; i<list.length; i++){
        if(list[i].checked){
            foodList.push(list[i].value);
        }
    }
    if(foodList.length<2)
    {
        alert("please select two food items")
        return;
    }
    if(!firstname || !lastname || !address || !State || !Country || !pincode ||!gender || !foodList)
    {
        alert("please fill all the required fields")
        return;
    }
var table = document.getElementById(`table`)
   var newrow = table.insertRow(row);
   var cell1 = newrow.insertCell(0);
   cell1.textContent = firstname;
   var cell2 = newrow.insertCell(1);
   cell2.textContent = lastname
   var cell3 = newrow.insertCell(2);
   cell3.textContent = address
   var cell4 = newrow.insertCell(3);
   cell4.textContent = pincode
   var cell5 = newrow.insertCell(4);
   cell5.textContent = gender
   var cell6 = newrow.insertCell(5);
   cell6.textContent = foodList;
   var cell7 = newrow.insertCell(6);
   cell7.textContent =  State
   var cell8 = newrow.insertCell(7);
   cell8.textContent = Country
   row++;
   let form = document.getElementById("form")
   form.reset();


}