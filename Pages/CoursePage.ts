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

async frameHandle(){
//    console.log(`Waiting for iframe: ${this.iframeSelector} to appear...`)
   await this.videoIframe.waitFor({ state: 'visible' })
//    console.log(`Attempting to click play button: ${this.playButtonSelector} inside the frame...`)
   await this.playButton.click()
//    console.log("Play button clicked successfully.")
}

}