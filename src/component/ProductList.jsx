import React from 'react';
import Product from './Product';
import Total from './Total';
import productList from './data';


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

    //  comment on  setTimeout method and comment out feach method to get api data  
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


