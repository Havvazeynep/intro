import React, { Component } from "react";
import { Table } from "reactstrap";

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <h3>
          {this.props.info.title}-{this.props.currentCategory}
        </h3>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity Per Unit</th>
              <th>Units In Stock</th>
            </tr>
          </thead>
          <tbody>
          {this.props.products.map(products => (
            <tr key={products.id}>
              <th scope="row">{products.id}</th>
              <td>{products.productName}</td>
              <td>{products.unitPrice}</td>
              <td>{products.quantityPerUnit}</td>
              <td>{products.unitsInStock}</td>
            </tr>
          ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
