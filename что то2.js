<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<title>Простой список сообщений форума</title>
</head>
<body>

<ul id="messagesList"></ul>

<label for="messageText">Ваше сообщение:</label>
<input type="text" id="messageText" placeholder="Введите ваше сообщение" />
<button onclick="postMessage()">Отправить</button>

<script>
function postMessage() {
    var messageText = document.getElementById('messageText').value;
    if (messageText) {
        var messagesList = document.getElementById('messagesList');
        var newMessage = document.createElement('li');
        newMessage.textContent = messageText;
        messagesList.appendChild(newMessage);

        // Очищаем поле ввода после добавления сообщения
        document.getElementById('messageText').value = '';
    }
}
</script>

</body>
</html>
