# moment-holiday

[![npm-version](https://img.shields.io/npm/v/moment-holiday.svg)](https://www.npmjs.com/package/moment-holiday)
[![Build Status](https://travis-ci.org/darrinholst/moment-holiday.svg?branch=master)](https://travis-ci.org/darrinholst/moment-holiday)
[![dependencies](https://david-dm.org/darrinholst/moment-holiday/status.svg)](https://david-dm.org/darrinholst/moment-holiday)
[![dev dependencies](https://david-dm.org/darrinholst/moment-holiday/dev-status.svg)](https://david-dm.org/darrinholst/moment-holiday?type=dev)
[![peer dependencies](https://david-dm.org/darrinholst/moment-holiday/peer-status.svg)](https://david-dm.org/darrinholst/moment-holiday?type=peer)

Holiday utilities for Moment.

### API

##### `countBusinessHolidaysBetween(startDate: Moment | string, endDate: Moment | string)`

Returns the number of holidays observed by businesses between `startDate` and `endDate`.

``` js
import {US} from 'moment-holiday';

new US().countBusinessHolidaysBetween('2017-01-01', '2017-12-31'); // => 6
```

### Holiday Rules

All the rules for determining holidays is encapsulated in a `Holidays` object. `US` is currently the
only one that's builtin. It recognizes:

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
