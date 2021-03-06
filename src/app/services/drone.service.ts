import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class DroneService {

    // private drone: any

    constructor(private http: HttpClient) {
        // this.drone = [
        //     {
        //         "categories": [
        //             {
        //                 "id": 1,
        //                 "name": "Profesional"
        //             },
        //             {
        //                 "id": 2,
        //                 "name": "Video"
        //             },
        //             {
        //                 "id": 3,
        //                 "name": "Competencia"
        //             },
        //             {
        //                 "id": 4,
        //                 "name": "Mini"
        //             },
        //             {
        //                 "id": 5,
        //                 "name": "Iniciacion"
        //             }

        //         ],
        //         "products": [
        //             {
        //                 "id": 1,
        //                 "name": "UX5 UAVS",
        //                 "categories": [
        //                     1
        //                 ],
        //                 "available": true,
        //                 "bestSeller": true,
        //                 "price": "14000000",
        //                 "img": "http://delair.aero/wp-content/uploads/2017/01/UX11-shadow-product-prez.jpg",
        //                 "description": "Velocidad 54 km/h (34 mph), peso 1.4 kg (3.1 lbs), rango de vuelo 53 km (33 mi)"
        //             },
        //             {
        //                 "id": 2,
        //                 "name": "UX5 HP",
        //                 "categories": [
        //                     1
        //                 ],
        //                 "available": true,
        //                 "bestSeller": false,
        //                 "price": "9000000",
        //                 "img": "http://delair.aero/wp-content/uploads/2017/03/UX5-HP-product.jpg",
        //                 "description": "Velocidad 80 km/h (60 mph), peso 2.9 kg (1.5 lbs), rango de vuelo 60 km (35 mi)"
        //             },
        //             {
        //                 "id": 3,
        //                 "name": "A6 Plus",
        //                 "categories": [
        //                     1
        //                 ],
        //                 "available": false,
        //                 "bestSeller": false,
        //                 "price": "10500000",
        //                 "img": "http://en.mmcuav.com/Private/ProductImg/Other/6361448312740625001239354299.jpg",
        //                 "description": "Velocidad 50 km/h (35 mph), peso 1.9 kg (1.5 lbs), rango de vuelo 70 km (30 mi)"
        //             },
        //             {
        //                 "id": 4,
        //                 "name": "Yuneec Q500",
        //                 "categories": [
        //                     1
        //                 ],
        //                 "available": true,
        //                 "bestSeller": true,
        //                 "price": "9000000",
        //                 "img": "https://images-na.ssl-images-amazon.com/images/I/51o4N6Puy-L._SL1000_.jpg",
        //                 "description": "Velocidad 70 km/h (60 mph), peso 2.9 kg (1.5 lbs), rango de vuelo 80 km (45 mi)"
        //             },


        //             {
        //                 "id": 5,
        //                 "name": "DJI Inspire 2.0",
        //                 "categories": [
        //                     2
        //                 ],
        //                 "available": true,
        //                 "bestSeller": true,
        //                 "price": "14000000",
        //                 "img": "https://images-na.ssl-images-amazon.com/images/I/416ZvpgyNML.jpg",
        //                 "description": "Velocidad 50 km/h (60 mph), peso 3.2 kg (1.6 lbs), rango de vuelo 80 km (30 mi), video 4k 60fps"
        //             },
        //             {
        //                 "id": 6,
        //                 "name": "Tornado H920",
        //                 "categories": [
        //                     2
        //                 ],


        //                 "available": true,
        //                 "bestSeller": true,
        //                 "price": "11000000",
        //                 "img": "https://images-na.ssl-images-amazon.com/images/I/41MxXOipxrL.jpg",
        //                 "description": "Velocidad 45 km/h (35 mph), peso 3.3 kg (1.7 lbs), rango de vuelo 60 km (25 mi), video 4k 60fps"
        //             },
        //             {
        //                 "id": 7,
        //                 "name": "DJI-MaviC-Air",
        //                 "categories": [
        //                     1, 2
        //                 ],
        //                 "available": false,
        //                 "bestSeller": false,
        //                 "price": "3000000",
        //                 "img": "https://i.imgur.com/v0FQTwT.png",
        //                 "description": "Velocidad 45 km/h (35 mph), peso 3.3 kg (1.7 lbs), rango de vuelo 60 km (25 mi), video 4k 60fps"
        //             },
        //             {
        //                 "id": 8,
        //                 "name": "Blade-Chroma",
        //                 "categories": [
        //                     1, 2
        //                 ],
        //                 "available": true,
        //                 "bestSeller": false,
        //                 "price": "2200000",
        //                 "img": "http://epfilms.tv/wp-content/uploads/2016/07/Blade-Chroma.png",
        //                 "description": "Velocidad 40 km/h (30 mph), peso 3.3 kg (1.7 lbs), rango de vuelo 10 km (25 mi), video 4k 30fps"
        //             },
        //             {
        //                 "id": 9,
        //                 "name": "DJI Mavic Pro",
        //                 "categories": [
        //                     2
        //                 ],
        //                 "available": true,
        //                 "bestSeller": false,
        //                 "price": "1600000",
        //                 "img": "http://epfilms.tv/wp-content/uploads/2016/10/DJI-Mavic.png",
        //                 "description": "Velocidad 40 km/h (30 mph), peso 3.3 kg (1.7 lbs), rango de vuelo 13 km (25 mi), video 4k 30fps"
        //             },
        //             {
        //                 "id": 10,
        //                 "name": "Walkera F210",
        //                 "categories": [
        //                     3
        //                 ],
        //                 "available": true,
        //                 "bestSeller": false,
        //                 "price": "1600000",
        //                 "img": "https://dronepedia.xyz/wp-content/uploads/2017/03/Walkera-F210-Professional-Racer.png",
        //                 "description": "Velocidad 90 km/h (30 mph), peso 3.3 kg (1.7 lbs), rango de vuelo 3 km (25 mi), video FHD 30fps"
        //             }

        //             ,
        //             {
        //                 "id": 11,
        //                 "name": "Blade Mach",
        //                 "categories": [
        //                     3
        //                 ],
        //                 "available": true,
        //                 "bestSeller": true,
        //                 "price": "650000",
        //                 "img": "https://images-na.ssl-images-amazon.com/images/I/81uiwwPxZwL._SL1500_.jpg",
        //                 "description": "Velocidad 95 km/h (30 mph), peso 3.3 kg (1.7 lbs), rango de vuelo 3 km (25 mi), video FHD 30fps"
        //             },
        //             {
        //                 "id": 12,
        //                 "name": "Arris FPV250",
        //                 "categories": [
        //                     3
        //                 ],
        //                 "available": true,
        //                 "bestSeller": true,
        //                 "price": "300000",
        //                 "img": "http:https://dronepedia.xyz/wp-content/uploads/2017/03/Arris-FPV250-BNF.png",
        //                 "description": "Velocidad 65 km/h (30 mph), peso 3.3 kg (1.7 lbs), rango de vuelo 1 km (25 mi), video HD 30fps"
        //             },
        //             {
        //                 "id": 13,
        //                 "name": "Hubsan H107D X4",
        //                 "categories": [
        //                     3
        //                 ],
        //                 "available": false,
        //                 "bestSeller": false,
        //                 "price": "4500",
        //                 "img": "https://dronepedia.xyz/wp-content/uploads/2017/03/Arris-FPV250-BNF.png",
        //                 "description": "Velocidad 60 km/h (30 mph), peso .08 kg (1.7 lbs), rango de vuelo 800 m (25 mi), video HD 30fps"
        //             },
        //             {
        //                 "id": 14,
        //                 "name": "Rabing Mini",
        //                 "categories": [
        //                     4
        //                 ],
        //                 "available": true,
        //                 "bestSeller": false,
        //                 "price": "100000",
        //                 "img": "https://images-na.ssl-images-amazon.com/images/I/61Gn6GhYNjL._SL1001_.jpg",
        //                 "description": "peso 0.4 kg (0.8 lbs), rango de vuelo 200 m (25 mi), video HD 30fps"
        //             },
        //             {
        //                 "id": 15,
        //                 "name": "Holy Stone HS170",
        //                 "categories": [
        //                     4
        //                 ],
        //                 "available": false,
        //                 "bestSeller": false,
        //                 "price": "95000",
        //                 "img": "http://www.rotorcopters.com/wp-content/uploads/Holy-Stone-HS170-1F.jpg",
        //                 "description": "peso 0.4 kg (0.8 lbs), rango de vuelo 200 m (25 mi), fpv N/A"
        //             },
        //             {
        //                 "id": 16,
        //                 "name": "EACHINE E010 Mini",
        //                 "categories": [
        //                     4
        //                 ],
        //                 "available": true,
        //                 "bestSeller": false,
        //                 "price": "80000",
        //                 "img": "http://www.rotorcopters.com/wp-content/uploads/EACHINE-E010-.jpg",
        //                 "description": "peso 0.3 kg (0.6 lbs), rango de vuelo 200 m (25 mi), fpv N/A"
        //             },
        //             {
        //                 "id": 17,
        //                 "name": "TOZO Q2020",
        //                 "categories": [
        //                     4
        //                 ],
        //                 "available": true,
        //                 "bestSeller": true,
        //                 "price": "75000",
        //                 "img": "http://www.rotorcopters.com/wp-content/uploads/TOZO-Q2020.jpg",
        //                 "description": "peso 0.3 kg (0.5 lbs), rango de vuelo 200 m (25 mi), video HD 30fps"
        //             },
        //             {
        //                 "id": 18,
        //                 "name": "Syma X20 Mini",
        //                 "categories": [
        //                     4
        //                 ],
        //                 "available": true,
        //                 "bestSeller": true,
        //                 "price": "75000",
        //                 "img": "http://www.rotorcopters.com/wp-content/uploads/Syma-X20-Mini-Pocket-Drone.jpg",
        //                 "description": "peso 0.3 kg (0.6 lbs), rango de vuelo 200 m (25 mi), fpv N/A"
        //             },
        //             {
        //                 "id": 19,
        //                 "name": "The Cheerson CX-10 Mini",
        //                 "categories": [
        //                     4
        //                 ],
        //                 "available": true,
        //                 "bestSeller": true,
        //                 "price": "70000",
        //                 "img": "http://www.rotorcopters.com/wp-content/uploads/Cheerson-1F.jpg",
        //                 "description": "peso 0.3 kg (0.6 lbs), rango de vuelo 200 m (25 mi), fpv N/A"
        //             },
        //             {
        //                 "id": 20,
        //                 "name": "Syma X5C",
        //                 "categories": [
        //                     5
        //                 ],
        //                 "available": true,
        //                 "bestSeller": false,
        //                 "price": "145000",
        //                 "img": "http://img.microsiervos.com/images2016/Syma-X5C-1-Explorer.jpg",
        //                 "description": "peso 0.3 kg (0.5 lbs), rango de vuelo 200 m (25 mi), video vga"
        //             },
        //             {
        //                 "id": 21,
        //                 "name": "Syma X5HC",
        //                 "categories": [
        //                     5
        //                 ],
        //                 "available": true,
        //                 "bestSeller": false,
        //                 "price": "160000",
        //                 "img": "https://gloimg.gbtcdn.com/gb/pdm-product-pic/Electronic/2018/01/18/source-img/20180118172913_73059.jpg",
        //                 "description": "peso 0.3 kg (0.5 lbs), rango de vuelo 200 m (25 mi), video vga"
        //             },
        //             {
        //                 "id": 22,
        //                 "name": "Drocon Cyclone X708W",
        //                 "categories": [
        //                     5
        //                 ],
        //                 "available": true,
        //                 "bestSeller": false,
        //                 "price": "135000",
        //                 "img": "https://www.whirloo.com/wp-content/uploads/2017/11/DROCON-Cyclone-X708W.jpg",
        //                 "description": "peso 0.3 kg (0.5 lbs), rango de vuelo 120 m (25 mi), video vga"
        //             },
        //             {
        //                 "id": 23,
        //                 "name": "JJRC H8C",
        //                 "categories": [
        //                     5
        //                 ],
        //                 "available": false,
        //                 "bestSeller": true,
        //                 "price": "60",
        //                 "img": "https://images-eu.ssl-images-amazon.com/images/I/51%2B3xNYk%2BHL.jpg",
        //                 "description": "peso 0.3 kg (0.5 lbs), rango de vuelo 120 m (25 mi), video vga"
        //             },
        //             {
        //                 "id": 24,
        //                 "name": "Jjjj",
        //                 "categories": [
        //                     6
        //                 ],
        //                 "available": true,
        //                 "bestSeller": false,
        //                 "price": "310000",
        //                 "img": "https://img.tttcdn.com/product/original/p/gu1/R/1/RM7954-1/RM7954-1-1-5fc4-GV6Z.jpg",
        //                 "description": "peso 0.3 kg (0.5 lbs), rango de vuelo 200 m (25 mi), video HD 30fps"
        //             }

        //         ]
        //     }
        // ]
    }



    getProductsDrones() {
        return this.http.get(environment.productsEnvoriment).map((data: any) => data.products)

    }
    getCategoriesDrones() {
        return this.http.get(environment.productsEnvoriment).map((data: any) => data.categories)

    }

}
