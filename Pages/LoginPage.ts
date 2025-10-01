import { Locator, Page } from "@playwright/test"

export class LoginPage{
   
    private page
    private userName: Locator
    private password
    private loginButton
    homePageIndentifier

    constructor(page: Page){
        this.page = page
        this.userName = page.getByPlaceholder("User name")
        this.password = page.getByPlaceholder("Password")
        this.loginButton = page.getByRole('button', { name: 'Login' })
        this.homePageIndentifier = page.locator('a.active')
    }

    async LunchUrl(url: string){
    this.page.goto(url)
   }
    async vaildLogin(userName: string, password: string){
    await this.userName.fill(userName)
    await this.password.fill(password)
    await this.loginButton.click()
   }
}