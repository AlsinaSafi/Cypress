describe('Проверка авторизации', function () {

   it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверяю цвет кнопки восстановить пароль

        cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажал войти

        cy.wait(3000);

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден для пользователя
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })

         it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверяю цвет кнопки восстановить пароль


        cy.get('#forgotEmailButton').click(); // Нажимаем восстановить пароль

        cy.get('#mailForgot').type('german@dolnikov.ru'); // Вводим почту для восстановления
        cy.get('#restoreEmailButton').click(); // Нажимаем на кнопку отправить код

        cy.wait(1000);

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //Проверяю текст на совпадение
        cy.get('#messageHeader').should('be.visible'); // Текст виден для пользователя
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })

      it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверяю цвет кнопки восстановить пароль

        cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
        cy.get('#pass').type('iLoveqastudio7'); // Ввели неверный пароль
        cy.get('#loginButton').click(); // Нажал войти

        cy.wait(2000);

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден для пользователя
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })

      it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверяю цвет кнопки восстановить пароль

        cy.get('#mail').type('german@donikov.ru'); // Ввели неверный логин
        cy.get('#pass').type('iLoveqastudio7'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажал войти

        cy.wait(2000);

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден для пользователя
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })

      it('Проверка, что в логине есть @', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверяю цвет кнопки восстановить пароль

        cy.get('#mail').type('germandolnikov.ru'); // Ввели логин без @
        cy.get('#pass').type('iLoveqastudio7'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажал войти

        cy.wait(2000);

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //Проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден для пользователя
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })

         it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверяю цвет кнопки восстановить пароль

        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввели логин который содержит заглавные буквы
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажал войти

        cy.wait(2000);

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден для пользователя
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })
})


// План
// + Найти поле логин и ввести правильный логин  
// + Найти поле пароль и ввести правильный пароль
// + Найти кнопку войти и нажать на нее
// + Проверить, чот авторизация прошла успешно
