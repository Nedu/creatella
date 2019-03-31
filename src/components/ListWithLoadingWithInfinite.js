import { compose } from 'recompose';

import withInfiniteScroll from './InfiniteScroll';
import withLoading from './Loading';
import Products from './Products';

const ListWithLoadingWithPaginated = compose( withInfiniteScroll, withLoading,)(Products);

export default ListWithLoadingWithPaginated