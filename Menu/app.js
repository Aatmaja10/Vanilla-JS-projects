/* ALL THE MENU ITEMS */
const menu = [
    {
        id:1,
        menuName:"Chicken Wings",
        category:"chicken",
        price:200,
        img:"./chicken1.jpg",
        description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, incidunt cumque! Officiis possimus natus delectus!"
    },
    {
        id:2,
        menuName:"Chicken Kebab",
        category:"chicken",
        price:200,
        img:"./chicken2.jpg",
        description:" Aut impedit quis accusamus excepturi quo corporis repudiandae, adipisci harum reiciendis illum.  Aut impedit quis accusamus excepturi quo corporis repudiandae, adipisci harum reiciendis illum."
    },
    {
        id:3,
        menuName:"Chicken Tuna Salad",
        category:"chicken",
        price:300,
        img:"./chicken3.jpg",
        description:"  Dolores autem voluptatem, repudiandae numquam, debitis quis corrupti quas libero necessitatibus minima ad minus nihil praesentium quia laborum dicta vitae molestiae ea laudantium quidem porro facilis similique?"
    },
    {
        id:4,
        menuName:"Grilled Chicken",
        category:"chicken",
        price:150,
        img:"./chicken4.jpg",
        description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, incidunt cumque! Officiis possimus natus delectus!"
    },
    {
        id:5,
        menuName:"Chicken Sekh Kebab",
        category:"chicken",
        price:200,
        img:"./chicken5.jpg",
        description:" Debitis eligendi veritatis veniam neque illum magni, cupiditate ipsa eaque doloremque, facere temporibus ratione ut"
    },
    {
        id:6,
        menuName:"Lychee Love",
        category:"icecream",
        price:120,
        img:"./icecream1.jpg",
        description:" Quod impedit accusantium nulla reprehenderit sed saepe eum hic dignissimos! Itaque, rerum reprehenderit!"
    },
    {
        id:7,
        menuName:"Candy Cane",
        category:"icecream",
        price:200,
        img:"./icecream2.jpg",
        description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, incidunt cumque! Officiis possimus natus delectus!"
    },
    {
        id:8,
        menuName:"Oreo",
        category:"icecream",
        price:100,
        img:"./icecream3.jpg",
        description:"Maiores eius velit laborum hic earum, ratione, quasi ad error at aliquam natus voluptate repellendus delectus! Quod, ratione eius."
    },
    {
        id:9,
        menuName:"Rainbow",
        category:"icecream",
        price:160,
        img:"./icecream4.jpg",
        description:"Molestiae ipsa quos, culpa aliquam vitae labore incidunt voluptates nam eaque eos aspernatur necessitatibus excepturi corrupti cumque repudiandae odio distinctio hic quasi nihil laboriosam eum nemo voluptatum fugiat? "
    },
    {
        id:10,
        menuName:"Chocolate",
        category:"icecream",
        price:200,
        img:"./icecream5.jpg",
        description:" Aut impedit quis accusamus excepturi quo corporis repudiandae, adipisci harum reiciendis illum."
    },
    {
        id:11,
        menuName:"Crisp capsicum and corn",
        category:"pizza",
        price:350,
        img:"./pizza1.jpg",
        description:" Cum, officiis. Enim blanditiis reprehenderit ullam, nobis mollitia nostrum quae vel? Facilis eligendi, magni ex quasi eius minus eaque provident at necessitatibus ducimus voluptate, qui quidem reprehenderit dolore amet fugit, praesentium impedit."
    },
    {
        id:12,
        menuName:"Triple Tango",
        category:"pizza",
        price:400,
        img:"./pizza2.jpg",
        description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, incidunt cumque! Officiis possimus natus delectus!"
    },
    {
        id:13,
        menuName:"Extravegenza",
        category:"pizza",
        price:400,
        img:"./pizza3.jpg",
        description:"Placeat harum optio saepe minima provident? Natus temporibus minus ullam nisi ducimus, perferendis beatae vitae ab, saepe vero, repellendus possimus sit. Unde saepe tempore consequuntur soluta nam corrupti iusto debitis eveniet, nostrum error velit animi, sunt et reiciendis exercitationem."
    },
    {
        id:14,
        menuName:"Green Wave",
        category:"pizza",
        price:350,
        img:"./pizza4.jpg",
        description:"Esse odio quam vero sequi libero excepturi quos optio aliquam sint! Dolorem modi hic laborum aut, architecto omnis quas neque laudantium harum quod veritatis! "
    }
];

/* SELECTING ELEMENTS */
let menuItem = document.querySelector(".menuItem");
let All = document.querySelector("#All");
let Chicken = document.querySelector("#Chicken");
let Pizza = document.querySelector("#Pizza");
let Icecream = document.querySelector("#Icecream");

/* DISPLAYING ELEMENTS ON LOAD */
window.addEventListener("DOMContentLoaded",function(){
    displayMenuItems(menu);
})
function displayMenuItems(items){
    let menuDisplay = items.map(function(x){
        //console.log(x);
        return` <div class="menuItem">
        <img src= ${x.img} alt=${x.menuName}>
        <div class="menuContainer">
        <div class="menuName">${x.menuName}</div>
        <span class="price"> Rs ${x.price}</span>
        <hr>
        <div class="description">
           ${x.description}
        </div> 
        </div> 
    </div>`;
    });
    menuDisplay = menuDisplay.join("");
    menuItem.innerHTML = menuDisplay;
}
/* FOR ALL SECTION */
All.addEventListener("click", ()=>{
    displayMenuItems(menu);
});
/* WITH CATEGORY OF CHICKEN */
Chicken.addEventListener("click", ()=>{
    displayMenuItems(menu.filter(name=>name.category==="chicken"));
});
/* WITH CATEGORY OF PIZZA */
Pizza.addEventListener("click", ()=>{
    displayMenuItems(menu.filter(name=>name.category==="pizza"));
});
/* WITH CATEGORY OF ICE-CREAM */
Icecream.addEventListener("click", ()=>{
    displayMenuItems(menu.filter(name=>name.category==="icecream"));
});