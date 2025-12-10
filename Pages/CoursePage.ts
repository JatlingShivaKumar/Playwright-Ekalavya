import { Page, Locator } from '@playwright/test'


export class CoursePage{

    private page: Page  
    private courseDetails: Locator    
    private selectCourse
    private selectClass
    private selectSubject
    private selectContent
    private rightArrow
    private videoIframe: Locator
    private playButton: Locator
    private readonly iframeSelector = '(//iframe)[1]'
    private readonly playButtonSelector = '.PlayButton_module_playIcon__c3cfd43a'
    private readonly lessonPlanTabsSelector = '.overflow'
    private lessonPlanTabs: Locator


     constructor(page: Page){
        this.page = page
        this.courseDetails = page.locator("a[ng-click='redirectToContent()']")
        this.selectCourse =  page.selectOption('#courseSelect', { index: 0 })
        this.selectClass = page.selectOption('#classSelect', { index: 5})
        this.selectSubject = page.selectOption('#subjectSelect', { index: 1})
        this.selectContent = page.selectOption('#contentSelect', { index: 0})
        this.rightArrow = page.locator('.course-oval-1')
        this.videoIframe = page.locator(this.iframeSelector)
        this.playButton = page.frameLocator(this.iframeSelector).locator(this.playButtonSelector)
        this.lessonPlanTabs = page.locator(this.lessonPlanTabsSelector)
    }
    

 async LunchUrl(url: string){
    this.page.goto(url)
   }

async getCouresDetails(){
    await this.courseDetails.click()
    await this.selectCourse
    await this.selectClass
    await this.selectSubject
    await this.selectContent
    await this.rightArrow.click()
}

async lessonPlantab(){
   const tabCount = await this.lessonPlanTabs.count()
   for(let i = 0; i < tabCount; i++){
      // Example: await this.lessonPlanTabs.nth(i).click()
   } 
}

async verifyAllClassesForCourse(): Promise<void> {
   const dropdownSelector = 'select[name="courseSelect"]'
  
  const initialDropdown = this.page.locator(dropdownSelector)
  const options = await initialDropdown.locator('option').allInnerTexts()

  console.log("🎓 Classes found:", options)

  for (let i = 1; i < options.length; i++) {
    const className = options[i].trim()
    console.log(`🧪 Checking class: ${className}`)

    try {
      if (this.page.isClosed()) {

        console.log("⚠️ Page already closed. Stopping loop.")
        break
      }

      const classDropdown = this.page.locator(dropdownSelector)
      await classDropdown.waitFor({ state: "visible" })
      await classDropdown.selectOption({ index: i })

      await this.page.waitForTimeout(2500)

      const studentTable = this.page.locator("#studentTable")
      if (await studentTable.isVisible()) {
        console.log(`✅ Data found for ${className}`)
      } else {
        console.log(`⚠️ No data found for ${className}`)
      }
    } catch (error: any) {
      console.log(`❌ Failed for ${className}: ${error.message}`)
    }
  }

  console.log("🎯 Finished verifying all classes!")
}



async frameHandle(){
   console.log(`Waiting for iframe: ${this.iframeSelector} to appear...`)
   await this.videoIframe.waitFor({ state: 'visible' })
   console.log(`Attempting to click play button: ${this.playButtonSelector} inside the frame...`)
   await this.playButton.click()
   console.log("Play button clicked successfully.")
}

}