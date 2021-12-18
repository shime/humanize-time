module.exports = function(ms){
  var floor  = Math.floor
    , secs   = floor(ms / 1000)
    , mins   = floor(secs / 60)
    , hrs    = floor(mins / 60)
    , days   = floor(hrs / 24)
    , months = floor(days / 30)
    , years  = floor(months / 12)

  var buff = ""

  if (years > 0) {
    buff = buff.concat(years, "y, ")
  }

  if (months > 0) {
    buff = buff.concat(months % 12, "mo, ")
  }

  if (days > 0) {
    buff = buff.concat(days % 30, "d, ")
  }

  if (hrs > 0){
    buff = buff.concat(hrs % 24 + "h, ")
  }

  if (mins > 0){
    buff = buff.concat(mins % 60 + "m, ")
  }

  buff = buff.concat(secs % 60 + "s")

  return buff
}
