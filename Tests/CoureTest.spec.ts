import { test } from '@playwright/test'
import { CoursePage } from '../Pages/CoursePage'
import loginData from '../TestData/Login.json'
import { LoginPage } from '../Pages/LoginPage'


let coursePage: CoursePage
let loginPage: LoginPage



test.beforeEach(async ({ page })=>{
    coursePage = new CoursePage(page)
    loginPage = new LoginPage(page)
    await coursePage.LunchUrl(loginData.url)
})

test("Course Page Test Case", async ({ page })=>{
    await loginPage.vaildLogin(loginData.userName, loginData.password)
    await page.waitForTimeout(3000)
    await coursePage.getCouresDetails()
    await coursePage.frameHandle()
    await page.waitForTimeout(1000)
    
})