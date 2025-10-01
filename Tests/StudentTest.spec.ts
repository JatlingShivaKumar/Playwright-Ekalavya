import { test } from '@playwright/test'
import { CoursePage } from '../Pages/CoursePage'
import loginData from '../TestData/Login.json'
import { LoginPage } from '../Pages/LoginPage'
import { StudentPage } from '../Pages/StudentPage'


let studentPage: StudentPage
let loginPage: LoginPage

test.beforeEach(async ({ page})=>{
    studentPage = new StudentPage(page)
    loginPage = new LoginPage(page)
    await studentPage.LunchUrl(loginData.url)
})

test("Student Page Test Case", async ({ page })=>{
    await loginPage.vaildLogin(loginData.userName, loginData.password)
    await page.waitForTimeout(4000)
    studentPage.getStudentDetails()
})