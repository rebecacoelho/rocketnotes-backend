const { hash } = require("bcryptjs");
const AppError = require("../utils/AppError");

class UserCreateService {
  constructor(userRepository) {
    this.userRepository = userRepository; // this = disponivel para toda a classe
  }

  async execute({ name, email, password }) {
    const checkUserExists = await this.userRepository.findByEmail(email);

    if(checkUserExists) {
      throw new AppError("Este e-mail já está em uso");
    }

    const hashedPassword = await hash(password, 8); // 8 = nivel de complexidade

    const userCreated = await this.userRepository.create({ name, email, password: hashedPassword });

    return userCreated;
  }
}

module.exports = UserCreateService;