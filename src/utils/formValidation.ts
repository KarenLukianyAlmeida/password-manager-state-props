import { Register } from '../type';

const minLength = 8;
const maxLength = 16;
export const hasLetters = /[a-zA-Z]/;
export const hasNumbers = /[0-9]/;
export const hasSpecials = /[\W]/;

export const registerValidation = (register: Register) => {
  const { service, login, senha } = register;

  const validService = service.length > 0;
  const validLogin = login.length > 0;
  const senhaHasMaxLength = senha.length <= maxLength;
  const senhaHasMinLength = senha.length >= minLength;
  const senhaHasLetters = hasLetters.test(senha);
  const senhaHasNumbers = hasNumbers.test(senha);
  const senhaHasSpecials = hasSpecials.test(senha);
  const validSenha = senhaHasMinLength
  && senhaHasMaxLength
  && senhaHasLetters
  && senhaHasNumbers
  && senhaHasSpecials;

  return (
    validService
    && validLogin
    && validSenha
  );
};
