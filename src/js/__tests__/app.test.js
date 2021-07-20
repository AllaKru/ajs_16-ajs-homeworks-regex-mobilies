
import mobileValidator from '../app';

test('работа mobileValidator', () => {
  expect(mobileValidator('8 (927) 000-00-00')).toBe('+79270000000');
  expect(mobileValidator('+7 960 000 00 00')).toBe('+79600000000');
  expect(mobileValidator('+86 000 000 0000')).toBe('+860000000000');
});
