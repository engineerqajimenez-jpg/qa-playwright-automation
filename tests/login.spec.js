// Importamos las herramientas de Playwright
const { test, expect } = require('@playwright/test');

// Agrupamos los tests del módulo Login
test.describe('Login — Sauce Demo', () => {

  // TC1: Login exitoso con usuario válido
  test('TC1 - Login exitoso con standard_user', async ({ page }) => {
    
    // 1. Ir a la página
    await page.goto('https://www.saucedemo.com');

    // 2. Escribir el usuario
    await page.fill('#user-name', 'standard_user');

    // 3. Escribir la contraseña
    await page.fill('#password', 'secret_sauce');

    // 4. Hacer clic en Login
    await page.click('#login-button');

    // 5. Verificar que llegamos al catálogo
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });

});

test('TC2 - Login con usuario bloqueado', async ({ page }) => {

    await page.goto('https://www.saucedemo.com');
    await page.fill('#user-name', 'locked_out_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await expect(page.locator('[data-test="error"]'))
    .toHaveText('Epic sadface: Sorry, this user has been locked out.');
});

test('TC3 - Login con contraseña incorrecta', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'wrong_password');
    await page.click('#login-button');
    await expect(page.locator('[data-test="error"]'))
    .toHaveText('Epic sadface: Username and password do not match any user in this service');
});

test('TC4 - Login con campos vacios', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.click('#login-button');
    await expect(page.locator('[data-test="error"]'))
    .toHaveText('Epic sadface: Username is required');
});

test('TC5 - Login con usuario vacio y contraseña escrita', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await expect(page.locator('[data-test="error"]'))
    .toHaveText('Epic sadface: Username is required');
});

test('TC6 - Logout exitoso', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await page.click('#react-burger-menu-btn');
    await page.click('#logout_sidebar_link');
    await expect(page).toHaveURL('https://www.saucedemo.com/');
});