import * as moment from 'moment';
export const getDateNow = () => moment().toNow();
export const getformat = (str?, value?) => moment(value).format(str);
export const getlocale = () => moment().locale();
