document.getElementById("submit-btn").addEventListener("click", function (e) {
    e.preventDefault();

   // получаем данные формы
   let registerForm = document.forms["messForm"];
   let userMess = registerForm.elements["message"].value;


   // сериализуем данные в json
   let user = JSON.stringify({userMess: userMess});
   let request = new XMLHttpRequest();


   // посылаем запрос на адрес "/user"
    request.open("POST", "/*", true);   
    request.setRequestHeader("Content-Type", "application/json");
    request.addEventListener("load", function () {

       // получаем и парсим ответ сервера
        let receivedUser = JSON.parse(request.response);
        console.log(receivedUser.userMess);   // смотрим ответ сервера
    });

    
    var doc = document.getElementById('allMess');
    var newMess = document.createElement('div');
    newMess.innerHTML = `${userMess}`;
    doc.appendChild(newMess);
    request.send(user);
});