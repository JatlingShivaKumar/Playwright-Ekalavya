import { Page, Locator } from '@playwright/test'


export class StudentPage{
    private page: Page
    private studentDetails: Locator
    private selectCourse
    private classDropdown
    private rightArrow

    private addNewStudent 
    private categoryDropdown
    private enrolled
    private admissionNumber
    private rollNumber
    private studentName
    private gender
    private addStudent


   

    constructor(page: Page){
        this.page = page
        this.studentDetails = page.locator("a[ng-click='redirectToStudents()']")
        this.selectCourse = page.selectOption('select.rectangleStudSelecedCourseClass', { label: 'TS SSC' })
        this.classDropdown = page.locator('select[ng-model="selectedClassObj"]')
        this.rightArrow = page.locator('.stud-ovalContainer')
        this.addNewStudent = page.locator('.add-stud-rectangle-1.cursor')
        this.categoryDropdown = page.locator( "select[ng-change='selectStudentsBySection(selecteSecforStudent)']")
        this.enrolled = page.locator("//div[@id='addStudents']//select[2]")
        this.admissionNumber = page.locator('input[ng-model="studentsArrObj.admissionNumber"]')
        this.rollNumber = page.locator("input[ng-model='studentsArrObj.rollNumber']")
        this.studentName = page.locator("input[ng-model='studentsArrObj.studentName']")
        this.gender = page.locator('input[type="radio"][value="M"]')
        this.addStudent = page.locator(".btn.btn-success[ng-click='saveStudents()']")
    }

    async LunchUrl(url: string){
    this.page.goto(url)
   }

   
   async getStudentDetails(){
    await this.studentDetails.click()
    await this.selectCourse
    await this.classDropdown.selectOption({ label: 'Class 8' })
    await this.rightArrow.click()
   }

   async addNewStudents(admissionNumber: string, rollNumber: string, studentName: string){
    await this.addNewStudent.click()
    await this.categoryDropdown.click()
    await this.categoryDropdown.selectOption({ label: 'A'})
    await this.enrolled.selectOption({ label: 'SSC'})
    await this.admissionNumber.fill(admissionNumber)
    await this.rollNumber.fill(rollNumber)    
    await this.studentName.fill(studentName)
    await this.gender.check()
    await this.addStudent.click()
   }





}

