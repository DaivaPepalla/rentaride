import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardataService {
  car = [
    {CarId: 'Car1', name: 'SUZUKI WAGON R', type: 'HatchBack', people: "upto 4", price: '14',
    cardesc: 'It is a compact car for inside city trips.',
    image: 'https://stat.overdrive.in/wp-content/odgallery/2019/03/50606_Maruti_Suzuki_WagonR_2019_022.JPG'},
    {CarId: 'Car2', name: 'HONDA CITY', type: 'Sedan',people: "upto 5", price: '17',
    cardesc: 'It is a Comfort sedan for Small Family Trips .',
    image: 'https://images.hindustantimes.com/auto/img/2020/07/04/960x540/Honda_City_2020_1593505211660_1593855620493.jpeg'},
    {CarId: 'Car3', name: 'MARUTI ALTO', type: 'HatchBack',people: "upto 4", price: '14',
    cardesc: 'It is a compact car for inside city trips.',
    image: 'https://images.news18.com/ibnlive/uploads/2016/10/Maruti-Alto-K10.jpg'},
    {CarId: 'Car4', name: 'SUZUKI CIAZ', type: 'Sedan',people: "upto 5", price: '17',
    cardesc: 'It is a Comfort sedan for Small Family Trips.',
    image: 'https://i2.wp.com/gomechanic.in/blog/wp-content/uploads/2019/12/Ciaz.jpeg?fit=1920%2C1080&ssl=1'},
    {CarId: 'Car5', name: 'TOYOTA INNOVA', type: 'SUV',people: "upto 8", price: '20',
    cardesc: 'This is a big guy used for long trips and combined family trips.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/2017_Toyota_Kijang_Innova_2.4_V_wagon_%28GUN142R%3B_01-12-2019%29%2C_South_Tangerang.jpg'},
    {CarId: 'Car6', name: 'MERCEDES GLC COUPE', type: 'LUXURY SUV', people: "upto 5",price: '30',
    cardesc: 'Its a luxury suv it goes  smooth !.',
    image: 'https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/Mercedes-Benz_GLC_2020_silver_1.jpg'},
    {CarId: 'Car7', name: 'MERCEDES E class', type: 'LUXURY SEDAN',people: "upto 4", price: '27',
    cardesc: 'Its a luxury sedan enjoy the luxury.',
    image: 'https://www.mercedes-benz.co.in/passengercars/mercedes-benz-cars/models/Sedan-range/sedan-range/latest-sedan/_jcr_content/contentgallerycontainer/par/contentgallery/par/contentgallerytile_238505434/image.MQ6.8.20190529074449.jpeg'}
  ];

  totalCost = 0;
  constructor() { }
}
