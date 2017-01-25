  (function () {

    var input = document.getElementById('input'),
        addButton = document.getElementById('add'),
        items = [];

      addButton.addEventListener('click', add);

      input.addEventListener('keypress', function (e) {
          if (e.keyCode === 13 && e.currentTarget.value) {
              add();
          }
      });

    function initialize() {
        if (window.localStorage) {
            items = JSON.parse(localStorage.getItem('todo')) || items;
            updateHtml(items);
        }
        //только тот код который выполняется один раз
    }

    function updateHtml(items) {
        if (items.length){
            console.log(items);
            var ul = document.getElementById('my-todo');
                items = items.forEach(function(item, i){
                var li = document.createElement('li');

                li.innerHTML = item.title;

                addButtonComplete(li);
                addButtonRemove(li);
                li.addEventListener('click', function(e) {
                    if (e.target.classList.contains('funcBtn')) {
                        var operation = e.target.getAttribute('data-target');
                        if (operation === 'complete') {
                            complete(e.target);
                        }  else {
                            remove(e.target);
                        }
                    }                    
                });

                ul.appendChild(li);
            });
        }
    }

    function addButtonComplete(li){
        var  buttonCompleted = document.createElement('input');
        buttonCompleted.className = 'funcBtn';
        buttonCompleted.setAttribute('data-target', 'complete');
        buttonCompleted.setAttribute('type', 'image');
        buttonCompleted.setAttribute('src', 'image/tick.png');
        buttonCompleted.setAttribute('width', '20px');
        buttonCompleted.setAttribute('height', '20px');

        li.appendChild(buttonCompleted);
    }

    function addButtonRemove(li){
        var buttonRemove = document.createElement('input');
        buttonRemove.className ='funcBtn';
        buttonRemove.setAttribute('type', 'image');
        buttonRemove.setAttribute('src', 'image/delete.png');
        buttonRemove.setAttribute('width', '20px');
        buttonRemove.setAttribute('height', '20px');

        li.appendChild(buttonRemove);
    }

    function test (){
        var buttonRemove = document.createElement('input');
        buttonRemove.className ='funcBtn';
        buttonCompleted.setAttribute('type', 'image');
        buttonCompleted.setAttribute('src', 'image/delete.png');
        buttonCompleted.setAttribute('width', '20px');
        buttonCompleted.setAttribute('height', '20px');

        body.appendChild(buttonRemove);
    }

    function add(){
        if(input.value) {
            var ul = document.getElementById('my-todo'),
                li = document.createElement('LI');

            li.innerHTML = input.value;

            li.addEventListener('click', function(e) {
                if (e.target.classList.contains('funcBtn')) {
                    var operation = e.target.getAttribute('data-target');
                    if (operation === 'complete') {
                        complete(e.target);
                    }  else {
                        remove(e.target);
                    }
                }                    
            });   

            ul.appendChild(li);
            input.value = '';

            addButtonComplete(li);
            addButtonRemove(li);
        }
    }

    function complete(el) {
        var liElement = el.parentNode;
        liElement.classList.add('completed');
    }

    function remove(el) {
        var liElement = el.parentNode,
            ul =  liElement.parentNode;

        ul.removeChild(liElement);
    }

    initialize();
})();



























