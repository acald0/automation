const {By, Builder, Browser, until} = require('selenium-webdriver')

let driver;

beforeEach(async () => {
    driver = await new Builder().forBrowser(Browser.CHROME).build()
})

afterEach(async () => {
    await driver.quit()
})

describe("Testing the Movies App", () => {
    test("can delete a movie", async () => {
        await driver.get("http://localhost:3000/")
        await driver.findElement(By.css('input[name="movieTitle"]')).sendKeys("Pretty in Pink")
        await driver.sleep(2000)
        await driver.findElement(By.xpath('//button[@type="submit"]')).click()
        await driver.sleep(2000)
        await driver.findElement(By.className('delete-btn')).click()
        await driver.sleep(2000)
        expect(await driver.findElement(By.className('delete-btn')).isDisplayed()).toBe(false)
    });

    // test("notifications are displayed", async () => {
    //     await driver.get("http://localhost:3000/")
    //     await driver.findElement(By.css('input[name="movieTitle"]')).sendKeys("Pretty in Pink")
    //     await driver.sleep(2000)
    //     await driver.findElement(By.xpath('//button[@type="submit"]')).click()
    //     await driver.sleep(2000)
    //     await driver.findElement(By.xpath('//button[@class="delete-btn"]')).click()
    //     expect(await driver.findElement(By.id("message")).isDisplayed()).toBe(true)
    // }),

    // test("can cross off a movie", async () => {
    //     await driver.get("http://localhost:3000/")
    //     await driver.findElement(By.css('input[name="movieTitle"]')).sendKeys("Pretty in Pink")
    //     await driver.sleep(2000)
    //     await driver.findElement(By.xpath('//button[@type="submit"]')).click()
    //     await driver.sleep(2000)
    //     await driver.findElement(By.xpath('//input[@type="checkbox"]')).click()
    //     expect(await driver.findElement(By.xpath('//input[@type="checkbox"]')).isSelected()).toBe(true)
    // })


})

//3 tests: could be- crossing off a movie, deleting a movie, or notifications are displayed

// await driver.findElement(By.xpath('//input[@type="checkbox"]')).click()