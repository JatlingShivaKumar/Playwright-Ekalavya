import { expect, test } from '@playwright/test'
import loginData from '../TestData/Login.json'
import StudentDetails  from '../TestData/StudentDetails.json'
import { LoginPage } from '../Pages/LoginPage'
import { StudentPage } from '../Pages/StudentPage'


let studentPage: StudentPage
let loginPage: LoginPage

test.beforeEach(async ({ page})=>{
    studentPage = new StudentPage(page)
    loginPage = new LoginPage(page)
    await studentPage.LunchUrl(loginData.admin.url)
})

test("Student Page Test Case", async ({ page })=>{
    await loginPage.vaildLogin(loginData.admin.userName, loginData.admin.password)
    await page.waitForTimeout(4000)
    studentPage.getStudentDetails()
    await page.waitForTimeout(1000)
    await studentPage.addNewStudents(StudentDetails.admissionNumber, StudentDetails.rollNumber, StudentDetails.studentName)
    await page.waitForTimeout(3000)
    // await studentPage.verifyStudentAdded(StudentDetails.studentName)
})
  