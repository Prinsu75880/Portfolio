// let hemburger = document.querySelector(".hemburger");
// let open = document.querySelector(".open");
// let hide = document.querySelector(".hide");
// let sidebar = document.querySelector(".sidebar");
// let hem = document.querySelector(".hem");
// let cross = document.querySelector(".cross");
// let on = document.querySelector(".on");
// console.log(on)
// console.log(hide)

// open.addEventListener("click", () => {
//     console.log("clicked");
//     sidebar.classList.remove("hide");
//     cross.classList.remove("hide");
//     hem.classList.add("hide");
// });

// cross.addEventListener("click", () => {
//     console.log("click");
//     sidebar.classList.add("hide");
//     cross.classList.add("hide");
//     hem.classList.remove("hide");
   
   
// });


document.querySelector(".cross").style.display = "none";
document.querySelector(".hemburger").addEventListener("click", () => {
    document.querySelector(".sidebar").classList.toggle("sidebarGo")
    if(document.querySelector(".sidebar").classList.contains("sidebarGo")){
        document.querySelector(".hem").style.display = "inline";
        document.querySelector(".cross").style.display = "none";
    }else{
        document.querySelector(".hem").style.display = "none";
        setTimeout(() => {
            document.querySelector(".cross").style.display = "inline";
        }, 300);
       
    }
    
});