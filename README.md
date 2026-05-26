# qa-playwright-automation

![Playwright Tests](https://github.com/engineerqajimenez-jpg/qa-playwright-automation/actions/workflows/playwright.yml/badge.svg)

Automated test suite for [Sauce Demo](https://www.saucedemo.com) using Playwright and JavaScript.
CI/CD configured with GitHub Actions — tests run automatically on every push.

---

## 🛠️ Tech Stack

- [Playwright](https://playwright.dev/) — End-to-end testing framework
- JavaScript (Node.js)
- GitHub Actions — CI/CD pipeline

---

## 🚀 Run Tests Locally

```bash
# Install dependencies
npm install

# Install browsers
npx playwright install

# Run all tests
npx playwright test

# Run specific module
npx playwright test login.spec.js --project=chromium
```

---

## 🧪 Test Cases

### Login Module
| ID | Test Case | Type | Status |
|----|-----------|------|--------|
| TC1 | Login exitoso con standard_user | Positive | ✅ Pass |
| TC2 | Login con usuario bloqueado | Negative | ✅ Pass |
| TC3 | Login con contraseña incorrecta | Negative | ✅ Pass |
| TC4 | Login con campos vacíos | Negative | ✅ Pass |
| TC5 | Login con usuario vacío | Negative | ✅ Pass |
| TC6 | Logout exitoso | Positive | ✅ Pass |

### Products Module
| ID | Test Case | Type | Status |
|----|-----------|------|--------|
| TC1 | La página de productos carga correctamente | Positive | ✅ Pass |
| TC2 | La página tiene 6 productos | Positive | ✅ Pass |
| TC3 | Ordenar productos de mayor a menor precio | Positive | ✅ Pass |
| TC4 | Agregar un producto al carrito | Positive | ✅ Pass |
| TC5 | Eliminar un producto del carrito | Positive | ✅ Pass |

### Checkout Module
| ID | Test Case | Type | Status |
|----|-----------|------|--------|
| TC1 | Completar checkout exitosamente | Positive | ✅ Pass |
| TC2 | Checkout sin productos en el carrito | Negative | ✅ Pass |
| TC3 | Checkout con campos vacíos | Negative | ✅ Pass |
| TC4 | Verificar precio total del pedido | Positive | ✅ Pass |
---

## 👤 Author

**Jose Jimenez** — QA Engineer
[GitHub](https://github.com/engineerqajimenez-jpg)