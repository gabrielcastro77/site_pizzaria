$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true, email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: 'Campo obrigatório'
        },
        messages: {
            email: 'Campo obrigatório'
        },
        messages: {
            telefone: 'Campo obrigatório'
        },
        messages: {
            mensagem: 'Campo obrigatório'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(e, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert('Por favor, preencha o formulário corretamente')
                console.log(e)
            }
        }
    })
})