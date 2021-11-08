var service = new ProductService();

function getELE(id) {
    return document.getElementById(id);
}

function getListProduct() {
  service
    .getListProductApi()
    .then(function (result) {
      renderData(result.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}
getListProduct();

function renderData(data) {
  var html = "";
  data.forEach(function (item) {
    html += `<tr>
            <td>${item.id}</td>
            <td>${item.tenSP}</td>
            <td>${item.gia}</td>
            <td>
                <img src="../../assets/img/${item.hinhAnh}"
            </td>
            <td>${item.moTa}</td>
            <td></td>
        </tr>`;
  });
  getELE("tblDanhSachSP").innerHTML = html;
}
