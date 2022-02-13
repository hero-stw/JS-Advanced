function printProduct(data, des) {
    let list = document.querySelector(des);
    list.innerHTML = data.map((item)=> {
        return /*html*/ `
            <div class="single-products-catagory clearfix">
                <a href="shop.html">
                <img src="${item.image}" alt="" />
                <div class="hover-content">
                    <div class="line"></div>
                    <p>From ${item.price}</p>
                    <h4>${item.name}</h4>
                </div>
                </a>
            </div>
        `
    }).join("");
}
function getPro() {
    const url = "https://62074f9a92dd6600171c0d5a.mockapi.io/product";
    fetch(url, {
        method: "GET",
    }) 
    .then((res)=> {
        return res.json()
    })
    .then((data)=> {
        console.log(data);
        printProduct(data,"#product-list")
    }).catch(error => {
        console.log(error);
    })
}