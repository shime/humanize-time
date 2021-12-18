var time = require('./')

test('it handles most basic stuff', function(){
  expect(time(2000)).toBe('2s')
})

test('it outputs minutes if present', function(){
  expect(time(62000)).toBe('1m, 2s')
})

test('it outputs hours if present', function(){
  expect(time(3662000)).toBe('1h, 1m, 2s')
})

test('it outputs days if present', function(){
  // 1d = 86400 * 1000ms
  // 1h = 3600 * 1000ms
  // 1m = 60 * 1000ms
  // 1s = 1000ms
  expect(time(90062000)).toBe('1d, 1h, 1m, 2s')
})

test('it outputs months if present', function(){
  // 1mo = 30 * 86400 * 1000ms
  // 1d = 86400 * 1000ms
  // 1h = 3600 * 1000ms
  // 1m = 60 * 1000ms
  // 1s = 1000ms
  expect(time(2682062000)).toBe('1mo, 1d, 1h, 1m, 2s')
})

test('it outputs years if present', function(){
  // 1yr = 12 * 30 * 86400 * 1000ms
  // 1mo = 30 * 86400 * 1000ms
  // 1d = 86400 * 1000ms
  // 1h = 3600 * 1000ms
  // 1m = 60 * 1000ms
  // 1s = 1000ms
  expect(time(33786062000)).toBe('1y, 1mo, 1d, 1h, 1m, 2s')
})
