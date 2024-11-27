import {Page,Locator, expect} from "@playwright/test"


export class AJAXDataPage{

    private readonly page:Page
    private readonly ajaxButton: Locator
    private readonly successMessage: Locator

    constructor (page:Page){
        this.page = page 
        this.ajaxButton = this.page.getByRole('button',{name:"Button Triggering AJAX Request"})
        this.successMessage = this.page.locator('.bg-success')
    }


    async clickOnAjaxButton () {
        await this.ajaxButton.click()
        await this.successMessage.waitFor()
        const sucMessage = await this.successMessage.innerText()
        return sucMessage
    }







}

