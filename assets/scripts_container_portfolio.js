setTimeout(function() {
    let navItem = document.querySelectorAll('.nav-item');
    console.log(navItem)
    navItem.forEach((item, index) =>{
        item.style.backgroundColor = "none";
    })

}, 100);

