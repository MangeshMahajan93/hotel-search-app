import { Component } from '@angular/core';
import { HotelService } from '../../services/hotel.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HotelListComponent } from '../hotel-list/hotel-list.component';

@Component({
  selector: 'app-hotel-search',
  standalone: true,
  imports: [FormsModule, CommonModule, HotelListComponent],
  templateUrl: './hotel-search.component.html',
  styleUrl: './hotel-search.component.css'
})
export class HotelSearchComponent {
  searchParams = {
    location: 'SIN',
    checkin_date: '',
    checkout_date: '',
    rooms: 1,
    guests: 1
  };
  hotels: any[] = [];

  constructor(private hotelService: HotelService) {}

  formatDate(date: string): string {
    if (!date) return '';
    const d = new Date(date);
    const day = ('0' + d.getDate()).slice(-2);
    const month = ('0' + (d.getMonth() + 1)).slice(-2);
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
  }

  searchHotels() {
    this.searchParams.checkin_date = this.formatDate(this.searchParams.checkin_date);
    this.searchParams.checkout_date = this.formatDate(this.searchParams.checkout_date);

    this.hotelService.searchHotels(this.searchParams).subscribe(response => {
      this.hotels = response.message.hotels || [];
    }, error => {
      console.error('Error:', error);
    });
  }
}
