// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class HotelService {

//   constructor() { }
// }
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  private apiUrl = 'https://b2cdev.frappe.cloud/api/method/at_utils.akbar_travels_utils.commonApi.hotel.get_hotel_info';
  private headers = new HttpHeaders({
    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWU1NjBjMmU2NTk5OTAxN2FjYTI0ODMiLCJ1bmlxdWVfbmFtZSI6I',
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) {}

  searchHotels(params: any): Observable<any> {
    return this.http.post(this.apiUrl, params, { headers: this.headers });
  }
}
