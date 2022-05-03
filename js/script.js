$(document).ready(function() {

    let slideAtual = 1;
    let listaSlides = ["banner-1", "banner-2", "banner-3"]

    setInterval(mudarSlide, 1000)

    function mudarSlide() {

        console.log("Slide atual:", slideAtual);

        // Remove o slide anterior
        if (slideAtual > 0) {
            $("#carrosel").removeClass(listaSlides[slideAtual - 1])
        } else if (slideAtual == 0) {
            $("#carrosel").removeClass(listaSlides [ (listaSlides.length) - 1])
        }    

        // Adiciona o slide atual
        $("#carrosel").addClass(listaSlides[slideAtual]);

        // Indica o slide atual
        slideAtual++

        if(slideAtual > (listaSlides.length) - 1) {
            slideAtual = 0;
        }

    }

}

    /*
    $(document).ready(function() {

        $("#barras").click(function() {

            if( $("#menu").toggleclass("menu-ativo")) {


    
        }

    })
    */

    function mostrarMenu() {
        let menu = document.getElementById ("menu")

        if (getComputedStyle(menu).display == 'none') {
        menu.style.display = 'flex';
        } 
        else {
        menu.style.display = 'none';
    }
    
}
