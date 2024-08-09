import {test, expect} from '@playwright/test'
import { PageManager } from '../page-objects/pageManager'
import {faker} from '@faker-js/faker'
//import {NavigationPage} from '../page-objects/navigationPage' 
//import { FormlayoutsPage} from '../page-objects/formlayoutsPage'
//import { DatepickerPage } from '../page-objects/datepickerPage'

test.beforeEach(async({page}) => {
    await page.goto('/')
})

test('navigates to form page @smoke', async({page}) => {
    const pm = new PageManager(page)
    //const navigateTo =new NavigationPage(page)
    await pm.navigateTo().formLayoutsPage()
    await pm.navigateTo().datepickerPage()
    await pm.navigateTo().smartTablePage()
    await pm.navigateTo().toastrPage()
    await pm.navigateTo().tooltipPage()
})

test('parameteized methods', async({page}) => {
    const pm = new PageManager(page)
    //const navigateTo = new NavigationPage(page)
    //const onFormLayoutsPage = new FormlayoutsPage(page)
    //const onDatepickerPage = new DatepickerPage(page)

    const randomFullName = faker.person.fullName()
    const randomEmail = faker.internet.email(randomFullName)//`${randomFullName.replace(' ','')}${faker.number.int(99)}@test.com`.toLowerCase()
    
    await pm.navigateTo().formLayoutsPage()
    await pm.onFormLayoutsPage().submitUsingTheGridFormWithCredentialsAndSelectOption(process.env.USERNAME,process.env.PASSWORD,'Option 2')
    //await page.screenshot({path: 'screenshots/formsLayoutsPage.png'})
    //const buffer =await page.screenshot()
    //console.log(buffer.toString('base64'))
    await pm.onFormLayoutsPage().submitInlineFormWithNameEmailAndCheckbox(randomFullName,randomEmail,false)
    //await page.locator('nb-card', {hasText: "Inline form"}).screenshot({path:"screenshots/inlineForm.png"})
    //await pm.navigateTo().datepickerPage()
    //await pm.onDatepickerPage().selectCommonDatePickerDateFromToday(5)
    //await pm.onDatepickerPage().selectDatePickerWithRangeFromToday(1,6)
})

test.only('testing with argos CI', async({page}) => {
    const pm = new PageManager(page)
    //const navigateTo =new NavigationPage(page)
    await pm.navigateTo().formLayoutsPage()
    await pm.navigateTo().datepickerPage()
    //await pm.navigateTo().smartTablePage()
    //await pm.navigateTo().toastrPage()
    //await pm.navigateTo().tooltipPage()
})

