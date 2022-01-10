const Manager = require('../lib/Manager');

test('Manager object created', () => {
  const testValue = new Manager('Jacob', 90, 'test@test.mail', 1);

  expect(testValue.officeNumber).toEqual(expect.any(Number));
});


test('get employee role', () => {
  const testValue = new Manager('Jacob', 90, 'test@test.mail', 1);

  expect(testValue.getRole()).toEqual("Manager");
});