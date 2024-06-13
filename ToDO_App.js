let btn = document.querySelector('button');
let inp = document.querySelector('input');
let list = document.querySelector('.list');

let count = 0;
let updateBtn = false;
// creating a function for taking input tasks from the user and displaying in unorder list
btn.addEventListener('click', () => {
    //storing  and displaying input value from the user in result var
    let result = inp.value;

    if (result) {
        //creating elements/buttons
        const li = document.createElement('li');
        const editBtn = document.createElement('button');
        const delBtn = document.createElement('button');
        let spanElement = document.createElement('span');

        //setting attributes
        li.setAttribute('id', "li_" + count);
        editBtn.setAttribute('data-id', "li_" + count);
        delBtn.setAttribute('data-id', "li_" + count)

        //editBtn  actions
        editBtn.addEventListener('click', function (event) {
            edit(event);
        })

        //DelBtn action
        delBtn.addEventListener('click', function (event) {
            del(event);
        })

        //Appendig Child or Adding
        document.getElementById('list').appendChild(li)
        li.appendChild(spanElement);
        li.appendChild(editBtn);
        li.appendChild(delBtn);

        inp.value = ''
        //InnerTexts of all elements    
        spanElement.innerText = result;
        editBtn.innerText = 'Edit';
        delBtn.innerText = 'Delete'

        count++;
    }

});

function edit(event) {
    let elmId = event.target;
    let elm = elmId.getAttribute("data-id");
    if (updateBtn) {
        if (!document.querySelector("#" + elm + "_update")) {
            alert("Please complete your first edit task");
            return;
        }
        //update button functionality
        document.querySelector("#" + elm + " span").innerText = document.querySelector("#" + elm + "_update").value;
        elmId.innerText = "Edit";
        updateBtn = false;

    } else {

        let editInp = document.createElement('input');
        editInp.setAttribute("id", elm + "_update")
        const editTask = document.querySelector("#" + elm + " span");

        editInp.value = editTask.innerText;

        document.querySelector("#" + elm + " span").innerText = '';
        document.querySelector("#" + elm + " span").appendChild(editInp);

        elmId.innerText = "Update";
        updateBtn = true;
    }
}
//Edit button functionality
function del(event) {
    let elmId = event.target;
    let elm = elmId.getAttribute("data-id");
    document.querySelector("#" + elm).remove();
}