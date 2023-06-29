

export const useFetchProducts = () => {
    const fetchProducts = async (category) => {
        try {
            let response;
            if (process.env.NODE_ENV === 'development') {
                response = await fetch(process.env.REACT_APP_API_URI_DEV + '/products');
            } else if (process.env.NODE_ENV === 'production') {
                response = await fetch(process.env.REACT_APP_API_URI_PROD + '/products');
            }

            const data = await response.json();

            const filteredData = data.filter((product) => {
                return product.categoryId === Number(category)
            })

            return filteredData
        } catch (error) {
            console.log(error);
        }
    }

    const fetchProduct = async (id) => {

    }

    return {
        fetchProducts,
        fetchProduct
    }
}