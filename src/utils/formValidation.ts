import { Register } from '../type';
import { PasswordValidation } from './passwordValidation';

export const registerValidation = (register: Register) => {
  const { service, login, senha } = register;

  const validService = service.length > 0;
  const validLogin = login.length > 0;

  const validSenha = PasswordValidation.minLength(senha)
  && PasswordValidation.maxLength(senha)
  && PasswordValidation.hasSpecials(senha)
  && PasswordValidation.isAlphanumeric(senha);

  return (
    validService
    && validLogin
    && validSenha
  );
};
