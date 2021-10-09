import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Import Models
import { GetRealtimeMarketPriceRequest } from '@models/apis/ree/get_realtime_market_price_request';

@Injectable({
  providedIn: 'root'
})
export class ReeService {

  // Service for requesting data to the API of the Red Eléctrica de España

  urlBase: string = "https://apidatos.ree.es";

  queryParamDateFormat: string = 'YYYY-MM-DD[T]HH:mm';

  constructor(
    private http: HttpClient
  ) { }

  getRealtimeMarketPrice(lang: 'es' | 'en', queryParams: GetRealtimeMarketPriceRequest): Observable<any> {
    const formattedStartDate = queryParams.startDate.format(this.queryParamDateFormat);
    const formattedEndDate = queryParams.endDate.format(this.queryParamDateFormat);

    return this.http.get<any>(`${this.urlBase}/${lang}/datos/mercados/precios-mercados-tiempo-real?start_date=${formattedStartDate}&end_date=${formattedEndDate}&time_trunc=${queryParams.timeTrunc}`);
  }

}
