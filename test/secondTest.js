const {Builder, By, Key} = require ("selenium-webdriver")
const assert = require ("assert")
var should = require ("chai").should()

const webdriver = require('selenium-webdriver')

//Bloco Describe: Agrupamento de casos de teste. Funcionalidade a ser testada
describe("Segundo teste", function(){
    //Bloco IT - Teste Individual / Caso de Teste
    it("Segundo caso de teste/1", async function(){
        //Declarar o navegador
        let driver = await new webdriver.Builder().forBrowser("firefox").build()

        //Navegar até o site
        await driver.get("https://herziopinto.github.io/lista-de-tarefas/")

        //Adicionar uma tarefa
        await driver.findElement(By.id("inputTask")).sendKeys("Aprender Selenium", Key.RETURN)

        //Assertion
        let seleniumText = await driver.findElement(By.xpath("/html/body/div/section/ul/li/label")).getText().then(function(value){
            return value
        })

        //Assertion usando chai
        seleniumText.should.equal("Aprender Selenium")

        //Dar uma pausa na execução da função
        // await driver.sleep(10000)

        //Fechar o navegador
        await driver.quit()
    })

    it("Segundo caso de teste/2", async function(){
        //Declarar o navegador
        let driver = await new webdriver.Builder().forBrowser("firefox").build()

        //Navegar até o site
        await driver.get("https://herziopinto.github.io/lista-de-tarefas/")

        //Adicionar uma tarefa
        await driver.findElement(By.id("inputTask")).sendKeys("Aprender Selenium", Key.RETURN)

        //Assertion
        let seleniumText = await driver.findElement(By.xpath("/html/body/div/section/ul/li/label")).getText().then(function(value){
            return value
        })

        //Assertion usando chai
        seleniumText.should.equal("Aprender Selenium")

        //Dar uma pausa na execução da função
        // await driver.sleep(10000)

        //Fechar o navegador
        await driver.quit()
    })
   
});
