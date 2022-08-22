import { test } from '@playwright/test';
import { LoginPage } from '../../support/web/pageobjects/login.spec';

let loginPage : LoginPage

test.beforeEach(async ({page})=> {
    loginPage = new LoginPage(page)
})

test('Login com sucesso', async ({ page }) => {
    // const loginPage: LoginPage = new LoginPage(page)
    await loginPage.go()
    await loginPage.loginSucess('teste 123', 'teste1234')
});

test('Login sem sucesso email invalido', async ({ page }) => {
    // const loginPage: LoginPage = new LoginPage(page)
    await loginPage.go()
    await loginPage.loginFailInvalidEmail('teste 123', 'teste1234', 'E-mail inválido.')
});

test('Login sem sucesso dados invalidos', async ({ page }) => {
    // const loginPage: LoginPage = new LoginPage(page)
    await loginPage.go()
    await loginPage.loginFailIvalidData('teste@gmail.com', 'teste1234', 'Dados incorretos!')
});