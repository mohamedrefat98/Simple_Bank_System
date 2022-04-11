
// var users =[] ;

// var addUser =()=>{

//      var user ={
//         name : prompt("enter name"),
//         id : parseInt(prompt("enter id")),
//         balance :parseInt(prompt("enter balance"))
//      }

//     //  if(typeof(user.id)!="number"){
//     //     user.id=parseInt(prompt("Enter valid id"));
//     //  }else if(typeof(user.balance)!="number"){
//     //     user.balance=parseInt(prompt("Enter valid balance"));
//     //  }

//      users.push(user);
//      console.table(users);
//     }

//     addUser();
//     addUser();
//     addUser();

//     var updateBalanceById = ()=>{
//         var idUpdate = parseInt(prompt("enter id"));
//         var balanceUpdate = parseInt(prompt("enter new balance"));

//         var obj = users.findIndex(item=>
//             item.id == idUpdate
//         )
//         users[obj].balance = balanceUpdate
//         console.table(users);
//     }

//     var deleteById = ()=>{
//         var idDelete = parseInt(prompt("enter id"));

//         var objDelete = users.find(element=>
//             element.id == idDelete
//         )

//         var objIndex = users.indexOf(objDelete);
//         users.splice(objIndex ,1);
//         console.table(users);
//     }
   

var clients = [];
var myForm = document.getElementById("my-form");
var container = document.getElementById("data-container");


     

myForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    addClient (
        e.target.elements.clientid.value,
        e.target.elements.clientname.value,
        e.target.elements.clientbalance.value,
    );
    showData();
})

function addClient (id,name,balance){
    var client = {
        clientId:id,
        clientName:name,
        clientBalance:balance
    }
    clients.push(client);
}

function showData(){
    container.innerText="";

    clients.forEach((item , i)=>{
        // ---> declaring elements <---
        var row = document.createElement("tr");
        var idCell =document.createElement("td");
        var nameCell =document.createElement("td");
        var balanceCell =document.createElement("td");
        var actionCell =document.createElement("td");
        var editBalance = document.createElement("button");
        editBalance.innerText = "Edit Balance";
        editBalance.classList.add("btn","btn-success","me-2");
        var remove = document.createElement("button");
        remove.innerText = "Remove";
        remove.classList.add("btn","btn-danger");

        idCell.innerText = item.clientId;

        nameCell.innerText = item.clientName;

        balanceCell.innerText = item.clientBalance;
      
        
        // --->action column<---
        actionCell.append(editBalance);
        actionCell.append(remove);

        // ===>add row<===
        row.append(idCell);
        row.append(nameCell);
        row.append(balanceCell);
        row.append(actionCell);

        container.append(row);

        remove.addEventListener("click" , ()=>{
            clients.splice(i , 1 )
            row.innerText="";
        })

        editBalance.addEventListener("click" ,()=>{
            var newBalance = prompt("enter new balance");
            clients[i].clientBalance = newBalance;
            balanceCell.innerText = newBalance;
        })
           
            
        })
    }

