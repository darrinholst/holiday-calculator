# holiday-calculator

[![npm-version](https://img.shields.io/npm/v/holiday-calculator.svg)](https://www.npmjs.com/package/holiday-calculator)
[![Build Status](https://travis-ci.org/darrinholst/holiday-calculator.svg?branch=master)](https://travis-ci.org/darrinholst/holiday-calculator)
[![dependencies](https://david-dm.org/darrinholst/holiday-calculator/status.svg)](https://david-dm.org/darrinholst/holiday-calculator)
[![dev dependencies](https://david-dm.org/darrinholst/holiday-calculator/dev-status.svg)](https://david-dm.org/darrinholst/holiday-calculator?type=dev)
[![peer dependencies](https://david-dm.org/darrinholst/holiday-calculator/peer-status.svg)](https://david-dm.org/darrinholst/holiday-calculator?type=peer)

Holiday utilities for Moment. Not a plugin though. 😒

### Installation

#### node

    npm install holiday-calculator

### API

##### `countBusinessHolidaysBetween(startDate: Moment | string, endDate: Moment | string)`

Returns the number of holidays observed by businesses between `startDate` and `endDate`.

``` js
import {US} from 'holiday-calculator';

new US().countBusinessHolidaysBetween('2017-01-01', '2017-12-31'); // => 6
```

### Holiday Rules

All the rules for determining holidays is encapsulated in a `Holidays` object. `US` is currently the
only one that's builtin. It recognizes:

1. New Years Day
1. Martin Luther King Jr. Day
1. Presidents' Day
1. Memorial Day
1. Independence Day
1. Labor Day
1. Veterans Day
1. Thanksgiving
1. Christmas Day

### Development
    git clone https://github.com/darrinholst/moment-holiday
    cd moment-holiday
    npm i
    npm test

### Release
    release-it [semver]
