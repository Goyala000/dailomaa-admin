const users = [
    {
        id: 3,
        firstName: 'Admin',
        lastName: 'Admin',
        email: 'admin@admin.com',
        pNum: '9999999999',
        password: 'admin12345',
        avatar: '/img.jpg',
        isAdmin: true,
        isSeller: true,
        sellerInfo: [
            {
                shopName: 'RK Stationery',
                shopAddress: 'Nepal-13',
                shopNum: '999999999',
                logoImg: '/img.jpg',
                bannerImg: '/img.jpg'
            }
        ]
    },
    {
        id: 77,
        firstName: 'Random',
        lastName: 'Seller',
        email: 'randomseller11@gmail.com',
        pNum: '9999999999',
        password: 'xacaxcaxcacas',
        img: '/img.jpg',
        isAdmin: false,
        isSeller: true,
        sellerInfo: [
            {
                shopName: 'Random Shop',
                shopAddress: 'Kathmandu-13',
                shopNum: '999999999',
                logoImg: '/img.jpg',
                bannerImg: '/img.jpg'
            }
        ]
    },
    {
        id: 234234,
        firstName: 'Test',
        lastName: 'User',
        email: 'testuser@gmail.com',
        pNum: '9999999999',
        password: 'xacaxcaxcacas',
        img: '/img.jpg',
        isAdmin: false,
        isSeller: false
    },
    {
        id: 42435,
        firstName: 'Random',
        lastName: 'Test',
        email: 'randomtest11@gmail.com',
        pNum: '9999999999',
        password: 'xacaxcaxcacas',
        img: '/img.jpg',
        isAdmin: false,
        isSeller: true,
        sellerInfo: [
            {
                shopName: 'Test Shop',
                shopAddress: 'SSF-13',
                shopNum: '999999999',
                logoImg: '/img.jpg',
                bannerImg: '/img.jpg'
            }
        ]
    },
    {
        id: 77,
        firstName: 'Test',
        lastName: 'User',
        email: 'testuser@gmail.com',
        pNum: '9999999999',
        password: 'xacaxcaxcacas',
        img: '/img.jpg',
        isAdmin: false,
        isSeller: false
    }
];

export default users;
