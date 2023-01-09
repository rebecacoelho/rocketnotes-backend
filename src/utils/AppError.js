class AppError {
  message;
  statusCode;

  constructor(message, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  } // constructor = metodo carrgado instantaneamente quando a classe é carregada
}

module.exports = AppError;