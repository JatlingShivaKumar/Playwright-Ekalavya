import { test, expect } from '@playwright/test'
import { HubPage } from '../Pages/HubPage'
import loginData from '../TestData/Hub.json'

let hubPage: HubPage

test.beforeEach(async ({ page })=>{
    hubPage = new HubPage(page)
    await hubPage.LunchUrl(loginData.page.url)

})

test("select hub page", async ({ page })=>{
      await hubPage.practicePage()

    
})