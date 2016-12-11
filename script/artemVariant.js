  (function () {
    document.addEventListener('DOMContentLoaded', function () {

        var input = document.getElementById('input'),
            addButton = document.getElementById('add'),
            items = [
                {
                    id: '',
                    name: '',
                    status: 'completed' //uncompleted
                }
            ];


        function initialize() {
            //только тот код который выполняется один раз
        }

        function addItem() {
            //работает только с локальной колецией
            //обновление хтмл
        }

        function completed() {
            //работает только с локальной колецией
        }

        function remove() {
            //работает только с локальной колецией
        }

        function updateHtml() {
            //обновление хтмл
            //обновляет прослушку
        }

        function updateListeners() {
            //обновляет прослушку
        }

        function createHtmlItem() {
            //создание елемента списка с кнопками
        }

        addButton.addEventListener('click', add);

        function addButtonComplete(li){
            var  buttonCompleted = document.createElement('BUTTON');
            buttonCompleted.className = 'buttonCompleted';

            buttonCompleted.innerHTML = 'ok';
            li.appendChild(buttonCompleted);
        }

        function addButtonRemove(li){
            var buttonRemove = document.createElement('BUTTON');
            buttonRemove.className ='buttonRemove';

            buttonRemove.innerHTML = 'x';
            li.appendChild(buttonRemove);
        }

        function add(){
            if(input.value) {
                var ul = document.getElementById('my-todo'),
                    li = document.createElement('LI');

                li.innerHTML = input.value;
                li.style = 'position: inherit';
                ul.appendChild(li);
                input.value = '';

                addButtonComplete(li);
                addButtonRemove(li);
                updateListeners();
            }
        }

        function completed() {
            var liElement = this.parentNode;
            liElement.className = 'completed';

        }

        function remove() {
            var liElement = this.parentNode,
                ul =  this.parentNode.parentNode;

            ul.removeChild(liElement);
        }

        function updateListeners(){
            var buttonsCompleted = document.getElementsByClassName('buttonCompleted'),
                buttonsRemove = document.getElementsByClassName('buttonRemove'),
                currentElementCompleted,
                currentElementRemove;

            for(var i = 0; i < buttonsCompleted.length; i++){
                currentElementCompleted = buttonsCompleted[i];
                currentElementCompleted.removeEventListener('click', completed);
                currentElementCompleted.addEventListener('click', completed);
            }

            for (var i = 0; i < buttonsRemove.length; i++) {
                currentElementRemove = buttonsRemove[i];
                currentElementRemove.removeEventListener('click', remove);
                currentElementRemove.addEventListener('click', remove);
            }
        }
    });
})();



 /*
  placeholder="Type item name";

  buttonsCompleted && buttonsCompleted.removeEventListener('click', buttonsCompleted);

*/

  //console.log("heelo Artem");




  // Функция конструктор для создания обьектов


var Man = function(someName){
  this.name = someName;
    this.sayHi = function(){
        return "My name is " + this.name;
    }
};


  var petya = new Man ("Petya");


////////////////////////////////////////////////


  //ПРОТОТИПНОЕ НАСЛЕДОВАНИЕ

  var animals = {
      run: true,
      eat: true
  };

  var angry = {
      angry: false
  };

  var Rabbit = function(name){
      this.name = name;
      this.jump = true;
      this.ears = "big";
  };

  Rabbit.prototype = animals;
  Rabbit.prototype.voice = function () {
    return "I am sing a song for you ";
  };
  var whiteRabbit = new Rabbit("Мотя");
  var blackRabbit = new Rabbit("Фрося");
  var songerRabbit = new Rabbit("Поющий кролик");
  delete whiteRabbit.name;
  whiteRabbit.prototype = angry;
  console.log(whiteRabbit);
  console.log(blackRabbit);
  console.log(songerRabbit, songerRabbit.voice());

  var protoWhiteRabbit = Object.getPrototypeOf(whiteRabbit);   // Получить прототип обьекта
  protoWhiteRabbit.name = "New White rabbit";
  console.log(protoWhiteRabbit);
  console.log(whiteRabbit.hasOwnProperty("jump")); // Узнать имеется ли такое свойство обьекта(родное а не наследуемое)







  /*


  var array = [[74,45,85,85,35],
               [46,35,77,37,77],
               [46,75,27,77,37],
               [46,15,77,70,27],
               [74,95,85,85,76]];
  var count1 = 0,
      count2 = 0,
      sum1 = 0,
      sum2 = 0,
      sumAll = 0,
      sum3 = 0;

   for(var i = 0; i < array.length; i++){
       count1 += array[i][i];
   }
      console.log("Сумма  диагонали = " + count1);

    for( i = 0; i < array.length; i++){
          count2 += array[i][array.length-1-i];
    }
       console.log("Сумма побочной диагонали = " + count2);
           sum1 = count1 + count2;
       console.log("Сумма обоих диагоналей = " + sum1);


    for( i = 0; i < array.length; i++){

        for(var j = 0; j < array[i].length; j++){

            if(i == j){
                sum2 += array[i][j];
            }

            if(i == array[i].length-1-j ){
                sum3 += array[i][j];
            }
            if((i == j) || (i == array[i].length-1-j )){
                console.log(array[i][j], i, j, array[i].length-1-j );
                sumAll +=array[i][j];
            }

        }


    }
  console.log(sum2, sum3);
  console.log(sumAll);


  */











