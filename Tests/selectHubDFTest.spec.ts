import { test, expect } from '@playwright/test'
import { HubPage } from '../Pages/DummyTableHubPage'
import loginData from '../TestData/Hub.json'

let hubPage: HubPage

test.beforeEach(async ({ page })=>{
    hubPage = new HubPage(page)
    await hubPage.navigate()
    
})

test("select hub page", async ({ page })=>{
      await hubPage.fillEmail("shiva@test.com")
      await hubPage.password.fill("Test@123")
      await hubPage.company.fill("TCS")
      await hubPage.mobile.fill("9876543210")
      await hubPage.country.fill("India")    
})

