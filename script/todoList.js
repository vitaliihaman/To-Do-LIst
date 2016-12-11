(function () {
    document.addEventListener('DOMContentLoaded', function () {

        var input = document.getElementById('input');

        proposition();
        setListener();

        function proposition() {
            input.value = 'Add What TODO';
        }

        function clearInput(){
                input.value = '';
        }

        function addButtonComplete(li){
           var  buttonCompleted = document.createElement('INPUT');
                buttonCompleted.className = 'buttonCompleted';
            buttonCompleted.setAttribute('type', 'image');
            buttonCompleted.setAttribute('src', 'image/tick.png');
            buttonCompleted.setAttribute('width', '20px');
            buttonCompleted.setAttribute('height', '20px');
            li.appendChild(buttonCompleted);
        }

        function addButtonRemove(li){
            var buttonRemove = document.createElement('INPUT');
                buttonRemove.className ='buttonRemove';
            buttonRemove.setAttribute('type', 'image');
            buttonRemove.setAttribute('src', 'image/delete.png');
            buttonRemove.setAttribute('width', '20px');
            buttonRemove.setAttribute('height', '20px');
            li.appendChild(buttonRemove);
        }

        function add(){
            if(input.value !== "" && input.value !== "Add What TODO") {
                var ul = document.createElement('UL'),
                    li = document.createElement('LI'),
                    wrapper = document.getElementById('wrapper');
                ul.className = 'inputField';
                ul.setAttribute('id', 'ul');
                text = document.createTextNode(input.value);
                wrapper.appendChild(ul);
                ul.appendChild(li);
                li.appendChild(text);
                addButtonComplete(li);
                addButtonRemove(li);
                clearInput();
            }
        }

        function removeLi(){

            console.log('aaa');
        }

        function setListener(){
            var addButton = document.getElementById('add'),
                buttonsCompleted = document.getElementsByClassName('buttonCompleted'),
                button,
                buttonsRemove = document.getElementsByClassName('buttonRemove');

            for (var i = 0; i < buttonsCompleted.length; i++) {
                button = buttonsCompleted[i];
                console.log(buttonsCompleted[i]);
                console.log(i);
                button.addEventListener('click', removeLi);
            }

                addButton.addEventListener('click', add);
                input.addEventListener('click' , clearInput);

        }






    });
})();