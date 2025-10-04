import { test, expect  } from '@playwright/test'
import { EkalavyaPage } from '../Pages/EkalavyaPage'
import { LoginPage } from '../Pages/LoginPage'
import loginData from '../TestData/Login.json'

let ekalavyaPage: EkalavyaPage
let loginPage: LoginPage

test.beforeEach(async ({ page})=>{
    ekalavyaPage = new EkalavyaPage(page)
    loginPage = new LoginPage(page)
    await ekalavyaPage.LunchUrl(loginData.url)
})

test("Verify Ekalavya Plus Page", async ({ page })=>{
    await loginPage.vaildLogin(loginData.userName, loginData.password) 
    await ekalavyaPage.getEkalavya()
})


    
