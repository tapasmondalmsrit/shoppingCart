import React from 'react';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: 0,
      priceAfterDis: this.props.price - this.props.price * (this.props.discount / 100)
    };
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.showInfo = this.showInfo.bind(this);
  }

  add() {
    this.setState({
      qty: this.state.qty + 1
    });
    this.props.handleTotal(this.state.priceAfterDis, 1);
  }

  subtract() {
    this.setState({
      qty: this.state.qty - 1
    });
    this.props.handleTotal(-this.state.priceAfterDis, -1);
  }

  showInfo() {
    if (this.state.qty > 0) {
      alert("This product is allready to your cart")
    }
    else {
      this.setState({
        qty: this.state.qty + 1
      });
      this.props.handleTotal(this.state.priceAfterDis, 1);
    }

  }

  render() {
    return (

      <div className="product-0-10">
        <div className="row product-row">
          <div className="column1">
            <img className="img-w-100" src={this.props.imagurl} alt={this.props.name} />
            <h4 className="p-price">{this.props.discount}% OFF</h4>
          </div>
          <div className="column2">
            <h3 className="product-name">{this.props.name}</h3>
            <p className="m-7-0p">{this.props.description}</p>
            <p className="m-7-0p">In stock: {this.props.availAble}</p>
            <h4 className="m-10-0p">MRP: Rs.  {this.props.price}</h4>
            <h4 className="m-7-0p" >With Discount Rs.  {this.state.priceAfterDis}</h4>
            <div className="p-10-0p">
              <button className="addtoCart" onClick={this.showInfo}>Add to cart</button>
              <button className="countBtn" onClick={this.add} disabled={this.state.qty > this.props.availAble - 1}> +</button>
              {this.state.qty}
              <button className="countBtn" onClick={this.subtract} disabled={this.state.qty < 1}> - </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
