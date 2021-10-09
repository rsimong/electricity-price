import * as moment from "moment";

export class GetRealtimeMarketPriceRequest {
    'startDate': moment.Moment;
    'endDate': moment.Moment;
    'timeTrunc': 'hour' | 'day' | 'month' | 'year';
}