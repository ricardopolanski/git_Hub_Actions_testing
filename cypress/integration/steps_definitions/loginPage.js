
Given(/^the username and password is inserted$/, () => {
	cy.visit('/')
    cy.get('[id="user-name"]').should('be.visible').type('standard_user', {delay: 45})
	cy.get('[data-test="password"]').should('be.visible').type('secret_sauce', {delay: 45})
	cy.get('[data-test="login-button"]').should('be.visible').click()
});

Then(/^the Login button is clicked$/, () => {
	return true;
});

Then(/^products page is loaded$/, () => {
	return true;
});
