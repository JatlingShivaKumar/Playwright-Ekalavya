import { test, expect } from '@playwright/test'
import { UserTable } from '../Pages/UserTable'

let userTable: UserTable

test.beforeEach(async ({ page })=>{ 
userTable = new UserTable(page)                       
    await userTable.navigate()    
})


test("Fill User table",async ({ page })=>{
    await userTable.selectUserByName("John.Smith")
})