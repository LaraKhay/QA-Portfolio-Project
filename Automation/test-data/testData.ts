// Test data for automated tests.
// Matches the Test Data tab in the test case spreadsheet (ACC, PAY, and PROD data sets).
// These are fake test accounts and card details for a public practice site.

export const testData = {
    accounts: {
        // ACC-01: main account for login and checkout tests
        acc01: {
            email: 'lara.qa.tc01@mailinator.com',
            password: 'Test1234',
            wrongPassword: 'Wrong9999',
            name: 'Lara QA',
        },
        // ACC-02: separate account for the logout test ( TC-LOG-04 )
        acc02: {
            email: 'lara.qa.tc01.a@mailinator.com',
            password: 'Test1234',
            name: 'Lara QA',
        },
    },
    // Invalid data for negative tests
    invalid: {
        wrongPassword: 'Wrong9999',                                  // TC-LOG-05
        unregisteredEmail: 'lara.qa.notregistered01@mailinator.com', // TC-LOG-06
    },
    payment: {
        // PAY-VALID: fake test card
        valid: {
            nameOnCard: 'Lara QA',
            cardNumber: '4111 1111 1111 1111',
            cvc: '123',
            expiryMonth: '12',
            expiryYear: '2030',
        },
    },
    products: {
        // PROD-01
        blueTop: {
            name: 'Blue Top',
            price: 'Rs. 500',
        },
        // PROD-02
        menTshirt: {
            name: 'Men Tshirt',
            price: 'Rs. 400',
        },
    },
};