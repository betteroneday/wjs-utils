import { isEmail,isPhone,isIdCard } from './index';

test('isEmail', () => {
  expect(isEmail('123')).toEqual(false);
  expect(isEmail('123.com')).toEqual(false);
  expect(isEmail('123@.com')).toEqual(false);
  expect(isEmail('123@163.com')).toEqual(true);
  expect(isEmail('123@1.com')).toEqual(true);
});

test('isPhone', () => {
  expect(isPhone('123')).toEqual(false);
  expect(isPhone('13540042421')).toEqual(true);
  expect(isPhone(13540042421)).toEqual(true);
  expect(isPhone('135400424217')).toEqual(false);
  expect(isPhone('23540042421')).toEqual(false);
});

test('isIdCard', () => {
  expect(isIdCard('123')).toEqual(false);
  expect(isIdCard(123)).toEqual(false);
  expect(isIdCard(510903199010158812)).toEqual(true);
  expect(isIdCard('510903199010158812')).toEqual(true);
  expect(isIdCard('11010119900307475X')).toEqual(true);
  expect(isIdCard('11010119900307475x')).toEqual(true);
  expect(isIdCard('510903199010158812x')).toEqual(false);
});