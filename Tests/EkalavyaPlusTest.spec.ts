import { test } from '@playwright/test'
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

test("Ekalavya Plus Login", async ({ page })=>{
    await loginPage.vaildLogin(loginData.userName, loginData.password)  
    await page.waitForTimeout(3000)
    ekalavyaPage.getEkalavyaPlusPage()
    
 })

test("Ekalavya Plus My Class", async ({ page})=>{
    await loginPage.vaildLogin(loginData.userName, loginData.password)
    await page.waitForTimeout(3000)
    ekalavyaPage.getEkalavyaPlusPage()
    await page.waitForTimeout(3000)
    ekalavyaPage.MyClass()
})


test("Ekalavya Plus Student Attendance", async ({ page })=>{
    await loginPage.vaildLogin(loginData.userName, loginData.password)
    await page.waitForTimeout(3000)
    ekalavyaPage.getEkalavyaPlusPage()
    ekalavyaPage.StudentAttendance()    
    await page.waitForTimeout(3000)
    // ekalavyaPage.StudentAttendance()
    ekalavyaPage.verifyAllClassesForStudentAttendance()
    await page.waitForTimeout(500000)
}) 

    
test("Ekalavya Plus Homework/Assignment", async ({ page })=>{
    await loginPage.vaildLogin(loginData.userName, loginData.password)
    await page.waitForTimeout(3000)
    ekalavyaPage.getEkalavyaPlusPage()
    ekalavyaPage.homeworkAssignments()
    await page.waitForTimeout(3000)
    ekalavyaPage.verifyAllClassesForHomeworkAssignments()
    await page.waitForTimeout(500000)
})

test("Ekalavya Plus Fee Mangement", async ({ page })=>{
    await loginPage.vaildLogin(loginData.userName, loginData.password)
    await page.waitForTimeout(3000)
    ekalavyaPage.getEkalavyaPlusPage()
    ekalavyaPage.FeeMangement()
})