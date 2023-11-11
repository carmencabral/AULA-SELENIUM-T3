const {Builder, By, Key} = require ("selenium-webdriver")
const assert = require ("assert")
var should = require ("chai").should()

const webdriver = require('selenium-webdriver')
require('selenium-webdriver/chrome')
global.driver = {}

async function example() {
    //Declarar o navegador
    let driver = await new webdriver.Builder().forBrowser("chrome").build()
    // await driver.manage()
    // driver = await new webdriver.Builder().forBrowser('chrome').build()
    // await driver.manage().window().setSize(1600, 900)

    //Navegar até o site
    await driver.get("https://herziopinto.github.io/lista-de-tarefas/")

    //Adicionar uma tarefa
    await driver.findElement(By.id("inputTask")).sendKeys("Aprender Selenium", Key.RETURN)

    //Assertion
    let seleniumText = await driver.findElement(By.xpath("/html/body/div/section/ul/li/label")).getText().then(function(value){
        return value
    })

    //Assertion usando o node puro
    // assert.strictEqual(seleniumText, "Aprender Selenium")

    //Assertion usando chai
    seleniumText.should.equal("Aprender Selenium")

    //Dar uma pausa na execução da função
    await driver.sleep(10000)

    //Fechar o navegador
    await driver.quit()
}
example()