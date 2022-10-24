const domain = 'https://front-test-api.herokuapp.com/api';

export const getProductsRoute = `${domain}/product`;
export const getProductDetailsRoute = (id) => `${domain}/product/${id}`;
