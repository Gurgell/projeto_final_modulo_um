import { enviarEmail } from "./envia-email.mjs";
import { ErrorEmail } from "./error.mjs";

class Cliente{
    constructor (email, dataUltimaVisita, flag){
        this.email = email;
        this.dataUltimaVisita = dataUltimaVisita;
        this.flag = flag;
    }
}

let listaClientes = [];

function verificarDiaSemanaAtual(){
    //Esta retorna true caso o dia da semana seja segunda-feira (dia em que devem ser disparados os e-mails)
    if (new Date().getDay() === 1) {
        return true
    }
    return false
}

function enviarEmailsLista(){
    if (!verificarDiaSemanaAtual()){
        throw new ErrorEmail("Hoje não é segunda-feira portanto o(s) e-mail(s) não foram enviado(s)", "Error")
    }
    
    listaClientes.forEach(cliente => {
        // Se o cliente.flag for falso (cliente não quer receber emails) 
        // ou a data da última vísita do cliente for posterior a 30 dias, ele não envia o e-mail
        if (cliente.flag === false || (cliente.dataUltimaVisita < (new Date() - 30))){
            return
        }
        const mensagemErro = enviarEmail(cliente.email, 
            "Oportunidade para aquisição de veículo com até 15% de desconto!", 
            `Olá, tudo bem?

            Temos uma oferta imperdível para você!
            Nossa loja está oferecendo promoções dos seguintes modelos de automóvel:

            Honda civic preto 13/14 - R$70.000,00 
                * À vista por R$66.500,00 (5% de desconto)

            Jeep renegade prata 21/22 - R$100.000,00 (Caso pague à vista, 10% de desconto)
                * À vista por R$90.000,00 (10% de desconto)

            Chevrolet celta 16/17 - R$40.000,00 (Caso pague à vista, 15% de desconto)
                * À vista por R$36.000,00 (15% de desconto)

            Caso deseje mais informações, entre em contato com o nosso time de vendas através do número: (21)9999-9999
            `)
        
        if (mensagemErro.status === "Error")
            throw new ErrorEmail(mensagemErro.message, mensagemErro.status)
        
        console.log("-------------------------------------------------------------------------------------------------------------------------------")
        
    });
}

export { Cliente, enviarEmailsLista, listaClientes };

