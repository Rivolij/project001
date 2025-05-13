const registrationForm = document.getElementById('registration-form');
const loginForm = document.getElementById('login-form');

registrationForm.addEventListener('submit', function(event) {
    event.preventDefault();

// Получаем значение из формы
const username = registrationForm.elements.username.value
const date = registrationForm.elements.date.value
const sex = registrationForm.elements.sex.value
const password = registrationForm.elements.password.value

// Сохраняем данные в localStorage
localStorage.setItem('username', username)
localStorage.setItem('date', date)
localStorage.setItem('sex', sex)
localStorage.setItem('password', password)

// Оповещаем пользователя об успешной регистрации
alert('Вы успешно зарегистрированы!');
});

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();


    // Получаем значение из формы
    const username = loginForm.elements.username.value
    const date = loginForm.elements.date.value
    const sex = loginForm.elements.sex.value
    const password = loginForm.elements.password.value


    // Получаем сохраненные данные из localStorage
    const savedUsername = localStorage.getItem('username')
    const savedDate = localStorage.getItem('date')
    const savedSex = localStorage.getItem('sex')
    const savedPassword = localStorage.getItem('password')

    // Проверяем, что веденные данные совпадают с сохраненным
    if (username === savedUsername && date === savedDate && sex === savedSex && password === savedPassword) {
        // Пользователь успешно авторизован
        alert('Вы успешно вошли!')
    } else {
        // Ошибка авторизации
        alert('Ошибка авторизации. Проверьте правильность введенных данных.')
    }
});