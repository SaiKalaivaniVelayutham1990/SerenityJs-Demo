const { Ensure, includes,Check , equals} =require('@serenity-js/assertions');
const { actorCalled,  engage, actorInTheSpotlight } =require('@serenity-js/core');
const {  Navigate, UseAngular, Website ,Target ,isVisible, Enter, Wait, Click ,Text,TakeScreenshot} =require('@serenity-js/protractor');
const { Actors } =require('../src/Actors');



const Form = {
    Name: Target.the('Name').located(by.css(`input[name='name']`)),
    Email: Target.the('Email').located(by.css(`input[name='email']`)),
    Password: Target.the('password').located(by.id('exampleInputPassword1')),
    Submit: Target.the('submitButton').located(by.xpath('//input[@type="submit"]')),
    SuccessMessage: Target.the('SuccessMessage').located(by.xpath('//a[@class="close"]/following-sibling::strong')),
};


describe('Home Form Test', () => {

    beforeEach(() => engage(new Actors()));

   


    it('Enter details in the form and submit', () =>
        actorCalled('Team Member 1').attemptsTo(
            UseAngular.disableSynchronisation(),
            Navigate.to('https://qaclickacademy.github.io/protocommerce/#'),
            Ensure.that(Website.title(), includes('ProtoCommerce')),
            
            Wait.until(Form.Name, isVisible()),
            Enter.theValue('QA Team').into(Form.Name),

            Wait.until(Form.Email, isVisible()),
            Enter.theValue('success@gmail.com').into(Form.Email),
            
            Wait.until(Form.Password, isVisible()),
            Enter.theValue('12345').into(Form.Password),

            Wait.until(Form.Submit, isVisible()),
            Click.on(Form.Submit),

            Check.whether(Form.Submit, isVisible())
            .andIfSo(Click.on(Form.Submit)),
            ));

            it('Validation After Submit', () =>
            actorCalled('Team Member 2').attemptsTo(
            Wait.until(Form.SuccessMessage, isVisible()),
            Ensure.that(Text.of(Form.SuccessMessage),equals('Success!')),    
        ));

        
});

