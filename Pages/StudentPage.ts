import { Page, Locator } from '@playwright/test'

export class StudentPage{
    private page: Page
    private studentDetails: Locator
   

    constructor(page: Page){
        this.page = page
        this.studentDetails = page.locator("a[ng-click='redirectToRankrPlus()']")
    }

    async LunchUrl(url: string){
    this.page.goto(url)
   }

   async getStudentDetails(){
    await this.studentDetails.click()
   }





}

