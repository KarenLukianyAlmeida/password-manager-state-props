import { useState } from 'react';
import { Register, ChangeEvent } from '../type';
import { registerValidation,
  hasLetters,
  hasNumbers,
  hasSpecials,
} from '../utils/formValidation';

function Form() {
  const [newRegister, setNewRegister] = useState(false);
  const [showButton, setShowButton] = useState(true);

  function showForm(event: ChangeEvent) {
    event.preventDefault();
    setNewRegister(true);
    setShowButton(false);
  }

  function cancelForm(event: ChangeEvent) {
    event.preventDefault();
    setNewRegister(false);
    setShowButton(true);
  }

  const initialRegister: Register = {
    service: '',
    login: '',
    senha: '',
    url: '',
  };

  const [register, setRegister] = useState(initialRegister);
  const { service, login, senha, url } = register;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegister({ ...register, [event.target.name]: event.target.value });
  };

  const switchClass = 'valid-password-check' || 'invalid-password-check';

  const isDisabled = (!registerValidation(register));

  return (
    <>
      {
        showButton && (
          <button onClick={ showForm }>Cadastrar nova senha</button>
        )
      }

      {newRegister && (
        <form
          onSubmit={ (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
          } }
        >
          <div>
            <label htmlFor="service">Nome do serviço</label>
            <input
              type="text"
              name="service"
              value={ service }
              onChange={ handleChange }
              id="service"
            />
          </div>
          <div>
            <label htmlFor="login">Login</label>
            <input
              type="text"
              name="login"
              value={ login }
              onChange={ handleChange }
              id="login"
            />
          </div>
          <div>
            <label
              htmlFor="senha"
            >
              Senha

            </label>
            <input
              type="password"
              name="senha"
              value={ senha }
              onChange={ handleChange }
              id="senha"
            />
          </div>
          <div>
            <p
              className={ senha.length >= 8
                ? 'valid-password-check'
                : 'invalid-password-check' }
            >
              Possuir 8 ou mais caracteres

            </p>
            <p
              className={ senha.length <= 16
                ? 'valid-password-check'
                : 'invalid-password-check' }
            >
              Possuir até 16 caracteres

            </p>
            <p
              className={ hasLetters.test(senha) && hasNumbers.test(senha)
                ? 'valid-password-check'
                : 'invalid-password-check' }
            >
              Possuir letras e números
            </p>
            <p
              className={ hasSpecials.test(senha)
                ? 'valid-password-check'
                : 'invalid-password-check' }
            >
              Possuir algum caractere especial
            </p>
          </div>
          <div>
            <label htmlFor="url">URL</label>
            <input
              type="text"
              name="url"
              value={ url }
              onChange={ handleChange }
              id="url"
            />
          </div>
          <button
            type="submit"
            disabled={ isDisabled }
            onClick={ () => registerValidation(register) }
          >
            Cadastrar

          </button>
          <button onClick={ cancelForm }>Cancelar</button>
        </form>
      )}
    </>

  );
}

export default Form;
