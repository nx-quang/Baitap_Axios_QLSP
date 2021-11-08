function ProductService() {
    this.getListProductApi = function() {
        return axios({
            url: "https://6187f09a057b9b00177f9b28.mockapi.io/api/products",
            method: "GET"
        });
    }
}