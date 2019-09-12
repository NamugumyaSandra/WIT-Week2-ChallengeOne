const readline = require('./logic');

test('passes when value is NaN', () => {
    expect(NaN).toBeNaN();
    expect(1).not.toBeNaN();
  });

// test('if birth year is 2009 returns a You are a minor.',() => {
//   expect(2009).toBe('You are a minor.')
// })
  
// test('returns minor when age is less than 18 years', () => {
//     const data = 2015;
//     // const age = new Date().getFullYear() - data ;
//     for(let age=0; age<18; age = new Date().getFullYear() - data  )
//         expect(age).toBe('You are a minor.');
//   });




