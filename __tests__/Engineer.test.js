const Engineer = require('../lib/Engineer');

test('engineer object created', () => {
  const testValue = new Engineer('Jacob', 90, 'test@test.mail', 'Keemperor');

  expect(testValue.github).toEqual(expect.any(String));
});

test('require Githubb username', () => {
  const testValue = new Engineer('Jacob', 90, 'test@test.mail', 'Keemperor');

  expect(testValue.getGithub()).toEqual(expect.stringContaining(testValue.github.toString())); 
});

test('get employee role', () => {
  const testValue = new Engineer('Jacob', 90, 'test@test.mail', 'Keemperor');

  expect(testValue.getRole()).toEqual("Engineer");
});