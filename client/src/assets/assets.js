import logo from "./logo.jpg";
import gmail_logo from "./gmail_logo.svg";
import facebook_logo from "./facebook_logo.svg";
import instagram_logo from "./instagram_logo.svg";
import twitter_logo from "./twitter_logo.svg";
import menu_icon from "./menu_icon.svg";
import search_icon from "./search_icon.svg"
import close_icon from "./close_icon.svg"
import users_icon from "./users_icon.svg"
import car_icon from "./car_icon.svg"
import location_icon from "./location_icon.svg"
import fuel_icon from "./fuel_icon.svg"
import addIcon from "./addIcon.svg"
import carIcon from "./carIcon.svg"
import carIconColored from "./carIconColored.svg"
import dashboardIcon from "./dashboardIcon.svg"
import download from "./download.svg"
import addIconColored from "./addIconColored.svg"
import listIcon from "./listIcon.svg"
import listIconColored from "./listIconColored.svg"
import cautionIconColored from "./cautionIconColored.svg"
import arrow_icon from "./arrow_icon.svg"
import star_icon from "./star_icon.svg"
import check_icon from "./check_icon.svg"
import tick_icon from "./tick_icon.svg"
import delete_icon from "./delete_icon.svg"
import eye_icon from "./eye_icon.svg"
import eye_close_icon from "./eye_close_icon.svg"
import filter_icon from "./filter_icon.svg"
import edit_icon from "./edit_icon.svg"
import calendar_icon_colored from "./calendar_icon_colored.svg"
import location_icon_colored from "./location_icon_colored.svg"
import testimonial_image_1 from "./testimonial_image_1.png"
import testimonial_image_2 from "./testimonial_image_2.png"
import main_car from "./main_car.png"
import banner_car_image from "./banner_car_image.png"
import user_profile from "./user_profile.png"
import upload_icon from "./upload_icon.svg"
import car_image1 from "./car_image1.png"
import car_image2 from "./car_image2.png"
import car_image3 from "./car_image3.png"
import car_image4 from "./car_image4.jpg"
import car_image5 from "./car_image5.jpg"
import car_image6 from "./car_image6.jpg"

export const cityList = ['New Delhi', 'Noida', 'Gurugram', 'Ghaziabad']

export const assets = {
    logo,
    gmail_logo,
    facebook_logo,
    instagram_logo,
    twitter_logo,
    menu_icon,
    search_icon,
    close_icon,
    users_icon,
    edit_icon,
    car_icon,
    location_icon,
    fuel_icon,
    addIcon,
    carIcon,
    carIconColored,
    dashboardIcon,
    download,
    addIconColored,
    listIcon,
    listIconColored,
    cautionIconColored,
    calendar_icon_colored,
    location_icon_colored,
    arrow_icon,
    star_icon,
    check_icon,
    tick_icon,
    delete_icon,
    eye_icon,
    eye_close_icon,
    filter_icon,
    testimonial_image_1,
    testimonial_image_2,
    main_car,
    banner_car_image,
    car_image1,
    upload_icon,
    user_profile,
    car_image2,
    car_image3,
    car_image4,
    car_image5,
    car_image6
}

export const menuLinks = [
    { name: "Home", path: "/" },
    { name: "Cars", path: "/cars" },
    { name: "My Bookings", path: "/my-bookings" },
]

export const ownerMenuLinks = [
    { name: "Dashboard", path: "/owner", icon: dashboardIcon, coloredIcon: download },
    { name: "Add car", path: "/owner/add-car", icon: addIcon, coloredIcon: addIconColored },
    { name: "Manage Cars", path: "/owner/manage-cars", icon: carIcon, coloredIcon: carIconColored },
    { name: "Manage Bookings", path: "/owner/manage-bookings", icon: listIcon, coloredIcon: listIconColored },
]

export const dummyUserData = {
  "_id": "6847f7cab3d8daecdb517095",
  "name": "VroomzyUser",
  "email": "admin@example.com",
  "role": "owner",
  "image": user_profile,
}

export const dummyCarData = [
    {
        "_id": "67ff5bc069c03d4e45f30b77",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "brand": "BMW",
        "model": "M5",
        "image": car_image1,
        "year": 2017,
        "category": "Sedan",
        "seating_capacity": 4,
        "fuel_type": "Hybrid",
        "transmission": "Semi-Automatic",
        "pricePerDay": 35000,
        "location": "New Delhi",
        "description": "The BMW M5 is a mid-size luxury Sedan produced by BMW. The M5 made its debut in 1984",
        "isAvailable": true,
        "createdAt": "16-04-2025T07:26:56.215Z",
    },
    {
        "_id": "67ff6b758f1b3684286a2a65",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "brand": "BMW",
        "model": "M4 Coupe",
        "image": car_image2,
        "year": 2019,
        "category": "Sedan",
        "seating_capacity": 4,
        "fuel_type": "Diesel",
        "transmission": "Manual",
        "pricePerDay": 30000,
        "location": "Noida",
        "description": "The BMW M4 Coupe is a mid-size luxury sedan produced by BMW. The Coupe made its debut in 2014",
        "isAvailable": false,
        "createdAt": "16-04-2025T08:33:57.993Z",
    },
    {
        "_id": "67ff6b9f8f1b3684286a2a68",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "brand": "Tesla ",
        "model": "Model 3",
        "image": car_image3,
        "year": 2021,
        "category": "Sedan",
        "seating_capacity": 4,
        "fuel_type": "Electric",
        "transmission": "Automatic",
        "pricePerDay": 12000,
        "location": "Gurugram",
        "description": "The Tesla Model 3 is a mid-size luxury Sedan produced by Tesla. The Model 3 made its debut in 2017",
        "isAvailable": true,
        "createdAt": "16-04-2025T08:34:39.592Z",
    },
    {
        "_id": "68009c93a3f5fc6338ea7e34",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "brand": "Volvo",
        "model": "XC40",
        "image": car_image4,
        "year": 2021,
        "category": "Hatchback",
        "seating_capacity": 4,
        "fuel_type": "Gas",
        "transmission": "Manual",
        "pricePerDay": 20000,
        "location": "Ghaziabad",
        "description": "This is a mid-size luxury hatchback produced by Volvo. The XC40 made its debut in 2017",
        "isAvailable": true,
        "createdAt": "17-04-2025T06:15:47.318Z",
    },
    {
        "_id": "6800ae35a3f5fc6338ea7f81",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "brand": "Audi",
        "model": "A6",
        "image": car_image5,
        "year": 2020,
        "category": "Sedan",
        "seating_capacity": 5,
        "fuel_type": "Petrol",
        "transmission": "Automatic",
        "pricePerDay": 25000,
        "location": "Gurugram",
        "description": "The Audi A6 is a mid-size luxury sedan known for its performance and tech features. It was first introduced in 1994.",
        "isAvailable": false,
        "createdAt": "17-04-2025T10:12:22.214Z",
    },
    {
        "_id": "6800b2faa3f5fc6338ea7f90",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "brand": "BMW",
        "model": "X5",
        "image": car_image6,
        "year": 2022,
        "category": "SUV",
        "seating_capacity": 5,
        "fuel_type": "Diesel",
        "transmission": "Automatic",
        "pricePerDay": 28000,
        "location": "Ghaziabad",
        "description": "The BMW X5 is a compact executive mid sized SUV car introduced in 1999 and offers premium comfort and design.",
        "isAvailable": true,
        "createdAt": "18-04-2025T11:30:41.002Z",
    },
];

export const dummyMyBookingsData = [
    {
        "_id": "68482bcc98eb9722b7751f70",
        "car": dummyCarData[0],
        "user": "6847f7cab3d8daecdb517095",
        "owner": "6847f7cab3d8daecdb517095",
        "pickupDate": "13-08-2025T00:00:00.000Z",
        "returnDate": "14-08-2025T00:00:00.000Z",
        "status": "confirmed",
        "price": 35000,
        "createdAt": "10-07-2025T12:57:48.244Z",
    },
    {
        "_id": "68482bb598eb9722b7751f60",
        "car": dummyCarData[1],
        "user": "6847f7cab3d8daecdb517095",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "pickupDate": "12-08-2025T00:00:00.000Z",
        "returnDate": "12-08-2025T00:00:00.000Z",
        "status": "pending",
        "price": 30000,
        "createdAt": "11-07-2025T12:57:25.613Z",
    },
    {
        "_id": "684800fa0fb481c5cfd92e56",
        "car": dummyCarData[2],
        "user": "6847f7cab3d8daecdb517095",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "pickupDate": "11-09-2025T00:00:00.000Z",
        "returnDate": "12-09-2025T00:00:00.000Z",
        "status": "pending",
        "price": 12000,
        "createdAt": "12-07-2025T09:55:06.379Z",
    },
    {
        "_id": "6847fe790fb481c5cfd92d94",
        "car": dummyCarData[3],
        "user": "6847f7cab3d8daecdb517095",
        "owner": "6847f7cab3d8daecdb517095",
        "pickupDate": "11-08-2025T00:00:00.000Z",
        "returnDate": "12-08-2025T00:00:00.000Z",
        "status": "confirmed",
        "price": 20000,
        "createdAt": "13-07-2025T09:44:25.410Z",
    },
    {
        "_id": "68483c2a98eb9722b7751f88",
        "car": dummyCarData[4],
        "user": "6847f7cab3d8daecdb517095",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "pickupDate": "15-08-2025T00:00:00.000Z",
        "returnDate": "17-08-2025T00:00:00.000Z",
        "status": "confirmed",
        "price": 25000,
        "createdAt": "14-07-2025T14:25:33.127Z",
        },
    {
        "_id": "68483c7898eb9722b7751f99",
        "car": dummyCarData[5],
        "user": "6847f7cab3d8daecdb517095",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "pickupDate": "18-07-2025T00:00:00.000Z",
        "returnDate": "20-07-2025T00:00:00.000Z",
        "status": "cancelled",
        "price": 28000,
        "createdAt": "14-07-2025T08:17:11.002Z",
}
]

export const dummyDashboardData = {
    "totalCars": 4,
    "totalBookings": 2,
    "pendingBookings": 1,
    "completedBookings": 2,
    "recentBookings": [
        dummyMyBookingsData[0],
        dummyMyBookingsData[1]
    ],
    "monthlyRevenue": 55000
}