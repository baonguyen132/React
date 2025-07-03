const list = document.querySelector(".list")
const input = document.querySelector("#todo")
const add = document.querySelector(".add_todo")

let count = 3 
let data = [
    {
        "id": 1,
        "name": "việc làm 1",
        "status": ""
    },
    {
        "id": 2,
        "name": "việc làm 2",
        "status": ""
    },
    
    {
        "id": 3,
        "name": "việc làm 3",
        "status": ""
    }
]

function changeStatus(id , status) {
    console.log(id ,status);
    data[id - 1].status = status
    loadData()
}


function loadData() {

    list.innerHTML = ""

    const table = document.createElement("table")
    table.className = "table"
    
    const thead = document.createElement("thead")
    const tr = document.createElement("tr")
    
    const th1 = document.createElement("th");
    th1.textContent = "ID";
    const th2 = document.createElement("th");
    th2.textContent = "Name";
    const th3 = document.createElement("th");
    th3.textContent = "Accept";
    const th4 = document.createElement("th");
    th4.textContent = "Delete";
    const th5 = document.createElement("th");
    th5.textContent = "Status";
    

    tr.append(th1 , th2 , th3 , th4, th5)
    thead.append(tr)
    table.append(thead)

    const tbody = document.createElement("tbody")


    data.forEach(element => {
        const tr = document.createElement("tr");

        const id =document.createElement("td")
        id.innerText = element.id 
        const name =document.createElement("td")
        name.innerText = element.name 

        const accepts =document.createElement("td")
        const deletes = document.createElement("td")

        if(element.status === ""){
            const button_accept = document.createElement("button")
            button_accept.innerText = "Accept"
            button_accept.classList = ["accept" , "button"]
            button_accept.addEventListener("click", ()=> {changeStatus(element.id , "accept")})

            const button_delete = document.createElement("button")
            button_delete.innerText = "Delete"
            button_delete.classList = ["delete" , "button"]
            button_delete.addEventListener("click", ()=> {changeStatus(element.id , "delete")})

            accepts.append(button_accept)
            deletes.append(button_delete)
        }

        const status = document.createElement("td")
        status.innerHTML = element.status
        
        tr.append(id , name, accepts, deletes, status)
        tbody.append(tr)
    });
    table.append(tbody)
    list.append(table)
}


add.addEventListener("click" , ()=>{
    const text = input.value 

    data[count++ ] = {"id": count++ , "name": text , "status": ""}
    loadData()
})


loadData() 