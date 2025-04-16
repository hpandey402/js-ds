const orders = [
  {
    orderId: 101,
    customer: {
      name: 'Alice',
    },
    items: [
      {
        productId: 'P001',
        productName: 'Laptop',
        reviews: [
          { reviewer: 'John', rating: 5 },
          { reviewer: 'Emily', rating: 4 },
        ],
      },
      {
        productId: 'P002',
        productName: 'Mouse',
        reviews: [
          { reviewer: 'Mark', rating: 4 },
          { reviewer: 'Anna', rating: 3 },
        ],
      },
    ],
  },
  {
    orderId: 102,
    customer: {
      name: 'Bob',
    },
    items: [
      {
        productId: 'P003',
        productName: 'Smartphone',
        reviews: [
          { reviewer: 'Sara', rating: 5 },
          { reviewer: 'David', rating: 4 },
        ],
      },
      {
        productId: 'P004',
        productName: 'Headphones',
        reviews: [
          { reviewer: 'Alice', rating: 5 },
          { reviewer: 'Tom', rating: 4 },
        ],
      },
    ],
  },
];

//Create a function that takes array and output the result in below format
//output:

// [
//   {"orderId":101,"customerName":"Alice","productId":"P001","productName":"Laptop","reviewer":"John","rating":5},
//   {"orderId":101,"customerName":"Alice","productId":"P001","productName":"Laptop","reviewer":"Emily","rating":4},
//   {"orderId":101,"customerName":"Alice","productId":"P002","productName":"Mouse","reviewer":"Mark","rating":4},
//   {"orderId":101,"customerName":"Alice","productId":"P002","productName":"Mouse","reviewer":"Anna","rating":3},
//   {"orderId":102,"customerName":"Bob","productId":"P003","productName":"Smartphone","reviewer":"Sara","rating":5},
//   {"orderId":102,"customerName":"Bob","productId":"P003","productName":"Smartphone","reviewer":"David","rating":4},
//   {"orderId":102,"customerName":"Bob","productId":"P004","productName":"Headphones","reviewer":"Alice","rating":5},
//   {"orderId":102,"customerName":"Bob","productId":"P004","productName":"Headphones","reviewer":"Tom","rating":4}
// ]

function transform(arr) {
  return arr.flatMap((el) => {
    return el.items.flatMap((item) => {
      return item.reviews.map((rev) => {
        return {
          orderId: el.orderId,
          customerName: el.customer.name,
          productId: item.productId,
          productName: item.productName,
          reviewer: rev.reviewer,
          rating: rev.rating,
        };
      });
    });
  });
}

console.log('checkkk', transform(orders));
