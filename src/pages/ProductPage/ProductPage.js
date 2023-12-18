import React, { Component } from 'react';
import ProductsContainer from './containers/ProductsContainer';
import MessageContainer from './containers/MessageContainer';
import CartContainer from './containers/CartContainer';

class ProductPage extends Component {
  render() {
    return (
        <div>
            <main id="mainContainer">
                <div className="container">
                    {/* <!-- Products --> */}
                    <ProductsContainer />
                    {/* <!-- Message --> */}
                    <MessageContainer />
                    {/* <!-- Cart --> */}
                    <CartContainer />
                </div>
            </main>
        </div>
    );
}
}

export default ProductPage//connect(mapStateToProps, mapDispatchToProps)(HomePage);
