var cards = document.getElementsByClassName("work-card");

for (let i = 0; i < cards.length; i++) {
    console.log("work")
    const element = cards[i];
    element.addEventListener("mouseover",()=>{
        element.classList.add("card-shadow");
    }) ;
    element.addEventListener("mouseout",()=>{
        element.classList.remove("card-shadow");
    }) ;
    
    
}

