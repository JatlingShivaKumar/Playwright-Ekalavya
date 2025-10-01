import { test, expect } from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage'
import loginData from '../TestData/Login.json'

let logingPage: LoginPage

test.beforeEach(async ({ page })=>{
    logingPage = new LoginPage(page)
    await logingPage.LunchUrl(loginData.url)

})


test("Vaild Login Test Case", async ({ page })=>{
    await logingPage.vaildLogin(loginData.userName, loginData.password)
    await expect(logingPage.homePageIndentifier).toBeVisible()
})