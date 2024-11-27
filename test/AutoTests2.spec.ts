import {test,expect} from '@playwright/test'
import { uitestingplaygroundlink,sucMessageExp,fileNameExpected } from "../Data/TestData"
import { HomePage } from '../Page - Objects/HomePage'
import { FileUploadPage } from '../Page - Objects/FileUploadPage'
import { AJAXDataPage } from '../Page - Objects/AJAXDataPage'


test.beforeEach (async({page})=>{
    await page.goto(uitestingplaygroundlink)
})

test ('File Upload',async ({page})=>{
    const homePage = new HomePage(page)
    await homePage.gotofileUploadPage()
    const fileUploadPage = new FileUploadPage(page)
    const fileName = await fileUploadPage.uploadFiles()
    expect (fileName).toEqual(fileNameExpected)
})


test ('Verify "AJAX Data Load" Functionality',async ({page})=>{
    test.setTimeout(50_000)
    const homePage = new HomePage(page)
    await homePage.gotoajaxDataLinkPage()
    const ajaxDataPage = new AJAXDataPage(page)
    const sucMessage = await ajaxDataPage.clickOnAjaxButton()
    expect(sucMessage).toEqual(sucMessageExp)
})