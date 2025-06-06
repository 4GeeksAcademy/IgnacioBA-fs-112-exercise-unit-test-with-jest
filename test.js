const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("One euro should be 1.07 dollars", function() {
    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(expected); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One dollar should be 146,26", function() {
    // Use the function like its supposed to be used
    const yen = fromDollarToYen(3.5);

    
    const expected = 3.5 * 146.26; 
    
    // This is the comparison for the unit test
     expect(fromDollarToYen(3.5)).toBe(expected); 
})

test("One yen should be 0,005", function() {
    // Use the function like its supposed to be used
    const yen = fromYenToPound(3.5);

    
    const expected = 3.5 * 0.005; 
    
    // This is the comparison for the unit test
     expect(fromYenToPound(3.5)).toBe(expected); 
})