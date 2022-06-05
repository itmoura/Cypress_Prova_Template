describe.skip('visit google', () => {
    it('pesquisa inatel', () => {
        cy.visit("https://google.com.br");
        cy.get("input[name=q]").type("INATEL {enter}")
    })
})

describe.skip('Formulario testQA cadastro', ()=>{
    it('criando um usuário no globalQA', () => {
        cy.visit("https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login")
        cy.get(".btn-link").click();
        cy.get("#firstName").type("Ítalo")
        cy.get("input[name=lastName]").type("Moura")
        cy.get("#username").type("sdfsa")
        cy.get("#password").type("asfsafs")
        cy.get(".btn-primary").click()
        cy.get(".alert-success").should("contain.text", "Registration successful")
    })

    it('Login na plataforma com sucesso!', () => {
        let userInfo = createUser()
        cy.visit("https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login")
        cy.get("input[name=username]").type(userInfo[0])
        cy.get("input[name=password]").type(userInfo[1])
        cy.get(".btn-primary").click()
    })
})

describe('teste globalQA radio,select e checkbox', () => {
    it('campos diferenciados', () => {
        cy.on('uncaught:exception', ()=> {
            return false
        })
        cy.visit("https://www.globalsqa.com/samplepagetest/")
        cy.get("#g2599-name").type("teste")
        cy.get("#g2599-experienceinyears").select('3-5').should("have.value", "3-5")
        cy.get(".grunion-field-checkbox-multiple-wrap [type=checkbox]").first().check()
        cy.get(".grunion-field-checkbox-multiple-wrap [type=checkbox]").check("Automation Testing")

        cy.get(".grunion-field-radio-wrap [type=radio]").first().check()
        cy.get(".grunion-field-radio-wrap [type=radio]").last().check()

        cy.get("input[name=file-553]").selectFile('cypress/fixtures/batman.jpg', { action: 'drag-drop' })
    })
})

function createUser() {
    let hora = new Date().getHours().toString();
    let min = new Date().getMinutes().toString();
    let sec = new Date().getSeconds().toString();

    let username = 'testQA_' + hora + min + sec
    let password = hora + min + sec

    let user_info = [username, password]

    cy.visit("https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login")
    cy.get(".btn-link").click();
    cy.get("#firstName").type("Ítalo")
    cy.get("input[name=lastName]").type("Moura")
    cy.get("#username").type(username)
    cy.get("#password").type(password)
    cy.get(".btn-primary").click()
    cy.get(".alert-success").should("contain.text", "Registration successful")

    return user_info;
}