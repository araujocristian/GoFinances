import moment from 'moment';

const formatDate = (date: Date): string => moment(date).format('DD/MM/YYYY');

export default formatDate;
