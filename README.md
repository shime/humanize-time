## Humanize time

[![Build Status](https://travis-ci.org/shime/humanize-time.svg?branch=master)](https://travis-ci.org/shime/humanize-time)

Converts miliseconds to human-readable format.

## Install

    npm install humanize-time

## Example

```javascript
  var time = require('humanize-time')

  time(2000)    // '2 s'
  time(62000)   // '1 m, 2 s'
  time(3662000) // '1 h, 1 m, 2 s'
```

## License

MIT
