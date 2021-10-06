var items = document.querySelectorAll(".timeline li")


function isElementInViewport(el){
    var rect= el.getBoundingClientRect();
    return(
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= window.innerHeight &&
        rect.right <= window.innerWidth
    )
}



function callbackfunc(){
    for(var i=0;i<items.length;i++){
        if(isElementInViewport(items[i])){
            items[i].classList.add("in-view");
        }
    }
}




window.addEventListener("scroll",callbackfunc)