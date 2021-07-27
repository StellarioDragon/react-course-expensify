import moment from 'moment';

const filters = {
    text: '',
    sortBy: 'date',
    startdate: undefined,
    enddate: undefined
}
const altFilters = {
    text: 'bills',
    sortBy: 'amount',
    startdate: moment(0),
    enddate: moment(0).add(3, 'days')
}

export { filters, altFilters }