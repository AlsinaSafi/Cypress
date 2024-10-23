describe('Покупка аватара', function () {

   it('e2e тест на покупку нового аватара для тренера', function () {
        cy.visit('https://pokemonbattle.ru/'); // Зашли на сайт

        cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN'); // Нашли поле почта и ввели верную почту
        cy.get('#password').type('USER_PASSWORD') // Нашли поле пароль и ввели верный пароль
        cy.get('.auth__button').click(); // Нашли кнопку войти и кликнули на нее
        cy.wait(2000);

        cy.get('.header__container > .header__id').click(); // Нашил кнопку входа вличный кабинет тренера и кликнули ее
        cy.get('[href="/shop"]').click(); // Нашли кнопку смена аватара и кликнули ее

        cy.get('.available > button').first().click({ force: true });   // кликаем Купить у первого доступного аватара
        cy.get('.credit').type('4124765781984886');                     // вводим номер карты
        cy.get('.k_input_ccv').type('125');                             // вводим CVV карты
        cy.get('.k_input_date').type('1225');                           // вводим срок действия карты
        cy.get('.k_input_name').type('Taemi Aziz');                     // вводим имя владельца 
        cy.get('.pay-btn').click();                                     // нажимаем кнопку Оплатить
        cy.get('#cardnumber').type('56456');                            // вводим код подтверждения СМС
        cy.get('.payment__submit-button').click();                      // нажимаем кнопку Отправить
        cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения о успешной покупке
     });
 });
