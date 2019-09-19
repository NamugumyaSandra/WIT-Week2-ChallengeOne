const ageGroup = require('./logic')

test('does not pass when value is NaN', () => {
    expect(NaN).toBeNaN();
    expect(1).not.toBeNaN();
  });

test(`29 years is equal to 'You are still a youth.'`, () => {
    expect(ageGroup(29)).toBe('You are still a youth.');
});

test(`9 years is equal to 'You are a minor.'`, () => {
  expect(ageGroup(9)).toBe('You are a minor.');
});

test(`99 years is equal to 'You are an elder.'`, () => {
  expect(ageGroup(99)).toBe('You are an elder.');
});



