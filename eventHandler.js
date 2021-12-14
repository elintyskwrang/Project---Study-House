function Forest() {
    document.body.style.backgroundImage = "url('images/rain.gif')";
}

function Room() {
    document.body.style.backgroundImage = "url('images/SPRUCE2.jpg')";
}

function Library() {
    document.body.style.backgroundImage = "url('images/Library.jpg')";
}



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
                    <i class="far fa-trash-alt">done</i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}
    

