# Copilot Instructions for QEdge Playwright 2025 Project

## Project Overview
This is a TypeScript-based Playwright automation project for end-to-end UI and API testing. The codebase is organized by feature and test type, with a focus on modular Page Object Model (POM) patterns and reusable test data.

## Key Directories & Files
- `Pages/`: Page Object Model classes (e.g., `DashboardPage.ts`, `LoginPage.ts`).
- `tests/`: Main test specs for core flows (e.g., `LoginPageTest.spec.ts`).
- `testing/`: Additional or example specs for Playwright features and edge cases.
- `TestData/`: JSON and text files for test data (e.g., `login.json`, `products.json`).
- `playwright.config.ts`: Playwright configuration (browser, test settings, etc.).
- `playwright-report/`, `test-results/`: Output directories for Playwright reports, traces, and videos.

## Developer Workflows
- **Run all tests:**
  ```powershell
  npx playwright test
  ```
- **Run a specific test file:**
  ```powershell
  npx playwright test tests/LoginPageTest.spec.ts
  ```
- **View HTML report:**
  ```powershell
  npx playwright show-report
  ```
- **Debug a test:**
  ```powershell
  npx playwright test --debug
  ```
- **Update Playwright browsers:**
  ```powershell
  npx playwright install
  ```

## Patterns & Conventions
- **Page Object Model:** All page interactions are encapsulated in classes under `Pages/`. Each page class exposes methods for UI actions and assertions.
- **Test Data:** Use JSON/text files from `TestData/` for parameterized tests. Load data using Node.js `fs` or Playwright's fixtures.
- **Spec Naming:** Test spec files use `.spec.ts` suffix and are grouped by feature or scenario.
- **Reporting:** Test artifacts (screenshots, videos, traces) are saved in `playwright-report/` and `test-results/`.
- **TypeScript:** All source and test files are written in TypeScript. Use ES modules and async/await for Playwright APIs.

## Integration Points
- **Playwright:** Main test runner and automation framework.
- **Node.js:** Used for data loading and utility scripts.
- **No custom build scripts:** Tests are run directly via Playwright CLI; no separate build step required.

## Examples
- To add a new page, create a class in `Pages/` and expose methods for each UI action.
- To add a new test, create a `.spec.ts` file in `tests/` or `testing/` and import relevant page objects and test data.

## Quick Start
1. Install dependencies:
   ```powershell
   npm install
   ```
2. Run all tests:
   ```powershell
   npx playwright test
   ```
3. View results in `playwright-report/`.

---
If any conventions or workflows are unclear, please provide feedback so this guide can be improved.