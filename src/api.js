export const getProducts = async (limit = 100) => {
  try {
		let url = `https://fakestoreapi.com/products?limit=${limit}`
		const response = await fetch(url)
		const data = await response.json()
		return data
  } catch (error) {
    console.log(error);
  }
};