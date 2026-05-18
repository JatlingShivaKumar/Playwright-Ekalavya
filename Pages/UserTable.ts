import { Locator, Page } from "@playwright/test"


export class UserTable{
      private page
      private table: Locator
      private selectAll: Locator
      private allRowsCheckbox: Locator


constructor(page: Page) {
     this.page = page
     this.table = page.locator("#resultTable")
     this.selectAll = this.table.locator('#ohrmList_chkSelectAll')
     this.allRowsCheckbox = this.table.locator('input[name="chkSelectRow[]"]')
}

async navigate() {
    await this.page.goto('https://selectorshub.com/xpath-practice-page/');
  }

  async selectAllUsers(){
    await this.selectAll.check()
  }

  async selectUserByName(userName: string){
    const row = this.table.locator('tr',{has: this.page.locator('td a', {hasText: userName})})
    await row.locator('input[type="checkbox"]').click()
    }

   async getAllUsername(){
    return await this.table.locator('tbody tr td:nth-child(2)').allTextContents()
   }






  




}