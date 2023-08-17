import img from '../assets/products/img.png'
import img1 from '../assets/products/img_1.png'
import img2 from '../assets/products/img_2.png'
import img3 from '../assets/products/img_3.png'
import img4 from '../assets/products/img_4.png'
import img5 from '../assets/products/img_5.png'
import img6 from '../assets/products/img_6.png'
import img7 from '../assets/products/img_7.png'
import img8 from '../assets/products/img_8.png'
import img9 from '../assets/products/img_9.png'
import img10 from '../assets/products/img_10.png'
import img11 from '../assets/products/img_11.png'

const products = [
    {
        id: 1,
        productName: "Samsung Galaxy A51 Red 64 GB",
        img: img,
        sliderImg: [
            {
                id: 1,
                image: img
            },
            {
                id: 2,
                image: img1
            },
        ],
        descr: 'Потрясающий экран, реальная плавная прокрутка',
        price: '150',
        color: 'Chameleon',
        ram: '4GB',
        memory: '64GB',
        category: 'Electronic',
        inFavorite: false,
        productCondition: 'new',

    },
    {
        id: 2,
        productName: "Ecase Leather Folio",
        img: img1,
        sliderImg: [
            {
                id: 1,
                image: img
            },
            {
                id: 2,
                image: img1
            },
            {
                id: 3,
                image: img1
            },
            {
                id: 4,
                image: img1
            },
            {
                id: 5,
                image: img1
            },
            {
                id: 6,
                image: img1
            },
        ],
        descr: 'Smart Watch for you Ecase Leather Folio',
        price: '32',
        color: 'Pink',
        ram: '4GB',
        memory: '32GB',
        category: 'Accessories',
        inFavorite: false,
        productCondition: 'new',

    },
    {
        id: 3,
        productName: "Mechanic keyboard",
        img: img2,
        sliderImg: [
            {
                id: 1,
                image: img2
            },
            {
                id: 2,
                image: img1
            },
            {
                id: 3,
                image: img2
            }
        ],
        descr: 'Gaming mechanic keyboard Varmilo',
        price: '50',
        color: 'Black',
        ram: '4GB',
        memory: '64GB',
        category: 'Accessories',
        inFavorite: false,
        productCondition: 'new',

    },
    {
        id: 4,
        productName: "Airpods",
        img: img3,
        sliderImg: [
            {
                id: 1,
                image: img3
            },
            {
                id: 2,
                image: img1
            },
            {
                id: 3,
                image: img2
            }
        ],
        descr: 'Airpods pro 2 lux copy',
        price: '110',
        color: 'White',
        ram: '4GB',
        memory: '64GB',
        category: 'Accessories',
        inFavorite: false,
        productCondition: 'new',

    },
    {
        id: 5,
        productName: "Hoodie",
        img: img4,
        sliderImg: [
            {
                id: 1,
                image: img4
            },
            {
                id: 2,
                image: img1
            },
            {
                id: 3,
                image: img2
            }
        ],
        descr: 'Soft Sportswear for you',
        price: '55',
        color: 'light brown',
        ram: '4GB',
        memory: '64GB',
        category: 'clothes',
        inFavorite: false,
        productCondition: 'new',
    },
    {
        id: 6,
        productName: "Wash Machine",
        img: img5,
        sliderImg: [
            {
                id: 1,
                image: img5
            },
            {
                id: 2,
                image: img1
            },
            {
                id: 3,
                image: img2
            }
        ],
        descr: 'Electrosh Wash Machine for you',
        price: '600',
        color: 'gray',
        ram: '4GB',
        memory: '64GB',
        category: 'household-appliances',
        inFavorite: false,
        productCondition: 'new',
    },
    {
        id: 7,
        productName: "Shoes",
        img: img6,
        sliderImg: [
            {
                id: 1,
                image: img6
            },
            {
                id: 2,
                image: img1
            },
            {
                id: 3,
                image: img2
            }
        ],
        descr: 'Shoe Sneakers for you',
        price: '95',
        color: 'white',
        ram: '8GB',
        memory: '64GB',
        category: 'shoes',
        inFavorite: false,
        productCondition: 'new',
    },
    {
        id: 8,
        productName: "Fruits",
        img: img7,
        sliderImg: [
            {
                id: 1,
                image: img7
            },
            {
                id: 2,
                image: img1
            },
            {
                id: 3,
                image: img2
            },
        ],
        descr: "Wet Fruits",
        price: "22",
        category: "Food-products",
        inFavorite: false,
        ProductCondition: "new",
        Memory: "32GB",
        RAM: "4GB"
    },
    {
        id: 9,
        productName: "Sports products",
        img: img8,
        sliderImg: [
            {
                id: 1,
                image: img8
            },
            {
                id: 2,
                image: img1
            },
            {
                id: 3,
                image: img2
            },
        ],
        descr: "Sports products for you",
        price: "310",
        category: "Sports product",
        selected: true,
        inFavorite: false,
        ProductCondition: "new",
        Memory: "32GB",
        RAM: "4GB"
    },
    {
        id: 10,
        productName: "Samsung Galaxy A51 Red 64 GB",
        img: img,
        sliderImg: [
            {
                id: 1,
                image: img
            },
            {
                id: 2,
                image: img1
            },
            {
                id: 3,
                image: img2
            },
        ],
        descr: "Потрясающий экран, реальная плавная прокрутка",
        price: "400",
        color: "cyan",
        category: "Electronic",
        inFavorite: true,
        ProductCondition: "new",
        Memory: "32GB",
        RAM: "4GB"
    }, {
        id: 11,
        productName: "Samsung Galaxy A51 Red 64 GB",
        img: img,
        sliderImg: [
            {
                id: 1,
                image: img
            },
            {
                id: 2,
                image: img1
            },
            {
                id: 3,
                image: img2
            },
        ],
        descr: "Потрясающий экран, реальная плавная прокрутка",
        price: "400",
        color: "cyan",
        category: "Electronic",
        inFavorite: true,
        ProductCondition: "new",
        Memory: "32GB",
        RAM: "4GB"
    }, {
        id: 12,
        productName: "Samsung Galaxy A51 Red 64 GB",
        img: img,
        sliderImg: [
            {
                id: 1,
                image: img
            },
            {
                id: 2,
                image: img1
            },
        ],
        descr: "Потрясающий экран, реальная плавная прокрутка",
        price: "400",
        color: "cyan",
        category: "Electronic",
        inFavorite: true,
        ProductCondition: "new",
        Memory: "32GB",
        RAM: "4GB"
    }, {
        id: 13,
        productName: "Sports products",
        img: img8,
        sliderImg: [
            {
                id: 1,
                image: img8
            },
            {
                id: 2,
                image: img1
            },
            {
                id: 3,
                image: img2
            },
            {
                id: 4,
                image: img3
            },
            {
                id: 5,
                image: img4
            },
            {
                id: 6,
                image: img5
            },
        ],
        descr: "Sports products for you",
        price: "310",
        category: "Sports product",
        inFavorite: false,
        ProductCondition: "new",
        Memory: "32GB",
        RAM: "4GB"
    }, {
        id: 14,
        productName: "Sports products",
        img: img8,
        sliderImg: [
            {
                id: 1,
                image: img8
            },
            {
                id: 2,
                image: img1
            },
            {
                id: 3,
                image: img2
            },
            {
                id: 4,
                image: img3
            },
            {
                id: 5,
                image: img4
            },
            {
                id: 6,
                image: img5
            },
        ],
        descr: "Sports products for you",
        price: "310",
        category: "Sports product",
        inFavorite: false,
        ProductCondition: "new",
        Memory: "32GB",
        RAM: "4GB"
    }, {
        id: 15,
        productName: "Sports products",
        img: img8,
        sliderImg: [
            {
                id: 1,
                image: img8
            },
            {
                id: 2,
                image: img1
            },
            {
                id: 3,
                image: img2
            },
            {
                id: 4,
                image: img3
            },
            {
                id: 5,
                image: img4
            },
            {
                id: 6,
                image: img5
            },
        ],
        descr: "Sports products for you",
        price: "310",
        category: "Sports product",
        inFavorite: false,
        ProductCondition: "new",
        Memory: "32GB",
        RAM: "4GB"
    },
    {
        id: 16,
        productName: "Shoes",
        img: img6,
        sliderImg: [
            {
                id: 1,
                image: img6
            },
            {
                id: 2,
                image: img1
            },
            {
                id: 3,
                image: img2
            },
            {
                id: 4,
                image: img3
            },
            {
                id: 5,
                image: img4
            },
            {
                id: 6,
                image: img5
            },
        ],
        descr: "Shoe Sneakers for you",
        price: "95",
        color: "white",
        category: "Shoes",
        inFavorite: false,
        ProductCondition: "new",
        Memory: "32GB",
        RAM: "4GB"
    },
    {
        id: 17,
        productName: "Shoes",
        img: img6,
        sliderImg: [
            {
                id: 1,
                image: img6
            },
            {
                id: 2,
                image: img1
            },
            {
                id: 3,
                image: img2
            },
            {
                id: 4,
                image: img3
            },
            {
                id: 5,
                image: img4
            },
            {
                id: 6,
                image: img5
            },
        ],
        descr: "Shoe Sneakers for you",
        price: "95",
        color: "white",
        category: "Shoes",
        inFavorite: false,
        ProductCondition: "new",
        Memory: "32GB",
        RAM: "4GB"
    },

    {
        id: 18,
        productName: "Shoes",
        img: img6,
        sliderImg: [
            {
                id: 1,
                image: img6
            },
            {
                id: 2,
                image: img1
            },
            {
                id: 3,
                image: img2
            },
            {
                id: 4,
                image: img3
            },
            {
                id: 5,
                image: img4
            },
            {
                id: 6,
                image: img5
            },
        ],
        descr: "Shoe Sneakers for you",
        price: "95",
        color: "white",
        category: "Shoes",
       inFavorite: false,
        ProductCondition: "new",
        Memory: "32GB",
        RAM: "4GB"
    }, {
        id: 19,
        productName: "Sportswear",
        image: img4,
        sliderImages: [
            {
                id: 1,
                image: img4
            },
            {
                id: 2,
                image: img1
            },
            {
                id: 3,
                image: img2
            },
            {
                id: 4,
                image: img3
            },
            {
                id: 5,
                image: img4
            },
            {
                id: 6,
                image: img5
            },
        ],
        descr: "Soft Sportswear for you",
        price: "55",
        color: "white",
        category: "Clothes",
        quantity: 1,
        selected: true,
        isFavourite: false,
        pathName: "Clothes",
        ProductCondition: "new",
        Memory: "32GB",
        RAM: "4GB"
    }, {
        id: 20,
        productName: "Sportswear",
        image: img4,
        sliderImages: [
            {
                id: 1,
                image: img4
            },
            {
                id: 2,
                image: img1
            },
            {
                id: 3,
                image: img2
            },
            {
                id: 4,
                image: img3
            },
            {
                id: 5,
                image: img4
            },
            {
                id: 6,
                image: img5
            },
        ],
        descr: "Soft Sportswear for you",
        price: "55",
        color: "white",
        category: "Clothes",
        quantity: 1,
        selected: true,
        isFavourite: false,
        pathName: "Clothes",
        ProductCondition: "new",
        Memory: "32GB",
        RAM: "4GB"
    }, {
        id: 21,
        productName: "Sportswear",
        image: img4,
        sliderImages: [
            {
                id: 1,
                image: img4
            },
            {
                id: 2,
                image: img1
            },
            {
                id: 3,
                image: img2
            },
            {
                id: 4,
                image: img3
            },
            {
                id: 5,
                image: img4
            },
            {
                id: 6,
                image: img5
            },
        ],
        descr: "Soft Sportswear for you",
        price: "55",
        color: "white",
        category: "Clothes",
        quantity: 1,
        selected: true,
        isFavourite: false,
        pathName: "Clothes",
        ProductCondition: "new",
        Memory: "32GB",
        RAM: "4GB"
    }, {
        id: 22,
        productName: "Wash Machine",
        image: img5,
        sliderImages: [
            {
                id: 1,
                image: img5
            },
            {
                id: 2,
                image: img1
            },
            {
                id: 3,
                image: img2
            },
            {
                id: 4,
                image: img3
            },
            {
                id: 5,
                image: img4
            },
            {
                id: 6,
                image: img5
            },
        ],
        descr: "Electrosh Wash Machine for you",
        price: "200",
        color: "grey",
        category: "Household appliances",
        quantity: 1,
        selected: true,
        isFavourite: false,
        pathName: "Household-appliances",
        ProductCondition: "new",
        Memory: "32GB",
        RAM: "4GB"
    }, {
        id: 23,
        productName: "Wash Machine",
        image: img5,
        sliderImages: [
            {
                id: 1,
                image: img5
            },
            {
                id: 2,
                image: img1
            },
            {
                id: 3,
                image: img2
            },
            {
                id: 4,
                image: img3
            },
            {
                id: 5,
                image: img4
            },
            {
                id: 6,
                image: img5
            },
        ],
        descr: "Electrosh Wash Machine for you",
        price: "200",
        color: "grey",
        category: "Household appliances",
        quantity: 1,
        selected: true,
        isFavourite: false,
        pathName: "Household-appliances",
        ProductCondition: "new",
        Memory: "32GB",
        RAM: "4GB"
    }, {
        id: 24,
        productName: "Wash Machine",
        image: img5,
        sliderImages: [
            {
                id: 1,
                image: img5
            },
            {
                id: 2,
                image: img1
            },
            {
                id: 3,
                image: img2
            },
            {
                id: 4,
                image: img3
            },
            {
                id: 5,
                image: img4
            },
            {
                id: 6,
                image: img5
            },
        ],
        descr: "Electrosh Wash Machine for you",
        price: "200",
        color: "grey",
        category: "Household appliances",
        quantity: 1,
        selected: true,
        isFavourite: false,
        pathName: "Household-appliances",
        ProductCondition: "new",
        Memory: "32GB",
        RAM: "4GB"
    }, {
        id: 25,
        productName: "Wash Machine",
        image: img5,
        sliderImages: [
            {
                id: 1,
                image: img5
            },
            {
                id: 2,
                image: img1
            },
            {
                id: 3,
                image: img2
            },
            {
                id: 4,
                image: img3
            },
            {
                id: 5,
                image: img4
            },
            {
                id: 6,
                image: img5
            },
        ],
        descr: "Electrosh Wash Machine for you",
        price: "200",
        color: "grey",
        category: "Household appliances",
        quantity: 1,
        selected: true,
        isFavourite: false,
        pathName: "Household-appliances",
        ProductCondition: "new",
        Memory: "32GB",
        RAM: "4GB"
    },
    {
        id: 26,
        productName: "Fruits",
        image: img7,
        sliderImages: [
            {
                id: 1,
                image: img7
            },
            {
                id: 2,
                image: img1
            },
            {
                id: 3,
                image: img2
            },
            {
                id: 4,
                image: img3
            },
            {
                id: 5,
                image: img4
            },
            {
                id: 6,
                image: img5
            },
        ],
        descr: "Wet Fruits",
        price: "22",
        category: "Food products",
        quantity: 1,
        selected: true,
        isFavourite: false,
        pathName: "Food-products",
        ProductCondition: "new",
        Memory: "32GB",
        RAM: "4GB"
    }, {
        id: 27,
        productName: "Fruits",
        image: img7,
        sliderImages: [
            {
                id: 1,
                image: img7
            },
            {
                id: 2,
                image: img1
            },
            {
                id: 3,
                image: img2
            },
            {
                id: 4,
                image: img3
            },
            {
                id: 5,
                image: img4
            },
            {
                id: 6,
                image: img5
            },
        ],
        descr: "Wet Fruits",
        price: "22",
        category: "Food products",
        quantity: 1,
        selected: true,
        isFavourite: false,
        pathName: "Food-products",
        ProductCondition: "new",
        Memory: "32GB",
        RAM: "4GB"

    },
    {
        id: 28,
        productName: "Fruits",
        image: img7,
        sliderImages: [
            {
                id: 1,
                image: img7
            },
            {
                id: 2,
                image: img1
            },
            {
                id: 3,
                image: img2
            },
            {
                id: 4,
                image: img3
            },
            {
                id: 5,
                image: img4
            },
            {
                id: 6,
                image: img5
            },
        ],
        descr: "Wet Fruits",
        price: "22",
        category: "Food products",
        quantity: 1,
        selected: true,
        isFavourite: false,
        pathName: "Food-products",
        ProductCondition: "new",
        Memory: "32GB",
        RAM: "4GB"
    },
    {
        id: 29,
        productName: "Airpods",
        image: img3,
        sliderImages: [
            {
                id: 1,
                image: img3
            },
            {
                id: 2,
                image: img1
            },
            {
                id: 3,
                image: img2
            },
            {
                id: 4,
                image: img3
            },
            {
                id: 5,
                image: img4
            },
            {
                id: 6,
                image: img5
            },
        ],
        descr: "Airpods 2.2 white for you",
        price: "110",
        color: "white",
        category: "Accessories",
        quantity: 1,
        selected: true,
        isFavourite: false,
        pathName: "Accessories",
        ProductCondition: "new",
        Memory: "32GB",
        RAM: "4GB"
    },
    {
        id: 30,
        productName: "Auto Water",
        image: img9,
        sliderImages: [
            {
                id: 1,
                image: img9
            },
            {
                id: 2,
                image: img1
            },
            {
                id: 3,
                image: img2
            },
            {
                id: 4,
                image: img3
            },
            {
                id: 5,
                image: img4
            },
            {
                id: 6,
                image: img5
            },
        ],
        descr: "Auto commodities for you water",
        price: "110",
        category: "Auto commodities",
        quantity: 1,
        selected: true,
        isFavourite: false,
        pathName: "Auto-commodities",
        ProductCondition: "new",
        Memory: "32GB",
        RAM: "4GB"
    },
    {
        id: 31,
        productName: "Auto Water",
        image: img9,
        sliderImages: [
            {
                id: 1,
                image: img9
            },
            {
                id: 2,
                image: img1
            },
            {
                id: 3,
                image: img2
            },
            {
                id: 4,
                image: img3
            },
            {
                id: 5,
                image: img4
            },
            {
                id: 6,
                image: img5
            },
        ],
        descr: "Auto commodities for you water",
        price: "110",
        category: "Auto commodities",
        quantity: 1,
        selected: true,
        isFavourite: false,
        pathName: "Auto-commodities",
        ProductCondition: "new",
        Memory: "32GB",
        RAM: "4GB"
    },
    {
        id: 32,
        productName: "Auto Water",
        image: img9,
        sliderImages: [
            {
                id: 1,
                image: img9
            },
            {
                id: 2,
                image: img1
            },
            {
                id: 3,
                image: img2
            },
            {
                id: 4,
                image: img3
            },
            {
                id: 5,
                image: img4
            },
            {
                id: 6,
                image: img5
            },
        ],
        descr: "Auto commodities for you water",
        price: "110",
        category: "Auto commodities",
        quantity: 1,
        selected: true,
        isFavourite: false,
        pathName: "Auto-commodities",
        ProductCondition: "new",
        Memory: "32GB",
        RAM: "4GB"
    },
    {
        id: 33,
        productName: "Auto Water",
        image: img9,
        sliderImages: [
            {
                id: 1,
                image: img9
            },
            {
                id: 2,
                image: img1
            },
            {
                id: 3,
                image: img2
            },
            {
                id: 4,
                image: img3
            },
            {
                id: 5,
                image: img4
            },
            {
                id: 6,
                image: img5
            },
        ],
        descr: "Auto commodities for you water",
        price: "110",
        category: "Auto commodities",
        quantity: 1,
        selected: true,
        isFavourite: false,
        pathName: "Auto-commodities",
        ProductCondition: "new",
        Memory: "32GB",
        RAM: "4GB"
    },
    {
        id: 34,
        productName: "Glue",
        image: img10,
        sliderImages: [
            {
                id: 1,
                image: img10
            },
            {
                id: 2,
                image: img1
            },
            {
                id: 3,
                image: img2
            },
            {
                id: 4,
                image: img3
            },
            {
                id: 5,
                image: img4
            },
            {
                id: 6,
                image: img5
            },
        ],
        descr: "Glue for you and other think",
        price: "110",
        category: "Construction and repair",
        quantity: 1,
        selected: true,
        isFavourite: false,
        pathName: "Construction-and-repair",
        ProductCondition: "new",
        Memory: "32GB",
        RAM: "4GB"
    },
    {
        id: 35,
        productName: "Glue",
        image: img10,
        sliderImages: [
            {
                id: 1,
                image: img10
            },
            {
                id: 2,
                image: img1
            },
            {
                id: 3,
                image: img2
            },
            {
                id: 4,
                image: img3
            },
            {
                id: 5,
                image: img4
            },
            {
                id: 6,
                image: img5
            },
        ],
        descr: "Glue for you and other think",
        price: "110",
        category: "Construction and repair",
        quantity: 1,
        selected: true,
        isFavourite: false,
        pathName: "Construction-and-repair",
        ProductCondition: "new",
        Memory: "32GB",
        RAM: "4GB"
    },
    {
        id: 36,
        productName: "Glue",
        image: img10,
        sliderImages: [
            {
                id: 1,
                image: img10
            },
            {
                id: 2,
                image: img1
            },
            {
                id: 3,
                image: img2
            },
            {
                id: 4,
                image: img3
            },
            {
                id: 5,
                image: img4
            },
            {
                id: 6,
                image: img5
            },
        ],
        descr: "Glue for you and other think",
        price: "110",
        category: "Construction and repair",
        quantity: 1,
        selected: true,
        isFavourite: false,
        pathName: "Construction-and-repair",
        ProductCondition: "new",
        Memory: "32GB",
        RAM: "4GB"
    },
    {
        id: 37,
        productName: "Glue",
        image: img10,
        sliderImages: [
            {
                id: 1,
                image: img10
            },
            {
                id: 2,
                image: img1
            },
            {
                id: 3,
                image: img2
            },
            {
                id: 4,
                image: img3
            },
            {
                id: 5,
                image: img4
            },
            {
                id: 6,
                image: img5
            },
        ],
        descr: "Glue for you and other think",
        price: "110",
        category: "Construction and repair",
        quantity: 1,
        selected: true,
        isFavourite: false,
        pathName: "Construction-and-repair",
        ProductCondition: "new",
        Memory: "32GB",
        RAM: "4GB"
    },
    {
        id: 38,
        productName: "Book",
        image: img11,
        sliderImages: [
            {
                id: 1,
                image: img11
            },
            {
                id: 2,
                image: img1
            },
            {
                id: 3,
                image: img2
            },
            {
                id: 4,
                image: img3
            },
            {
                id: 5,
                image: img4
            },
            {
                id: 6,
                image: img5
            },
        ],
        descr: "Book about life Stiv Jobs",
        price: "110",
        category: "Books",
        quantity: 1,
        selected: true,
        isFavourite: false,
        pathName: "Books",
        ProductCondition: "new",
        Memory: "32GB",
        RAM: "4GB"
    },
    {
        id: 39,
        productName: "Book",
        image: img11,
        sliderImages: [
            {
                id: 1,
                image: img11
            },
            {
                id: 2,
                image: img1
            },
            {
                id: 3,
                image: img2
            },
            {
                id: 4,
                image: img3
            },
            {
                id: 5,
                image: img4
            },
            {
                id: 6,
                image: img5
            },
        ],
        descr: "Book about life Stiv Jobs",
        price: "110",
        category: "Books",
        quantity: 1,
        selected: true,
        isFavourite: false,
        pathName: "Books",
        ProductCondition: "new",
        Memory: "32GB",
        RAM: "4GB"
    },
    {
        id: 40,
        productName: "Book",
        image: img11,
        sliderImages: [
            {
                id: 1,
                image: img11
            },
            {
                id: 2,
                image: img1
            },
            {
                id: 3,
                image: img2
            },
            {
                id: 4,
                image: img3
            },
            {
                id: 5,
                image: img4
            },
            {
                id: 6,
                image: img5
            },
        ],
        descr: "Book about life Stiv Jobs",
        price: "110",
        category: "Books",
        quantity: 1,
        selected: true,
        isFavourite: false,
        pathName: "Books",
        ProductCondition: "new",
        Memory: "32GB",
        RAM: "4GB"
    },
    {
        id: 41,
        productName: "Book",
        image: img11,
        sliderImages: [
            {
                id: 1,
                image: img11
            },
            {
                id: 2,
                image: img1
            },
            {
                id: 3,
                image: img2
            },
            {
                id: 4,
                image: img3
            },
            {
                id: 5,
                image: img4
            },
            {
                id: 6,
                image: img5
            },
        ],
        descr: "Book about life Stiv Jobs",
        price: "110",
        category: "Books",
        quantity: 1,
        selected: true,
        isFavourite: false,
        pathName: "Books",
        ProductCondition: "new",
        Memory: "32GB",
        RAM: "4GB"
    },
]