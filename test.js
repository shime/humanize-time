var test = require('tape')
  , time = require('./')

test('it handles most basic stuff', function(t){
  t.equal(time(2000), '2 s', 'time(2000) // 2 s')
  t.end()
})

test('it outputs minutes if present', function(t){
  t.equal(time(62000), '1 m, 2 s', 'time(62000) // 1 m, 2 s')
  t.end()
})

test('it outputs hours if present', function(t){
  t.equal(time(3662000), '1 h, 1 m, 2 s', 'time(62000) // 1 h, 1 m, 2 s')
  t.end()
})
