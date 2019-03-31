import React from 'react';

const withLoading = (Component) => (props) => <div>
    <Component {...props} />
    <div className="loadingContainer">
      {/* eslint-disable-next-line react/destructuring-assignment */}
      {props.isLoading && <p className="loadingText">Loading...</p>}
    </div>
  </div>

export default withLoading