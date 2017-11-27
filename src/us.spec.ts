import * as moment from 'moment';
import 'mocha';
import {expect} from 'chai';

import {US} from './index';

describe('US Holidays', () => {
  let us = new US();

  describe('business days', () => {
    it('should count all the holidays for the year', () => {
      expect(
        us.countBusinessHolidaysBetween('2017-01-01', '2017-12-31')
      ).to.eql(9);
    });

    it('should count new years', function() {
      expect(
        us.countBusinessHolidaysBetween('2018-01-01', '2018-01-05')
      ).to.eql(1);
    });

    it('should count the monday after new years when it is on a sunday', function() {
      expect(
        us.countBusinessHolidaysBetween('2017-01-02', '2017-01-06')
      ).to.eql(1);
    });

    it('should count the friday before new years when it is on a saturday', function() {
      expect(
        us.countBusinessHolidaysBetween('2021-12-27', '2021-12-31')
      ).to.eql(1);
    });

    it('should count independence day', function() {
      expect(
        us.countBusinessHolidaysBetween('2017-07-03', '2017-07-07')
      ).to.eql(1);
    });

    it('should count the monday after independence day when it is on a sunday', function() {
      expect(
        us.countBusinessHolidaysBetween('2015-06-29', '2015-07-03')
      ).to.eql(1);
    });

    it('should count the friday before independence day when it is on a saturday', function() {
      expect(
        us.countBusinessHolidaysBetween('2021-07-05', '2021-07-09')
      ).to.eql(1);
    });

    it('should count memorial day', function() {
      expect(
        us.countBusinessHolidaysBetween('2017-05-29', '2017-06-02')
      ).to.eql(1);
    });

    it('should count labor day', function() {
      expect(
        us.countBusinessHolidaysBetween('2017-09-04', '2017-09-08')
      ).to.eql(1);
    });

    it('should count thanksgiving', function() {
      expect(
        us.countBusinessHolidaysBetween('2017-11-20', '2017-11-24')
      ).to.eql(1);
    });

    it('should count christmas', function() {
      expect(
        us.countBusinessHolidaysBetween('2017-12-25', '2017-12-29')
      ).to.eql(1);
    });

    it('should count the monday after christmas when it is on a sunday', function() {
      expect(
        us.countBusinessHolidaysBetween('2010-12-20', '2010-12-24')
      ).to.eql(1);
    });

    it('should count the friday before christmas when it is on a saturday', function() {
      expect(
        us.countBusinessHolidaysBetween('2022-12-26', '2022-12-30')
      ).to.eql(1);
    });

    it('should count veterans day', function() {
      expect(
        us.countBusinessHolidaysBetween('2017-11-09', '2017-11-10')
      ).to.eql(1);
    });

    it('should count mlk day', function() {
      expect(
        us.countBusinessHolidaysBetween('2017-01-16', '2017-01-18')
      ).to.eql(1);
    });

    it('should count presidents day', function() {
      expect(
        us.countBusinessHolidaysBetween('2017-02-20', '2017-02-20')
      ).to.eql(1);
    });
  });
});
