import { expect, test } from "@playwright/test"

// test("Interaction with inputs", async ({ page }) => {
    
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const messageInput = page.locator("input#user-message");
    await messageInput.scrollIntoViewIfNeeded();
    console.log(await messageInput.getAttribute("placeholder"));
    expect(messageInput).toHaveAttribute("placeholder", "Please enter your Message");
    console.log('Before entering data: ' + await messageInput.inputValue());
    await messageInput.type("HI tulu");
    console.log('After entering data: ' + await messageInput.inputValue());
// })

test("Sum", async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
  const sum1Input = page.locator("#sum1")
  const sum2Input = page.locator("#sum2")

  const getValuesBtn = page.locator("form#gettotal>button");
  let num1
  let num2
  await sum1Input.type("" + num1);
  await sum2Input.type("" + num2);
  await getValuesBtn.click()
  
})

