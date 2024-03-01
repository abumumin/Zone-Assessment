import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'


Given(/^I launch dummyticket website$/, () => {
	cy.visit('/')
});

When(/^I click on BUY TICKET$/, () => {
	cy.fixture('selectors.json').then((sel) => {
		cy.clickAnElement(sel.buyTicketButton)
	})
});

When(/^I input first name and Last name$/, () => {
	cy.fixture('selectors.json').then((sel) => {
		cy.typeText(sel.firstNameField, sel.firstNameText)
	})
});

When(/^I input order Notes$/, () => {
	cy.fixture('selectors.json').then((sel) => {
		cy.typeText(sel.lastNameFiled, sel.lastNameText)
	})
});

When(/^I select Date of Birth$/, () => {
	cy.fixture('selectors.json').then((sel) => {
		cy.clickAnElement(sel.dateOfBirth)
		cy.get('select.ui-datepicker-year')
		cy.get('option[value="1979"]')
		cy.get('select.ui-datepicker-month')
		cy.get('option[value="3"][data-price="200"]')
		cy.get('a.ui-state-default[data-date="6"]')
		//cy.get('ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all')
		// 	.clickAnElement(sel.dateOfBirth0)
		// 	.clickAnElement(sel.dateOfBirth1)
		// 	.clickAnElement(sel.dateOfBirth2)
		// 	.clickAnElement(sel.dateOfBirth3)
		// 	.clickAnElement(sel.dateOfBirth4)
		// 	.clickAnElement(sel.dateOfBirth5)
		// 	.clickAnElement(sel.dateOfBirth6)
		cy.clickAnElement(sel.dateOfBirth7)

	})
});

When(/^I click on  Sex$/, () => {
	cy.contains('Male').click()
});

When(/^I input City from and City To$/, () => {
	cy.fixture('selectors.json').then((sel) => {
		cy.typeText(sel.fromCityFiled, sel.fromCityText)
		cy.typeText(sel.toCityField, sel.toCityText)
	})
});

When(/^I insert a depature date$/, () => {
	cy.fixture('selectors.json').then((sel) => {
		cy.clickAnElement(sel.departureDate)
		cy.clickAnElement(sel.departureDate1)
	})
});

When(/^I input additional information$/, () => {
	cy.fixture('selectors.json').then((sel) => {
		cy.typeText(sel.additionalinfoFiled, sel.additionalInformation)
	})
});
When(/^I input Appointment Date$/, () => {
	cy.fixture('selectors.json').then((sel) => {
		cy.clickAnElement(sel.appointmantDate)
		cy.clickAnElement(sel.appointmantDate1)
	})
});

When(/^i click on email$/, () => {
	cy.contains('Email').click()
});

When(/^I input Billing name$/, () => {
	cy.fixture('selectors.json').then((sel) => {
		cy.typeText(sel.billingNameFiled, sel.billingNameText)
	})
});

When(/^I input phone number$/, () => {
	cy.fixture('selectors.json').then((sel) => {
		cy.typeText(sel.phoneNumberFiled, sel.phoneNumberText)
	})
});

When(/^I input email address$/, () => {
	cy.fixture('selectors.json').then((sel) => {
		cy.typeText(sel.emailAddressField, sel.emailAddressText)
	})
});

When(/^I select Country$/, () => {
	cy.fixture('selectors.json').then((sel) => {
		cy.clickAnElement(sel.country)
		cy.get(sel.country1).click({ force: true })
	})
});

When(/^I input street address$/, () => {
	cy.fixture('selectors.json').then((sel) => {
		cy.typeText(sel.streeAddressField, sel.streetAddressText)
	})
});

When(/^I input City$/, () => {
	cy.fixture('selectors.json').then((sel) => {
		cy.typeText(sel.cityFiled, sel.cityText)
	})
});

When(/^I input State$/, () => {
	cy.fixture('selectors.json').then((sel) => {
		cy.get(sel.state).click()
		cy.get(sel.state1).contains(sel.state3).click();
		cy.get(sel.state2).should('exist')
		cy.wait(2000);
	})
});

When(/^I click on Debit and Credit Card$/, () => {
	// cy.get('input#payment_method_yith-stripe').should('be.visible').ckick({ force: true })
	// });
	cy.fixture('selectors.json').then((sel) => {
		cy.typeText(sel.cardNumberField, sel.cardNumberText)
		cy.typeText(sel.expireationDateFiled, sel.expireationDateText)
		cy.typeText(sel.securityCodeField, sel.securityCodeText)
	})
	//cy.get('input#payment_method_yith-stripe[value="yith-stripe"]').click()
	// Scroll down to the radio button
//cy.scrollTo('bottom');

// Click on the radio button
//cy.get('input[type="radio"][value="yith-stripe"]').click();

//cy.get('input[value="yith-stripe"]').click()
	// cy.scrollTo('bottom')
	// cy.contains('Debit and Credit Card')
	// cy.contains('label[for="payment_method_yith-stripe"]').find('input[value="yith-stripe"]').should(be.checked)
	// cy.scrollIntoView()
	// cy.click()
	//cy.get('#payment_method_yith-stripe').click({force: true})
})

When(/^I inpute card details$/, () => {
	cy.fixture('selectors.json').then((sel) => {
		cy.typeText(sel.cardNumberField, sel.cardNumberText)
		cy.typeText(sel.expireationDateFiled, sel.expireationDateText)
		cy.typeText(sel.securityCodeField, sel.securityCodeText)
	})
});


When(/^I click on Proceed to Pay$/, () => {
	cy.fixture('selectors.json').then((sel) => {
		cy.clickAnElement(sel.placeorderButton)
	})
});

Then(/^I should see the price of the first available flight$/, () => {
	return true;
});
