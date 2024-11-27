import {Page,Locator} from "@playwright/test"

export class FileUploadPage{

    private readonly page:Page
    private readonly inputArea:Locator
    private readonly successFileArea:Locator

    constructor (page:Page){
        this.page = page 
        this.inputArea = this.page.getByLabel('Browse files')
        this.successFileArea = this.page.locator('.file-info')
    }

    async uploadFiles () {
        
        await this.inputArea.dispatchEvent("dblclick")        
       
    }
    









}
