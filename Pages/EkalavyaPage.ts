import { Page } from '@playwright/test'

export class EkalavyaPage{

    private page: Page
    private ekalavya


    constructor(page: Page){
        this.page = page
                this.ekalavya = page.locator("a[ng-click='redirectToRankrPlus()']")
    }


    async LunchUrl(url:string){
        this.page.goto(url)
    }
   
    async getEkalavya(){
        await this.ekalavya.click()
    }















}