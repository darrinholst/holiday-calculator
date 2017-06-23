import * as moment from 'moment';
import 'mocha';
import {expect} from 'chai';

import {holidays} from './index';

describe('holidays', () => {
  it('should not find any holidays if nothing has been configured', () => {
    expect(holidays(moment('2017-01-01'), moment('2017-12-31'))).to.eql(0);
  });
});
