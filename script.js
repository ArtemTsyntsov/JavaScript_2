var inputData = document.querySelector('input[type="text"]');
var ulSpisok = document.getElementById('spisok');
var spans = document.getElementsByTagName('span');
var saveBtn = document.getElementById('save');
var deleteBtn = document.getElementById('delete');
var infoBtn = document.getElementById('info');
var modalWindow = document.getElementById('modal_window');
var closeWindow = document.getElementById('close_window');
var lis = document.getElementsByTagName('li');

function deleteTodo(){
    for(let span of spans){
        span.addEventListener('click', function(){
            span.parentElement.remove();
            event.stopPropagation();
        });
    }
}

function deleteLi(){
    for(let li of lis){
        li.addEventListener('click', function(){
            li.style.textDecoration = 'line-through';   
            event.stopPropagation();
        });
    }
}

function openLi(){
    for(let li of lis){ 
        li.addEventListener('dblclick', function(){
            li.style.textDecoration = 'none';
            event.stopPropagation();
        });
    }
}

function loadTodo(){
    if(localStorage.getItem('ApplicationTodo')){
        ulSpisok.innerHTML = localStorage.getItem('ApplicationTodo');
    }
    deleteTodo();
    deleteLi();
    openLi();
}

function createBr(){
    
    return newBr;
}


//addEvventListener - оработчик событий с последующим вызовом функции

inputData.addEventListener('keypress', function(keyPressed){
    var space = / /gi;
    if(keyPressed.which === 13){
            var newLi = document.createElement('li');
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            var newData = new Date();
            newSpan.innerHTML = 'Delete: ';

            var newInfo = this.value;
            var info = newInfo.replace(space, '');
        if(info !== ''){
            var newDate = 'Дата записи: ' + ('0' + newData.getDate()).slice(-2) + '-' + ('0' + (newData.getMonth() + 1)).slice(-2) + '-' + newData.getFullYear();

            ulSpisok.appendChild(newLi).append(newSpan, newInfo, newBr, newDate);
        }
        
    }
    deleteTodo();
    deleteLi();
    openLi();
});

saveBtn.addEventListener('click', function(){
    localStorage.setItem('ApplicationTodo', ulSpisok.innerHTML);
});

deleteBtn.addEventListener('click', function(){
    ulSpisok.innerHTML = " ";
    localStorage.setItem('ApplicationTodo', ulSpisok.innerHTML);
});

infoBtn.addEventListener('click', function(){
    modalWindow.style.display = 'block';
});

closeWindow.addEventListener('click', function(){
    modalWindow.style.display = 'none';
});

deleteTodo();

deleteLi();

openLi();

loadTodo();

