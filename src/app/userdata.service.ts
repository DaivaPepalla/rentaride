import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  userdata = [
    {UserId: 'user1', username: 'user', password: 'user' , fname: 'user', lname: 'user' }
  ];

  bookedCars = [{CarId: 'Car1', name: 'Jeep compass', type: 'SUV', people: 'upto 5', price: '18',
  cardesc: 'The perfect adventure car.',
  image: 'https://auto.ndtvimg.com/car-images/medium/jeep/compass/jeep-compass.jpg?v=2'}
  ];
  id = 2;
  constructor() { }
}
