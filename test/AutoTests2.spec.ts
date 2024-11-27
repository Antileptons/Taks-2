import {test,expect} from '@playwright/test'
import { uitestingplaygroundlink } from "../Data/TestData"
import { HomePage } from '../Page - Objects/HomePage'
import { FileUploadPage } from '../Page - Objects/FileUploadPage'

test.beforeEach (async({page})=>{
    await page.goto(uitestingplaygroundlink)
})

test ('File Upload',async ({page})=>{
    const homePage = new HomePage(page)
    await homePage.gotofileUploadPage()
    const fileUploadPage = new FileUploadPage(page)
    await fileUploadPage.uploadFiles()

})
