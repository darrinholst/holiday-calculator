import * as moment from 'moment';

export abstract class Holidays {
  abstract countBusinessHolidaysBetween(
    fromDate: moment.Moment | string,
    toDate: moment.Moment | string
  ): number;

  protected observedHoliday(date: string) {
    let momentized = moment(date);
    if (momentized.day() === 0) return momentized.add(1, 'day');
    if (momentized.day() === 6) return momentized.subtract(1, 'day');
    return momentized;
  }

  protected third(year: number, month: string, day: string) {
    return this.first(year, month, day).add(2, 'weeks');
  }

  protected fourth(year: number, month: string, day: string) {
    return this.first(year, month, day).add(3, 'weeks');
  }

  protected last(year: number, month: string, day: string) {
    return moment(`${year}-${month}-01`)
      .endOf('month')
      .startOf('isoWeek');
  }

  protected first(year: number, month: string, day: string) {
    let theFirstDayOfTheMonth = moment(`${year}-${month}-01`)
      .startOf('month')
      .day(day);
    if (theFirstDayOfTheMonth.date() > 7) theFirstDayOfTheMonth.add(7, 'days');
    return theFirstDayOfTheMonth;
  }
}
