import { useState } from 'react';
import { Register } from '../type';
import { registerValidation } from '../utils/formValidation';
import { PasswordValidation } from '../utils/passwordValidation';

function Form() {
  const initialRegister: Register = {
    service: '',
    login: '',
    senha: '',
    url: '',
  };
  const [data, setData] = useState<Register[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [register, setRegister] = useState(initialRegister);
  const { service, login, senha, url } = register;

  function toogleForm() {
    setShowForm(!showForm);
  }

  // função de cadastrar
  // ciar um novo estado que gurada um array de objetos com os meus registros
  // add um novo registro no array (fazer spread dentro do meu set)
  // resetar o register ok
  // desaparecer o formulário/ função toogle ok
  const valid = 'valid-password-check';
  const invalid = 'invalid-password-check';

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // registerValidation(register);
    setRegister({ ...register, [event.target.name]: event.target.value });
  };

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setData([...data, register]);
    toogleForm();
  };

  const isDisabled = (!registerValidation(register));

  return (
    <>
      {
        showForm ? (
          <form
            onSubmit={ handleSubmitForm }
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
                className={ PasswordValidation.minLength(senha)
                  ? valid
                  : invalid }
              >
                Possuir 8 ou mais caracteres

              </p>
              <p
                className={ PasswordValidation.maxLength(senha)
                  ? valid
                  : invalid }
              >
                Possuir até 16 caracteres

              </p>
              <p
                className={ PasswordValidation.isAlphanumeric(senha)
                  ? valid
                  : invalid }
              >
                Possuir letras e números
              </p>
              <p
                className={ PasswordValidation.hasSpecials(senha)
                  ? valid
                  : invalid }
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
            >
              Cadastrar

            </button>
            <button type="button" onClick={ toogleForm }>Cancelar</button>
          </form>
        ) : (
          <button onClick={ toogleForm }>Cadastrar nova senha</button>
        )
      }

      <div>
        { !data.length ? (
          <p>nenhuma senha cadastrada</p>
        ) : (
          data.map((item) => (
            <div key={ item.url }>
              <a href={ item.url } target="_blank" rel="noopener noreferrer">
                {item.service}
              </a>
              <p>{item.login}</p>
              <p>{item.senha}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Form;
