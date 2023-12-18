var inittialState = [
    {
        id: 1,
        name: 'Iphone X',
        image: 'https://img.sam.vn/public/upload/thumbnail/250x250/dien-thoai-samsung-galaxy-note-8-hang-chinh-hang1527734658804.jpeg',
        description: 'Đây là sản phẩm do Apple sản xuất',
        price: 1000,
        inventory: 10,
        rating: 4
    },
    {
        id: 2,
        name: 'Note 8',
        image: 'https://img.sam.vn/public/upload/thumbnail/250x250/dien-thoai-samsung-galaxy-note-8-hang-chinh-hang1527734658804.jpeg',
        description: 'Đây là sản phẩm do SamSung sản xuất',
        price: 700,
        inventory: 5,
        rating: 5
    },
    {
        id: 3,
        name: 'Xperia XZ',
        image: 'https://dienmaycholon.vn/public/picture/product/product11282/big/product_11282_1.png',
        description: 'Đây là sản phẩn so Sony sản xuất',
        price: 500,
        inventory: 20,
        rating: 3
    },
    {
        id: 4,
        name: 'VSmart',
        image: 'https://www.nguyenkim.com/images/thumbnails/250/250/detailed/590/10041955_VSMART_JOY-1_DEN_01.jpg',
        description: 'Đây là sản phẩm do VinSmart sản xuất',
        price: 150,
        inventory: 12,
        rating: 4
    },
    {
        id: 5,
        name: 'Nokia 8.1',
        image: 'https://shopmrheo.com/image/cache/datamrheo/data/Nokia/logo/nokia8.1w250-250x250.png',
        description: 'Đây là sản phẩn so Nokia sản xuất',
        price: 200,
        inventory: 4,
        rating: 2
    }
];

const products = (state = inittialState, action) => {
    switch (action.type) {
        default: return [...state];     
    }
}

export default products;