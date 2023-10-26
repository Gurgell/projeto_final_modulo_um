import { Cliente, enviarEmailsLista, listaClientes } from "./cliente.mjs";

listaClientes.push(new Cliente("gurgel.gabriel@yahoo.com", new Date(2023, 10, 8), true)) 
listaClientes.push(new Cliente("Daniel.monteiro@yahoo.com", new Date(2023, 10, 22), false))
listaClientes.push(new Cliente("Roberto.julio@yahoo.com", new Date(2023, 9, 27), true))
listaClientes.push(new Cliente("juliana.carvalho@yahoo.com", new Date(2023, 8, 10), true))
listaClientes.push(new Cliente("", new Date(2023, 8, 27), true))

try {
    enviarEmailsLista()
} catch (error) {
    console.log(error.status, "-", error.message)
}

// OBSERVAÇÃO: 

// Se tentar executar em um dia que não seja segunda-feira ele não irá funcionar (requisito do enunciado).
// Para que funcione mesmo sem ser segunda-feira, basta seguir os passos abaixo:

// 1 - Acessar o arquivo cliente.mjs
// 2 - Ir até a função: "enviarEmailsLista()"
// 3 - Basta retirar a negação contida na chamada da função: "!verificarDiaSemanaAtual()", localizada no primeiro if da função
// 4 - Pronto! Agora é só salvar a modificação e rodar novamente que os e-mails serão enviados conforme as regras de negócio! :)

