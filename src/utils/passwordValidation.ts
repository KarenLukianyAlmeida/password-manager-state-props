const minLength = 8;
const maxLength = 16;
const hasLetters = /[a-zA-Z]/;
const hasNumbers = /[0-9]/;
const hasSpecials = /[\W]/;

export const PasswordValidation = {
  maxLength: (password: string): boolean => {
    return password.length <= maxLength;
  },

  minLength: (password: string): boolean => {
    return password.length >= minLength;
  },

  isAlphanumeric: (password: string): boolean => {
    return hasLetters.test(password) && hasNumbers.test(password);
  },

  hasSpecials: (password: string): boolean => {
    return hasSpecials.test(password);
  },
};
