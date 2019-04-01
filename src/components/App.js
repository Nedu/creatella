import React, { Component, Fragment } from "react";

import ListWithLoadingWithInfinite from './ListWithLoadingWithInfinite';
import '../assets/styles/main.scss';

const applyUpdateResult = (result, page) => (prevState) => ({
    products: [...prevState.products, ...result],
    page,
    isLoading: false
  });
  
  const applySetResult = (result, page) => (prevState) => ({
    products: [...prevState.products, result],
    page,
    isLoading: false
  });
  

class App extends Component {
    constructor() {
        super();
        this.state = {
            products: [],
            page: null,
            isLoading: false,
            sort: ''
        };
    }

    componentDidMount = () => {
        this.getProducts(1)
    }

    getProducts = (page) => {
        this.setState({ isLoading: true})
        const { sort } = this.state
        fetch(`${process.env.API_URL}/api/products?_page=${page}&_limit=20&_sort=${sort}`)
        .then(response => {
            this.setState({totalProducts: Number(response.headers.get('X-Total-Count'))})
            return response.json()
        })
        .then(result => this.onSetResult(result, page))
    }

    onPaginatedSearch = () => {
        const { page } = this.state
        this.getProducts(page + 1);
    }

    onSetResult = (result, page) => page === 0 ? this.setState(applySetResult(result, page)) : this.setState(applyUpdateResult(result, page))

    sortProducts = (value) => {
        this.setState({ isLoading: true, products: [] })
        fetch(`${process.env.API_URL}/api/products?_page=1&_limit=20&_sort=${value}`)
        .then(response => {
            this.setState({totalProducts: Number(response.headers.get('X-Total-Count'))})
            return response.json()
        })
        .then(result => this.setState({ isLoading: false, products: result, sort: value }))
        
    }

    render() {
        const { products, page, isLoading, totalProducts } = this.state
        return (
            <Fragment>
                <ListWithLoadingWithInfinite isLoading={isLoading} products={products} sortProducts={this.sortProducts} totalProducts={totalProducts} page={page} onPaginatedSearch={this.onPaginatedSearch} />
                {products.length === totalProducts ? <div>~ end of catalogue ~</div> : null}
            </Fragment>
        );
    }
}

export default App;
