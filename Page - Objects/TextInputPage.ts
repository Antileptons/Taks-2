import {Page,Locator} from "@playwright/test"
import { randomFullName } from "../Data/TestData"

export class TextInputPage {
    private readonly page:Page
    private readonly textBox: Locator
    private readonly changeButton: Locator

    constructor (page:Page){
        this.page = page 
        this.textBox = this.page.getByPlaceholder('MyButton')
        this.changeButton = this.page.getByRole('button')
    }

    async inputRandomData () {
        await this.textBox.fill(randomFullName)
    }

    async clickButton () {
        await this.changeButton.click()
    }

    async textBoxContent () {
        const content = await this.textBox.inputValue()
        return content
    }

    async buttonContent () {
        const content = await this.changeButton.textContent()
        return content
    }










}