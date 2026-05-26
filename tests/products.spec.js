const { test, expect } = require('@playwright/test');

test.describe('Products — Sauce Demo', () => {

  test('TC1 - La página de productos carga correctamente', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page).toHaveTitle('Swag Labs');
  });

  test('TC2 - La página tiene 6 productos', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    const products = page.locator('.inventory_item');
    await expect(products).toHaveCount(6);
  });

  test('TC3 - Ordenar productos de mayor a menor precio', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await page.selectOption('.product_sort_container', 'hilo');
    const firstProduct = page.locator('.inventory_item_name').first();
    await expect(firstProduct).toHaveText('Sauce Labs Fleece Jacket');
  });

  test('TC4 - Agregar un producto al carrito', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await page.click('#add-to-cart-sauce-labs-backpack');
    const badge = page.locator('.shopping_cart_badge');
    await expect(badge).toHaveText('1');
  });

  test('TC5 - Eliminar un producto del carrito', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await page.click('#add-to-cart-sauce-labs-backpack');
    await page.click('#remove-sauce-labs-backpack');
    const badge = page.locator('.shopping_cart_badge');
    await expect(badge).toBeHidden();
  });

});