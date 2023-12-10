export class LoginPage {
  constructor(page) {
    this.page = page
    
    this.loginField = page.locator('input[name="login"]');
    this.passwordField = page.locator('input[name="password"]');
    this.submitButton = page.locator('input[type="submit"]');

  }

  async goto() {
    await this.page.goto('https://test.k6.io/my_messages.php')
  }

  async submitForm() {
    this.loginField.type('admin');
    this.passwordField.type('123');
    await this.submitButton.click()
  }

  getVerificationMessage() {
    return this.verificationMessage.innerText()
  }
}
