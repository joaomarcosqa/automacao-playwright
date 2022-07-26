import { Page, expect } from "@playwright/test";
import { LoginElements } from "../elements/login.spec";

export class LoginPage {
    readonly page : Page

    constructor(page: Page){
        this.page = page
    }

    loginElements = new LoginElements();

    async go() {
        await this.page.goto(this.loginElements.baseUrl);
        // const loginPage = this.page.locator('loginButton');
        // await expect(loginPage).toHaveText('Entrar')
    }

    async loginSucess(user: string, password: string) {
        await this.page.fill(this.loginElements.emailTextfield, user)
        await this.page.fill(this.loginElements.passwordTextfield, password)
        await this.page.click(this.loginElements.loginButton)
        // Criar metodo de validar login com sucesso
        // const loginPage = this.page.locator('text=Acessar ou criar conta');
        // await expect(loginPage).toHaveText('Acessar ou criar conta')
    }
    
    async loginFailInvalidEmail(user: string, password: string, target: string) {
        await this.page.fill(this.loginElements.emailTextfield, user)
        await this.page.fill(this.loginElements.passwordTextfield, password)
        await this.page.click(this.loginElements.loginButton)
        const errorMessage = this.page.locator(this.loginElements.messageInvalidEmail);
        await expect(errorMessage).toHaveText(target)
    }

    async loginFailIvalidData(user: string, password: string, target: string) {
        await this.page.fill(this.loginElements.emailTextfield, user)
        await this.page.fill(this.loginElements.passwordTextfield, password)
        await this.page.click(this.loginElements.loginButton)
        const errorMessage = this.page.locator(this.loginElements.messageInvalidData);
        await expect(errorMessage).toHaveText(target)
    }
}