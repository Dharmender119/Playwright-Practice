const {test} = require('@playwright/test')

test("Popup validations", async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.goto("http://google.com");
    await page.goBack();
    await page.goForward();

});

test.only("Basic",async({page})=>
{
await page.goto("https://rahulshettyacademy.com/client");
await page.locator("[name='username']").fill("anshika@gmail.com");
await page.locator("#password").fill("Iamking@000");
await page.locator("#signInBtn").click;
await page.waitForLoadState('networkidle');
const titles=await page.locator(".card-body b").allTextContents();
console.log(titles);


});

test.only("Special Locators",async({page})=>
{
await page.goto("https://rahulshettyacademy.com/angularpractice");



});