import React, { Component } from 'react';
import Product from './Product';
import Total from './Total';

let productList = [{
  "id": 1,
  "brandName": "Samsung",
  "productName": "Samsung smart tv",
  "quantity": 2,
  "price": 18000,
  "discount": 20,
  "imgurl": "https://rukminim1.flixcart.com/image/352/352/k0vbgy80pkrrdj/television-refurbished/k/3/g/a-ua32n4305arxxl-samsung-original-imafgxd4tzf7d8fn.jpeg?q=70",
  "description": "Samsung smart tv is one of top selling product of sumsung"
},
{
  "id": 2,
  "brandName": "Apple",
  "productName": "Mack Desktop",
  "quantity": 5,
  "price": 90500,
  "discount": 10,
  "imgurl": "https://images-na.ssl-images-amazon.com/images/I/81SGh-QP3aL._SL1500_.jpg",
  "description": "New Apple MacBook Pro (16-inch, 16GB RAM, 1TB Storage, 2.3GHz Intel Core i9) - Silver"
},


{
  "id": 4,
  "brandName": "Cadbury",
  "productName": "Cadbury Celebrations Premium",
  "quantity": 220,
  "price": 785,
  "discount": 23,
  "imgurl": "https://images-na.ssl-images-amazon.com/images/I/71l00-rBH%2BL._SL1500_.jpg",
  "description": "Cadbury Celebrations Premium Assorted Chocolate Gift Pack, 286.3 g"
},
{
  "id": 5,
  "brandName": "Vivo",
  "productName": "Vivo U12",
  "quantity": 15,
  "price": 9500,
  "discount": 23,
  "imgurl": "https://images-na.ssl-images-amazon.com/images/I/51wXdkukGjL._SL1139_.jpg",
  "description": "Vivo U10 (Thunder Black,5000 mAH 18W Fast Charge Battery, 3GB RAM, 32GB Storage)"
},
{
  "id": 6,
  "brandName": "Samsung",
  "productName": "HD Ready LED Smart TV",
  "quantity": 5,
  "price": 14500,
  "discount": 12,
  "imgurl": "https://rukminim1.flixcart.com/image/352/352/k0vbgy80pkrrdj/television-refurbished/k/3/g/a-ua32n4305arxxl-samsung-original-imafgxd4tzf7d8fn.jpeg?q=70",
  "description": "Samsung Series 4 80cm (32 inch) HD Ready LED Smart TV  (UA32N4305ARXXL)"
}, {
  "id": 8,
  "brandName": "Vivo",
  "productName": "Vivo U12",
  "quantity": 15,
  "price": 9500,
  "discount": 23,
  "imgurl": "https://images-na.ssl-images-amazon.com/images/I/51wXdkukGjL._SL1139_.jpg",
  "description": "Vivo U10 (Thunder Black,5000 mAH 18W Fast Charge Battery, 3GB RAM, 32GB Storage)"
},
{
  "id": 9,
  "brandName": "Apple",
  "productName": "Apple I phone",
  "quantity": 15,
  "price": 99500,
  "discount": 23,
  "imgurl": "https://images-na.ssl-images-amazon.com/images/I/51kGDXeFZKL._SL1024_.jpg",
  "description": "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps"
},
{
  "id": 10,
  "brandName": "Vivo",
  "productName": "Vivo U12",
  "quantity": 15,
  "price": 9500,
  "discount": 23,
  "imgurl": "https://images-na.ssl-images-amazon.com/images/I/51wXdkukGjL._SL1139_.jpg",
  "description": "Vivo U10 (Thunder Black,5000 mAH 18W Fast Charge Battery, 3GB RAM, 32GB Storage)"
},
{
  "id": 11,
  "brandName": "Samsung",
  "productName": "Samsung smart TV",
  "quantity": 150,
  "price": 9500,
  "discount": 27,
  "imgurl": "https://rukminim1.flixcart.com/image/352/352/k0vbgy80pkrrdj/television-refurbished/k/3/g/a-ua32n4305arxxl-samsung-original-imafgxd4kzpddhbp.jpeg?q=70",
  "description": "Vivo U10 (Thunder Black,5000 mAH 18W Fast Charge Battery, 3GB RAM, 32GB Storage)"
},
{
  "id": 12,
  "brandName": "Samsung",
  "productName": "Samsung Series 4 80cm",
  "quantity": 110,
  "price": 9500,
  "discount": 35,
  "imgurl": "https://rukminim1.flixcart.com/image/352/352/k0vbgy80pkrrdj/television-refurbished/k/3/g/a-ua32n4305arxxl-samsung-original-imafjrzqxfwshyuy.jpeg?q=70",
  "description": "For products requiring installation, returns are valid only when they are installed by Flipkart-authorized personnel."
},
{
  "id": 13,
  "brandName": "Apple iPhone ",
  "productName": "Apple iPhone 11 (64GB) - White",
  "quantity": 2,
  "price": 99900,
  "discount": 5,
  "imgurl": "https://images-na.ssl-images-amazon.com/images/I/51o5RmQtroL._SL1024_.jpg",
  "description": "6.1-inch Liquid Retina HD LCD displa"
},
{
  "id": 14,
  "brandName": "Samsung",
  "productName": "EVERMARKET HD Camera",
  "quantity": 92,
  "price": 5700,
  "discount": 45,
  "imgurl": "https://images-na.ssl-images-amazon.com/images/I/71iv8MSWjsL._SL1200_.jpg",
  "description": "EVERMARKET HD Clear Anti-Scratch, Bubble Proof 9H-Hardness Tempered Glass Screen Protector for Canon Eos Rebel T6 T5 1300D 1200D DSLR (Transparent)"
}

];

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      cartQuantity: 0,
      productList: ""
    };


    this.calculateTotal = this.calculateTotal.bind(this);
  }

  componentDidMount() {

    setTimeout(() => {
      this.setState({ productList: productList });
    }, 1000);
    // fetch('https://cartproduct.free.beeceptor.com/mondal')
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data.data);
    //     this.setState({ productList: data.data });

    //   })
    //   .catch(err => { console.log(err) })

  }

  calculateTotal(price, qty) {

    this.setState({
      total: this.state.total + price,
      cartQuantity: this.state.cartQuantity + qty
    });
    console.log(this.state.total);
  }



  render() {
    if (!this.state.productList) return <p>loading...!!!!</p>;

    var component = this;
    var products = this.state.productList.map(function (product) {
      return (
        <Product
          name={product.productName}
          price={product.price}
          discount={product.discount}
          info={product.productName}
          description={product.description}
          availAble={product.quantity}
          imagurl={product.imgurl}
          handleTotal={component.calculateTotal}
          key={product.id}
        />
      );
    });

    return (
      <div className="m-b-120p">
        <div className="cart-heading"><span>Shopping cart </span></div>
        {products}
        <Total total={this.state.total} cartQuantity={this.state.cartQuantity} />
      </div>
    );
  }
}
export default ProductList;


