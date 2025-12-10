import { Locator, Page } from "@playwright/test"




export class HubPage {
    private page
    private PracticePage
    private form



 constructor(page: Page) {
        this.page = page
        this.PracticePage = page.locator("//span[normalize-space()='Practice Page']")
        this.form = page.getByPlaceholder("Enter email")
 }

    async LunchUrl(url: string) {
        this.page.goto(url)
    }

async practicePage(){
    await this.PracticePage.click()
    await this.form.fill("shiva")
}





}