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

## 🧪 Test Cases — Login Module

| ID | Test Case | Type | Status |
|----|-----------|------|--------|
| TC1 | Login exitoso con standard_user | Positive | ✅ Pass |
| TC2 | Login con usuario bloqueado | Negative | ✅ Pass |
| TC3 | Login con contraseña incorrecta | Negative | ✅ Pass |
| TC4 | Login con campos vacíos | Negative | ✅ Pass |
| TC5 | Login con usuario vacío | Negative | ✅ Pass |
| TC6 | Logout exitoso | Positive | ✅ Pass |

---

## 👤 Author

**Jose Jimenez** — QA Engineer
[GitHub](https://github.com/engineerqajimenez-jpg)