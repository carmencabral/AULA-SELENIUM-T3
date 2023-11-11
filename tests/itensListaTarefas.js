const {Builder, By, Key} = require ("selenium-webdriver")
const assert = require ("assert")
var should = require ("chai").should()

async function example() {
    //Declarar o navegador
    let driver = await new Builder().forBrowser("firefox").build();
    //Navegar até o site
    await driver.get("https://herziopinto.github.io/lista-de-tarefas/")

    //2) Criar 10 itens na lista de tarefas
    let lista = ["Aprender Selenium", "Aprender HTML", "Aprender CSS", "Aprender JS", "Aprender Node JS", "Aprender GitHub", "Aprender Java", "Aprender Python", "Aprender C#", "Aprender C++"]
    //Adicionar tarefa 1
    await driver.findElement(By.id("inputTask")).sendKeys(lista[0], Key.RETURN)
    //Adicionar tarefa 2
    await driver.findElement(By.id("inputTask")).sendKeys(lista[1], Key.RETURN)
    //Adicionar tarefa 3
    await driver.findElement(By.id("inputTask")).sendKeys(lista[2], Key.RETURN)
    //Adicionar tarefa 4
    await driver.findElement(By.id("inputTask")).sendKeys(lista[3], Key.RETURN)
    //Adicionar tarefa 5
    await driver.findElement(By.id("inputTask")).sendKeys(lista[4], Key.RETURN)
    //Adicionar tarefa 6
    await driver.findElement(By.id("inputTask")).sendKeys(lista[5], Key.RETURN)
    //Adicionar tarefa 7
    await driver.findElement(By.id("inputTask")).sendKeys(lista[6], Key.RETURN)
    //Adicionar tarefa 8
    await driver.findElement(By.id("inputTask")).sendKeys(lista[7], Key.RETURN)
    //Adicionar tarefa 9
    await driver.findElement(By.id("inputTask")).sendKeys(lista[8], Key.RETURN)
    //Adicionar tarefa 10
    await driver.findElement(By.id("inputTask")).sendKeys(lista[9], Key.RETURN)

    //Assertion
    let seleniumText = []
    seleniumText = lista
    for (let i = 0; i < lista.length; i++) {
        seleniumText[i] = await driver.findElement(By.xpath("/html/body/div/section/ul/li/label")).getText().then(function(value){
            return value[i]
        })
        
        // 3) Assertion usando chai para as tarefas
        seleniumText[i].should.equal(lista[i])
    
    }
        
    //Fechar o navegador
    await driver.quit()
}
example()


