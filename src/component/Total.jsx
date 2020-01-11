import React, { Component } from 'react';
import Modal from './Modal/Modal';

class Total extends React.Component {
  constructor() {
    super();

    this.state = {
      isShowing: false
    }
  }

  openModalHandler = () => {
    this.setState({
      isShowing: true
    });
  }

  closeModalHandler = () => {
    this.setState({
      isShowing: false
    });
  }

  render() {
    let total = this.props.total.toFixed(2);

    return (
      <div className="checkout">
        <div className="check-div">
          <div>
            <div className="row">
              <div className="column1-checkout">
                <p className="p-1-check">Qty:<span>{this.props.cartQuantity}</span> </p>
                <p className="p-1-check">Total:<span>{total}</span> </p>
              </div>
              <div className="column2-checkout">
                <button className="open-modal-btn" onClick={this.openModalHandler} >CHECKOUT</button>
              </div>
            </div>
          </div>
        </div>

        <Modal
          className="modal"
          show={this.state.isShowing}
          close={this.closeModalHandler}
          qty={this.props.cartQuantity}
          total={total}>
        </Modal>

      </div>
    );
  }
}

export default Total;