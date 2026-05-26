const { test, expect } = require('@playwright/test');

test.describe('Checkout — Sauce Demo', () => {

  test('TC1 - Completar checkout exitosamente', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await page.click('#add-to-cart-sauce-labs-backpack');
    await page.click('.shopping_cart_link');
    await page.click('#checkout');
    await page.fill('#first-name', 'Jose');
    await page.fill('#last-name', 'Jimenez');
    await page.fill('#postal-code', '12345');
    await page.click('#continue');
    await page.click('#finish');
    await expect(page.locator('.complete-header'))
      .toHaveText('Thank you for your order!');
  });

  test('TC2 - Checkout sin productos en el carrito', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await page.click('.shopping_cart_link');
    await page.click('#checkout');
    await expect(page.locator('.cart_item')).toHaveCount(0);
  });

  test('TC3 - Checkout con campos vacíos', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await page.click('#add-to-cart-sauce-labs-backpack');
    await page.click('.shopping_cart_link');
    await page.click('#checkout');
    await page.click('#continue');
    await expect(page.locator('[data-test="error"]'))
      .toHaveText('Error: First Name is required');
  });

  test('TC4 - Verificar precio total del pedido', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await page.click('#add-to-cart-sauce-labs-backpack');
    await page.click('.shopping_cart_link');
    await page.click('#checkout');
    await page.fill('#first-name', 'Jose');
    await page.fill('#last-name', 'Jimenez');
    await page.fill('#postal-code', '12345');
    await page.click('#continue');
    await expect(page.locator('.summary_total_label'))
      .toContainText('Total: $');
  });

});