// // other method for define a function
// // const print=function(){
// //     console.log(1)
// // }
// // print();

// // arrow function
// const print=() =>{
//     console.log(1)
// }
// print();


// // for insert html element by js

// // the long method
// const tr=document.createElement('tr');
// const th=document.createElement('th');
// th.innerText='2';
// tr.appendChild(th);
// const td1=document.createElement('td');
// td1.innerText='Noura';
// const td2=document.createElement('td');
// td2.innerText='Mahmoud';
// const td3=document.createElement('td');
// td3.innerText='hi';
// tr.appendChild(td1);
// tr.appendChild(td2);
// tr.appendChild(td3);
// const tablebody=document.querySelector('.table tbody');
// tablebody.append(tr);


// // the short method
// const tbody=document.querySelector('.table tbody');
// tbody.insertAdjacentHTML('beforeend',`
// <tr>
// <th scope="row">2</th>
// <td>Noura</td>
// <td>Mahmoud</td>
// <td>@fat</td>
// </tr>
// `);

// // for event 
// const addRowToTable=()=>{
//     const tbody=document.querySelector('.table tbody');
//     tbody.insertAdjacentHTML('beforeend',`
//     <tr>
//     <th scope="row">2</th>
//     <td>Noura</td>
//     <td>Mahmoud</td>
//     <td>@fat</td>
//     </tr>
//     `);
// }
const addRowToTable=(name,color,category,index)=>{
    const tbody=document.querySelector('.table tbody');
    tbody.insertAdjacentHTML('beforeend',`
    <tr>
    <th scope="row">${index}</th>
    <td>${name}</td>
    <td>${color}</td>
    <td>${category}</td>
    <td><button onclick="deleteRow(event)" class="btn btn-danger delete-${index}">Delete</button></td>
    </tr>
    `);
}
let index=0;
const addNewRow=document.querySelector('.add-new');
// method 1
//addNewRow.addEventListener('click',addRowToTable);

//method 2
addNewRow.addEventListener('click',(event)=>{
    const nameInput=document.querySelector('.name');
    const colorInput=document.querySelector('.color');
    const categoryInput=document.querySelector('.category');
    if (nameInput.value.trim() !=='',colorInput.value.trim()!=='',categoryInput.value.trim() !==''){
        addRowToTable(nameInput.value,colorInput.value,categoryInput.value,index);
    }

    //for delete method 2
    // const del=document.querySelector(`.delete-${index}`);
    // del.addEventListener('click',(event)=>{
    //     event.target.parentElement.parentElement.remove();
    // });
    index+=1;
    nameInput.value='';
    colorInput.value='';
    categoryInput.value='';
});

// for form
const nameInput=document.querySelector('.name');
nameInput.addEventListener('input',(event)=>{
    const data=event.target.value;
});

// function for delete
const deleteRow=(event)=>{
    event.target.parentElement.parentElement.remove();
};