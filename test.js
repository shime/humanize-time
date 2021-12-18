var test = require('tape')
  , time = require('./')

test('it handles most basic stuff', function(t){
  t.equal(time(2000), '2s', 'time(2000)')
  t.end()
})

test('it outputs minutes if present', function(t){
  t.equal(time(62000), '1m, 2s', 'time(62000)')
  t.end()
})

test('it outputs hours if present', function(t){
  t.equal(time(3662000), '1h, 1m, 2s', 'time(62000)')
  t.end()
})

test('it outputs days if present', function(t){
  // 1d = 86400 * 1000ms
  // 1h = 3600 * 1000ms
  // 1m = 60 * 1000ms
  // 1s = 1000ms
  t.equal(time(90062000), '1d, 1h, 1m, 2s', 'time(90062000)')
  t.end()
})

test('it outputs months if present', function(t){
  // 1mo = 30 * 86400 * 1000ms
  // 1d = 86400 * 1000ms
  // 1h = 3600 * 1000ms
  // 1m = 60 * 1000ms
  // 1s = 1000ms
  t.equal(time(2682062000), '1mo, 1d, 1h, 1m, 2s', 'time(2682062000)')
  t.end()
})

test('it outputs years if present', function(t){
  // 1yr = 12 * 30 * 86400 * 1000ms
  // 1mo = 30 * 86400 * 1000ms
  // 1d = 86400 * 1000ms
  // 1h = 3600 * 1000ms
  // 1m = 60 * 1000ms
  // 1s = 1000ms
  t.equal(time(33786062000), '1y, 1mo, 1d, 1h, 1m, 2s', 'time(33786062000)')
  t.end()
})
