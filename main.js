const app =document.querySelector("#app");
const API="http://localhost:3000/products";
fetch(API)
.then(res=>res.json())
.then(data =>{
    app.innerHTML=`
        <h1 class="text-center font-bold text-[32px] px-2 py-4 uppercase">Product List</h1>
        <div>
            <a href="add.html"><button class="bg-blue-300 my-2 mx-4 rounded-lg text-[#fff]">ADD Products</button></a>
        </div>
        <table class="bolder bolder-slate-300 m-[90%] text-center">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Product Name</th>
                    <th>Product Image</th>
                    <th>Product Price</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                ${data.map((item,index)=>{
                    return `
                        <tr>
                            <td>${index + 1}</td>
                            <td>${item.name}</td>
                            <td>
                            <img src="${item.image}">
                            </td>
                            <td>${item.price}</td>
                            <td>
                            <a href="update.html?id=${item.id}">
                                <button>Edit</button>
                            </a>
                            <button class="btn_remove" data-id="${item.id}">Delete</button>

                            </td>
                        </tr>
                    `
                }).join("")}
            </tbody>
        </table>
    `
}).then(()=>{
    const btns = document.querySelectorAll(".btn_remove");
    
})