import {Page,Locator} from "@playwright/test"
import { link } from "fs"

export class HomePage {

    private readonly page:Page
    private readonly textInputLink: Locator
    private readonly sampleAppLink: Locator
    private readonly fileUploadLink: Locator
    private readonly ajaxDataLink: Locator
    
    constructor (page:Page) {
        this.page = page
        this.textInputLink = this.page.getByRole('link',{name:"Text Input"})
        this.sampleAppLink = this.page.getByRole('link',{name:"Sample App"})
        this.fileUploadLink = this.page.getByRole('link',{name:"File Upload"})
        this.ajaxDataLink = this.page.getByRole('link',{name:"AJAX Data"})
    }

    async gototextInputPage () {
        await this.textInputLink.click()
    }

    async gotosampleAppPage () {
        await this.sampleAppLink.click()
    }
    
    async gotofileUploadPage () {
        await this.fileUploadLink.click()
    }

    async gotoajaxDataLinkPage () {
        await this.ajaxDataLink.click()
    }









}