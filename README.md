# not-a-moment-holiday-plugin

[![npm-version](https://img.shields.io/npm/v/not-a-moment-holiday-plugin.svg)](https://www.npmjs.com/package/not-a-moment-holiday-plugin)
[![Build Status](https://travis-ci.org/darrinholst/not-a-moment-holiday-plugin.svg?branch=master)](https://travis-ci.org/darrinholst/not-a-moment-holiday-plugin)
[![dependencies](https://david-dm.org/darrinholst/not-a-moment-holiday-plugin/status.svg)](https://david-dm.org/darrinholst/not-a-moment-holiday-plugin)
[![dev dependencies](https://david-dm.org/darrinholst/not-a-moment-holiday-plugin/dev-status.svg)](https://david-dm.org/darrinholst/not-a-moment-holiday-plugin?type=dev)
[![peer dependencies](https://david-dm.org/darrinholst/not-a-moment-holiday-plugin/peer-status.svg)](https://david-dm.org/darrinholst/not-a-moment-holiday-plugin?type=peer)

Holiday utilities for Moment. Not a plugin though. 😒

### Installation

#### node

    npm install not-a-moment-holiday-plugin

### API

##### `countBusinessHolidaysBetween(startDate: Moment | string, endDate: Moment | string)`

Returns the number of holidays observed by businesses between `startDate` and `endDate`.

``` js
import {US} from 'not-a-moment-holiday-plugin';

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
