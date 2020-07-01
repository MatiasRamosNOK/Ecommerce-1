import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import { connect } from "react-redux";
import ProductosMain from "../components/ProductosMain";
import { giveMeAllProducts } from "../store/actions/Products";
import Carrousel from "./Carrousel";
import {
  addToCart,
  addQuantity,
  subtractQuantity,
} from "../store/actions/Products";

const mapStateToProps = (state, ownProps) => {
  return {
    login: state.login.data,
    products: state.products.products,
    items: state.products.addedItems,
    isAdmin: state.login.data.dataUser.isAdmin,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  giveMeAllProducts: () => dispatch(giveMeAllProducts()),
  addToCart: (itemID) => dispatch(addToCart(itemID)),
  addQuantity: (id) => dispatch(addQuantity(id)),
  subtractQuantity: (id) => dispatch(subtractQuantity(id)),
});

class MainContainer extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.handleAddQuantity = this.handleAddQuantity.bind(this);
    this.handleSubtractQuantity = this.handleSubtractQuantity.bind(this);
  }

  componentDidMount() {
    this.props.giveMeAllProducts();
    
  }

  //to add the quantity
  handleAddQuantity(id) {
    this.props.addQuantity(id);
  }
  //to substruct from the quantity
  handleSubtractQuantity(id) {
    this.props.subtractQuantity(id);
  }

  render() {
    return (
      <div>
        <NavBar props={this.props}></NavBar>
        <Carrousel />
        <ProductosMain
          tileData={this.props.products}
          addToCart={this.props.addToCart}
          items={this.props.items}
          add={this.handleAddQuantity}
          rest={this.handleSubtractQuantity}
        ></ProductosMain>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
