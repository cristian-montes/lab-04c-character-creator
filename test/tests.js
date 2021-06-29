// IMPORT MODULES under test here:
import { createCamper } from '../calculator.js';

const test = QUnit.test;

// name your test by what it is testing
test(' test a createCamper', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = createCamper(); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
