//codigo javascrip
// endpoints disponibles: http://localhost:3000/products
const URL_BASE ="http://localhost:3000";
const mainDiv = document.querySelector("#main_list");
 //getProducts
const getProducts= async () => {
    try {
        const response = await fetch(`${URL_BASE}/products`);
        const {data} = await response.json();
        //armar html
        let content = "";
        for(const products of data){
            content += `
            <div class="box">
        <p><span>Name</span> ${products.name}</p>
        <p><span>category</span> ${products.category}</p>
        <p><span>descrition</span> ${products.description}</p>
        <p><span>price</span> ${products.price}</p>

    </div>
            `;
            
        }
        mainDiv.innerHTML = content;
    }catch (rror){
        console.log(error);
    }
    
};
getProducts();