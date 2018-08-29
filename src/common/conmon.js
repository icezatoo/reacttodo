import * as moment from 'moment';
export const getDateNow = () => moment().toNow();
export const getformat = (str?) => new moment(new Date()).format(str);
export const getlocale = () => moment().locale();
