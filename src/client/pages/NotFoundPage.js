import React from 'react';

const NotFoundPage = ({staticContext = {} }) => { 
  // we default the context value to {} to avoid null cases
  // because only the StaticRouter has it, not the BrowserRouter
  staticContext.notFound = true;
  return <h1>Ooops, route not found.</h1>
};

export default {
  component: NotFoundPage
};