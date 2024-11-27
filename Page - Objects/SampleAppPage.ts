import {Page,Locator} from "@playwright/test"
import { samplePassword, randomUserName } from "../Data/TestData"

export class SampleAppPage {
    private readonly page:Page
    private readonly userNameBox: Locator
    private readonly passwordBox: Locator
    private readonly logInButton: Locator

    constructor (page:Page){
        this.page = page 
        this.userNameBox = this.page.getByPlaceholder('User Name')
        this.passwordBox = this.page.getByPlaceholder('********')
        this.logInButton = this.page.getByRole('button')
    }

    async randomUsernameLogIn () {
        await this.userNameBox.fill(randomUserName)
        await this.passwordBox.fill(samplePassword)
        await this.logInButton.click()

    }

    async logInButtonValue () {
        const content = this.logInButton.textContent()
        return content
    }

    






    
}