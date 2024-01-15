$(document).ready(function(){
    
    $('header button').click(function(){
        $('form').slideDown()
    })

    $('#cancelar').click(function(){
        $('form').slideUp()
    })

    $('form').on('submit', function(e){
        e.preventDefault()

        const enderecoNovaImagem = $('#endereco-imagem').val()
        const novaImagem = $('<li style="display: none"></li>')

        $(`<img src='${enderecoNovaImagem}'>`).appendTo(novaImagem)
        $(`
            <div class='overlay-imagem-link'>
                <a href='${enderecoNovaImagem}' title='Ver imagem em tamanho real' target='_blank'>
                    Ver imagem em tamanho real
                </a>
            </div>
            
        `).appendTo(novaImagem)
        $(novaImagem).fadeIn(700)
        $(novaImagem).appendTo('ul')
    })
})