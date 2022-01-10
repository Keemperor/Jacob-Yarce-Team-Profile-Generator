const Intern = require('../lib/Intern');

test('Intern object created', () => {
  const testValue = new Intern('Jacob', 90, 'test@test.mail', 'Kean');

  expect(testValue.school).toEqual(expect.any(String));
});

test('require school name', () => {
  const testValue = new Intern('Jacob', 90, 'test@test.mail', 'Kean');

  expect(testValue.getSchool()).toEqual(expect.stringContaining(testValue.school.toString())); 
});

test('get employee role', () => {
  const testValue = new Intern('Jacob', 90, 'test@test.mail', 'Kean');

  expect(testValue.getRole()).toEqual("Intern");
});