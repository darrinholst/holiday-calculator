# moment-holiday

Holiday utilities for Moment. API is up for debate. I'm not totally in love with it so PRs are
welcomed.

### API

##### `holidays(holidaySet, startDate, endDate)`

Counts the number of holidays between `startDate` and `endDate` as defined by the rules of
`holidaySet`

``` js
let {HolidaySet, holidays} = require('moment-holiday');

holidays(HolidaySet.UsMinimal, '2017-01-01', '2017-12-31'); // => 6
```

### Holiday Sets

All the rules for determining holidays is encapsulated in a `HolidaySet`. The only one currently
implemented is `UsMinimal` which recognizes:

1. New Years Day
1. Memorial Day
1. Independence Day
1. Labor Day
1. Thanksgiving
1. Christmas Day

### Development
    git clone https://github.com/darrinholst/moment-holiday
    cd moment-holiday
    npm i
    npm test

### Release
    release-it [semver]
