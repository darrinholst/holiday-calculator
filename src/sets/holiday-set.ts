import * as moment from 'moment';

export abstract class HolidaySet {
  abstract count(fromDate: moment.Moment, toDate: moment.Moment) : number;

  protected weekendableHoliday(date: string) {
    let momentized = moment(date);
    if (momentized.day() === 0) return momentized.add(1, 'day');
    if (momentized.day() === 6) return momentized.subtract(1, 'day');
    return momentized;
  }

  protected first(year: number, month: string, day: string) {
    let theFirstDayOfTheMonth = moment(`${year}-${month}-01`).startOf('month').day(day);
    if (theFirstDayOfTheMonth.date() > 7) theFirstDayOfTheMonth.add(7, 'days');
    return theFirstDayOfTheMonth;
  }
}
