import { test } from '@playwright/test'
import { CoursePage } from '../Pages/CoursePage'
import loginData from '../TestData/Login.json'
import { LoginPage } from '../Pages/LoginPage'


let coursePage: CoursePage
let loginPage: LoginPage



test.beforeEach(async ({ page })=>{
    coursePage = new CoursePage(page)
    loginPage = new LoginPage(page)
    await coursePage.LunchUrl(loginData.admin.url)
})

 test("Course Page Test Case",  ({ page })=>{
     loginPage.vaildLogin(loginData.admin.userName, loginData.admin.password)
     page.waitForTimeout(3000)
     coursePage.getCouresDetails()
     coursePage.frameHandle()
     page.waitForTimeout(1000)
    
})