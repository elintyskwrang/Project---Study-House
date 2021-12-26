//change backgorund

function Forest() {
    document.body.style.backgroundImage = "url('images/Forest.jpg')";
}

function Room() {
    document.body.style.backgroundImage = "url('images/Room.jpg')";
}

function Library() {
    document.body.style.backgroundImage = "url('images/Library.jpg')";
}

function City() {
    document.body.style.backgroundImage = "url('images/City.jpg')";
}
function Sea() {
    document.body.style.backgroundImage = "url('images/Sea.jpg')";
}



// Contact form validation

function isNotEmpty(){
    if(document.getElementById("Name").value.length == 0 )
    {
        alert("You must fill all the boxes")
    } else if(document.getElementById("Email").value.length == 0 )
    {
        alert("You must fill in all the boxes")
    } else if(document.getElementById("Phone").value.length == 0 )
    {
        alert("You must fill in all the boxes")
    } else if(document.getElementById("Message").value.length == 0 )
    {
        alert("You must fill in all the boxes")
    } else {
        alert("Thank you for contacting us.")
    }
}


//todo list

document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please Enter a Task")
    }

    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i>done</i>
                </button>
            </div>

        `
        ;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}


