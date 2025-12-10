import { Locator, Page } from '@playwright/test'

export class EkalavyaPage {
  private readonly page: Page;


  private readonly ekalavyaPlus: Locator
  private readonly gotoMyClass: Locator
  private readonly classCourse: Locator
  private readonly classClassList: Locator
  /*****************************************/

  private readonly studentAttendance: Locator
  private readonly studentAttCourse: Locator
  private readonly studentAttClass: Locator
  /*****************************************/
  private readonly homeworkAssignment: Locator
  private selCourse: Locator
  private Class
  private goBackToEkal
  /*****************************************/
  private readonly feeManagement: Locator
  private feemodule
  private feeStructure



  constructor(page: Page) {
    this.page = page;

    /******************************************************************/
    this.ekalavyaPlus = page.locator("//a[normalize-space()='EkaLavya+']")
    this.gotoMyClass = page.locator("div[ng-click='goToMyClasses()']")
    this.classCourse = page.locator("//select[@ng-model='selectedCourseOb']")
    this.classClassList = page.locator("(//select[@ng-model='selectedClassOb'])[1]")
    /******************************************************************/
    this.studentAttendance = page.locator("div[ng-click='goToAttendance()']")
    this.studentAttCourse = page.locator("//select[@ng-model='selectedCourseOb']")
    this.studentAttClass = page.locator("//select[@ng-model='selectedClassOb']")
    /******************************************************************/
    this.homeworkAssignment = page.locator("//div[@ng-click='goToHomework()']")
    this.selCourse = page.locator("//select[@ng-model='selCourse']")
    this.Class = page.locator("//select[@name='selectClassob']")
    this.goBackToEkal = page.locator("//p[normalize-space()='Go Back to Ekalavya+']")
    /******************************************************************/
    this.feeManagement = page.locator("//div[@ng-click='goToFeeManage()']")
    this.feemodule = page.locator(".col-xs-12")
    this.feeStructure = page.locator("div[ng-click='goToFeeStructure()']")







  }

  async LunchUrl(url: string): Promise<void> {
    await this.page.goto(url)
  }


  async getEkalavyaPlusPage(): Promise<void> {
    await this.ekalavyaPlus.click()
  }

  async MyClass(): Promise<void> {
    await this.gotoMyClass.click()
    await this.classCourse.selectOption({ index: 1 })
    await this.classClassList.selectOption({ index: 5 })
  }

  async StudentAttendance(): Promise<void> {
    await this.studentAttendance.click()
    await this.studentAttCourse.selectOption({ index: 1 })
    // await this.studentAttClass.selectOption({ index: 6 })
  }

  async verifyAllClassesForStudentAttendance(): Promise<void> {
    const classDropdownSelector = 'select[ng-model="selectedClassOb"]'

    const allOptions = await this.page.locator(`${classDropdownSelector} option`).allInnerTexts()
    const classes = allOptions.map(o => o.trim()).filter(o => o !== '-- Select Class --')

    console.log("🎓 Classes found:", classes)

    for (const className of classes) {
      console.log(`🧪 Checking class: ${className}`)
      const classDropdown = this.page.locator(classDropdownSelector)
      try {
        await classDropdown.waitFor({ state: 'visible', timeout: 5000 })
        await classDropdown.selectOption({ label: className })
        await this.page.waitForTimeout(2000)

        const studentTable = this.page.locator('#studentTable')
        const noDataMsg = this.page.locator('text=No records found')

        if (await studentTable.isVisible()) {
          console.log(`✅ ${className} data loaded successfully`)
        } else if (await noDataMsg.isVisible()) {
          console.log(`⚠️ ${className}: No records found`)
        } else {
          console.log(`ℹ️ ${className}: Unknown state`)
        }

      } catch (error) {
        const errorMsg = (error instanceof Error) ? error.message : String(error)
        console.error(`❌ Failed to verify ${className}:`, errorMsg)
      }
    }
    console.log("🎯 Completed checking all classes!")
    await this.goBackToEkal.click()
  }
  /*****************************************/

  async homeworkAssignments() {
    await this.homeworkAssignment.click()
    await this.selCourse.selectOption({ index: 1 })
    // await this.Class.selectOption({ index:5})
  }

  async verifyAllClassesForHomeworkAssignments(): Promise<void> {
    const dropdownSelector = 'select[name="selectClassob"]'

    const initialDropdown = this.page.locator(dropdownSelector)
    const options = await initialDropdown.locator('option').allInnerTexts()

    console.log("🎓 Classes found:", options)

    for (let i = 1; i < options.length; i++) {
      const className = options[i].trim();
      console.log(`🧪 Checking class: ${className}`)

      try {
        if (this.page.isClosed()) {

          console.log("⚠️ Page already closed. Stopping loop.")
          break;
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

  async FeeMangement() {
    await this.feeManagement.click()
    await this.feemodule.last().click()
    await this.feeStructure.click

    const moduleTiles = this.page.locator('.rankrPlusTile')

    // Get total count
    const moduleCount = await moduleTiles.count()
    console.log(`Total Modules Found: ${moduleCount}`)

    // Repeat the entire flow 4 times
    for (let round = 1; round <= 4; round++) {
      console.log(`\n🔁 Starting iteration ${round}...\n`)

      // Loop through each module tile
      for (let i = 0; i < moduleCount; i++) {
        console.log(`➡️ Opening module ${i + 1}`)

        const module = moduleTiles.nth(i);

        // Wait for module to be visible and click
        await module.waitFor({ state: 'visible' })
        await module.click();

        // Optional: wait for a specific identifier inside module
        // (Replace with your actual selector or element inside that module)
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.waitForTimeout(2000);

        // Example check (you can replace it as needed)
        const header = this.page.locator('h1, h2, p'); // adjust selector
        if (await header.count() > 0) {
          console.log(`✅ Module ${i + 1} loaded successfully`);
        } else {
          console.warn(`⚠️ Module ${i + 1} may not have loaded properly`);
        }

        // Go back to main page
        await this.page.goBack({ waitUntil: 'domcontentloaded' });

        // Wait before next module
        await this.page.waitForTimeout(2000);
      }

      console.log(`🎯 Completed iteration ${round}`);
    }

    console.log('\n✅ Finished all 4 rounds successfully!')
  }



}