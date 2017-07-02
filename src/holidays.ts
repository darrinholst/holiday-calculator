import * as moment from 'moment';
import {UsMinimal} from './sets/us-minimal';

export enum HolidaySet {
  UsMinimal = 'US_MINIMAL'
};

let sets = {
  [HolidaySet.UsMinimal]: new UsMinimal()
}

export function holidays(whichOnes: HolidaySet, startDate: moment.Moment | string, endDate: moment.Moment | string) {
  let holidaySet = sets[whichOnes];
  if (!holidaySet) throw new Error(`No holiday config found for ${whichOnes}`);
  return holidaySet.count(moment(startDate), moment(endDate));
}
