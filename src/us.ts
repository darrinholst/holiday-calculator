import * as moment from 'moment';

import {Holidays} from './holidays';

export class US extends Holidays {
  countBusinessHolidaysBetween(
    fromDate: moment.Moment | string,
    toDate: moment.Moment | string
  ) {
    fromDate = moment(fromDate);
    toDate = moment(toDate);
    this.initialize(fromDate.year() - 1, toDate.year() + 1);

    return this.observedHolidays.reduce((count, holiday) => {
      return count + (holiday.isBetween(fromDate, toDate, 'day', '[]') ? 1 : 0);
    }, 0);
  }

  private yearsInitialized: {[index: number]: boolean} = {};
  private observedHolidays: moment.Moment[] = [];
  private newYears = (year: number) => this.observedHoliday(`${year}-01-01`);
  private mlk = (year: number) => this.third(year, '01', 'Monday');
  private presidents = (year: number) => this.third(year, '02', 'Monday');
  private memorialDay = (year: number) => this.last(year, '05', 'Monday');
  private july4th = (year: number) => this.observedHoliday(`${year}-07-04`);
  private laborDay = (year: number) => this.first(year, '09', 'Monday');
  private veterans = (year: number) => this.observedHoliday(`${year}-11-11`);
  private thanksgiving = (year: number) => this.fourth(year, '11', 'Thursday');
  private christmas = (year: number) => this.observedHoliday(`${year}-12-25`);

  private initialize(fromYear: number, toYear: number) {
    for (let year = fromYear; year <= toYear; year++) {
      this.initializeHolidaysForYear(year);
    }
  }

  private initializeHolidaysForYear(year: number) {
    if (this.yearsInitialized[year]) return;
    this.yearsInitialized[year] = true;
    this.observedHolidays.push(this.newYears(year));
    this.observedHolidays.push(this.mlk(year));
    this.observedHolidays.push(this.presidents(year));
    this.observedHolidays.push(this.memorialDay(year));
    this.observedHolidays.push(this.july4th(year));
    this.observedHolidays.push(this.laborDay(year));
    this.observedHolidays.push(this.veterans(year));
    this.observedHolidays.push(this.thanksgiving(year));
    this.observedHolidays.push(this.christmas(year));
  }
}
