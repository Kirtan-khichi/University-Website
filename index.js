function myFunction(x){
    if (x.className == 'mobile-menu-cross'){
        x.className = 'mobile-menu-bar';
        document.getElementById('navbar').className = 'navbar';
    }else{
        x.className = 'mobile-menu-cross';
        document.getElementById('navbar').className = 'mobile';
    }
}
function sizing(){
    if (window.innerWidth > 600){
        document.getElementById('navbar').className = 'navbar';
    }else if (document.getElementById('menu').className == 'mobile-menu-cross') {
        document.getElementById('navbar').className = 'mobile';
    }
}