package steps;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import page.LoginPage;
import page.NewAccountPage;
import page.SideNavigation;
import util.BrowserFactory;

public class NewAccountSteps {

	WebDriver driver;
	LoginPage loginPage;
	SideNavigation sideNav;
	NewAccountPage newAccountPage;

	@Before
	public void startFirst() {
		driver = BrowserFactory.startBrowser();
		loginPage = PageFactory.initElements(driver, LoginPage.class);
		sideNav = PageFactory.initElements(driver, SideNavigation.class);
		newAccountPage = PageFactory.initElements(driver, NewAccountPage.class);
		
		
	}

	@Given("^a user with username \"([^\"]*)\" and password \"([^\"]*)\"$")
	public void a_user_with_username_and_password(String userName, String password) {
		loginPage.login(userName, password);
	}

	@When("^when user navigates to new account page$")
	public void when_user_navigates_to_new_account_page() throws InterruptedException {
		sideNav.goToNewAccountPage();
	}

	@Then("^New Account page should display$")
	public void new_Account_page_should_display() {
		Assert.assertTrue("page not found", newAccountPage.isPanelHeaderDisplayed());
	}
	@When("^user creates a new account using title \"([^\"]*)\" Description \"([^\"]*)\" Amount \"([^\"]*)\"$")
	public void user_creates_a_new_account_using_title_Description_Amount(String title, String description, String amount){
		newAccountPage.waitForFormToDisplay();
		newAccountPage.inputAccountTitle(title);
	    newAccountPage.inputDescription(description);
	    newAccountPage.inputAmount(amount);
	}


	@After
	public void close() throws InterruptedException {
		Thread.sleep(5000);
		driver.close();
		driver.quit();
	}

}
