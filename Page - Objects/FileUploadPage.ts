import {Page,Locator} from "@playwright/test"

export class FileUploadPage{

    private readonly page:Page
    private readonly inputArea:Locator
    private readonly successFileArea:Locator

    constructor (page:Page){
        this.page = page 
        this.inputArea = this.page.locator('iframe').contentFrame().getByText('Browse files')
        this.successFileArea = this.page.locator('iframe').contentFrame().locator('section').locator('.file-info')
    }

    async uploadFiles () {
        const fileChooserPromise = this.page.waitForEvent('filechooser')
        await this.inputArea.click()  
        const fileChooser = await fileChooserPromise
        await fileChooser.setFiles('C:/Users/admin/OneDrive/Documents/Task 2/Taks-2/Data/Test Files/TEST.txt')
        return await this.successFileArea.innerText()
    }
    









}
