export { ErrorEmail };

class ErrorEmail extends Error{
    constructor (mensagem, status){
        super(mensagem)
        this.status = status
    }
}