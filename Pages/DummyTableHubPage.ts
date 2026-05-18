import { Locator, Page } from "@playwright/test"




export class HubPage {
    private page
    // private PracticePage
    readonly form: Locator;
  readonly email: Locator;
  readonly password: Locator;
  readonly company: Locator;
  readonly mobile: Locator;
  readonly country: Locator;




 constructor(page: Page) {
        this.page = page

         this.form = page.locator('.userform')

         this.email = this.form.getByPlaceholder('Enter email')
    this.password = this.form.getByPlaceholder('Enter Password')
    this.company = this.form.getByPlaceholder('Enter your company').first()
    this.mobile = this.form.getByPlaceholder('Enter your mobile number').first()
     this.country = page.getByLabel('Country', { exact: true })
    this.page.getByRole('button', { name: 'Submit' }).click()
        
 }

    // async LunchUrl(url: string) {
    //     this.page.goto(url)
    // }

async navigate() {
    await this.page.goto('https://selectorshub.com/xpath-practice-page/');
  }

  async fillEmail(value: string) {
    await this.email.click(); // remove readonly
    await this.email.fill(value);
  }

  async fillForm(data: {
    email: string;
    password: string;
    company: string;
    mobile: string;
    country: string;
  }) {
    await this.fillEmail(data.email);
    await this.password.fill(data.password);
    await this.company.fill(data.company);
    await this.mobile.fill(data.mobile);
    await this.country.fill(data.country);
  }

//   async submit() {
//     await this.submitBtn.click();
//   }
}





