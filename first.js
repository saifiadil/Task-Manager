let taskinput =  document.getElementById("task");
let datetimeinput = document.getElementById("datetime");
let addtask = document.getElementById("addtask");
let showtask = document.getElementById("showtask");

//define 



//button

addtask.addEventListener("click", addTask);


//function button

function addTask(){
    let taskdescription =taskinput.value;
    let taskdate = new Date(datetimeinput.value);

    



    if (taskdescription && taskdate) {
        let li = document.createElement("li");

        let option = { hour: 'numeric', minute:'numeric',hour12:true}
let finaldate = taskdate.toLocaleDateString(undefined,option)







        li.innerHTML = `<span> ${taskdescription}</span>
        <span> ${finaldate}</span>
        <button class = "delete">Delete</button>
        `;

        showtask.appendChild(li);
        taskinput.value = "";
        datetimeinput.value = "";


        li.style.listStyleType= "none";
        li.querySelector(".delete").addEventListener("click",deletetask);
    }



}

function deletetask(){
    this.parentElement.remove();
}

