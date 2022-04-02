import bcrypt from 'bcryptjs';

const data = {
    users:[
        {
            name: 'Basir',
            email: 'admin@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true

        },
        {
            name: 'Jhon',
            email: 'user@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: false,

        }
    ],
    products: [
        {   //_id: '1',
            name:'Nike Slim shirt',
            slug: 'nike-slim',
            category:'Shirts',
            image:'/image/adidas.jpeg',
            price:70,
            countInStock:10,
            brand:'Nike',
            rating:4,
            numReviews:13,
            description:'high quality shirt',
        },
        {   //id: '2',
            name:'Air Max ',
            slug: 'Gannou',
            category:'Shoes',
            image:'/image/gannou.jpeg',
            price:120,
            countInStock:0,
            brand:'Nike',
            rating:4,
            numReviews:13,
            description:'high quality shirt',
        },
        {   //id: '3',
            name:'Nike packege shirts',
            slug: 'Holure',
            category:'Shirts',
            image:'/image/Holure.jpeg',
            price:45,
            countInStock:10,
            brand:'Nike',
            rating:4,
            numReviews:13,
            description:'high quality shirt',
        },
        {   //id: '4',
            name:'Nike Women shirt',
            slug: 'nike women',
            category:'Shirts',
            image:'/image/Nike women.jpeg',
            price:35,
            countInStock:10,
            brand:'Nike',
            rating:4,
            numReviews:13,
            description:'high quality shirt',
        },
        {   //id: '5',
            name:'Nike boots',
            slug: 'unisex',
            category:'Tennis',
            image:'image/tennis.jpeg',
            price:180,
            countInStock:10,
            brand:'Nike',
            rating:4,
            numReviews:13,
            description:'high quality shirt',
        },
    ],
};
export default data;