import * as moment from 'moment';

import {HolidaySet} from './holiday-set';

export class UsMinimal extends HolidaySet {
  private yearsInitialized: {[index: number]: boolean} = {};
  private observedHolidays: moment.Moment[] = [];

  count(fromDate: moment.Moment, toDate: moment.Moment) {
    this.initialize(fromDate.year() - 1, toDate.year() + 1);

    return this.observedHolidays.reduce((count, holiday) => {
      return count + (holiday.isBetween(fromDate, toDate, 'day', '[]') ? 1 : 0);
    }, 0)
  }

  private newYears = (year: number) => this.weekendableHoliday(`${year}-01-01`);
  private memorialDay = (year: number) => moment(`${year}-05-01`).endOf('month').startOf('isoWeek');
  private independenceDay = (year: number) => this.weekendableHoliday(`${year}-07-04`);
  private laborDay = (year: number) => this.first(year, '09', 'Monday');
  private thanksgiving = (year: number) => this.first(year, '11', 'Thursday').add(3, 'weeks');
  private christmas = (year: number) => this.weekendableHoliday(`${year}-12-25`);

  private initialize(fromYear: number, toYear: number) {
    for(let year = fromYear; year <= toYear; year++) this.initializeHolidaysForYear(year);
  }

  private initializeHolidaysForYear(year: number) {
    if (this.yearsInitialized[year]) return;
    this.yearsInitialized[year] = true;
    this.observedHolidays.push(this.newYears(year));
    this.observedHolidays.push(this.memorialDay(year));
    this.observedHolidays.push(this.independenceDay(year));
    this.observedHolidays.push(this.laborDay(year));
    this.observedHolidays.push(this.thanksgiving(year));
    this.observedHolidays.push(this.christmas(year));
  }
}
