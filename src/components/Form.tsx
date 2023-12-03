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
    hidePasswords: false,
  };
  const [data, setData] = useState<Register[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [register, setRegister] = useState(initialRegister);
  const { service, login, senha, url, hidePasswords } = register;

  const toogleForm = () => {
    setShowForm(!showForm);
  };

  const valid = 'valid-password-check';
  const invalid = 'invalid-password-check';

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.type === 'checkbox') {
      setRegister({ ...register, hidePasswords: !hidePasswords });
    } else {
      setRegister({ ...register, [event.target.name]: event.target.value });
    }
  };

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setData([...data, register]);
    toogleForm();
    if (hidePasswords) {
      setRegister({ ...initialRegister, hidePasswords });
    } else {
      setRegister(initialRegister);
    }
  };

  const handleRemoveData = (urlToRemove: string) => {
    const updateData = data.filter((item) => item.url !== urlToRemove);
    setData(updateData);
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
          <div>
            <button onClick={ toogleForm }>Cadastrar nova senha</button>
            <div>
              <label htmlFor="hide-passwords">Esconder senhas</label>
              <input
                type="checkbox"
                name="hide-passwords"
                id="hide-passwords"
                checked={ hidePasswords }
                onChange={ handleChange }
              />
            </div>
          </div>
        )
      }

      <div>
        { !data.length ? (
          <p>nenhuma senha cadastrada</p>
        ) : (
          data.map((item) => (
            <div key={ item.url }>
              <p>
                Link de acesso:
                <a href={ item.url } target="_blank" rel="noopener noreferrer">
                  {item.service}
                </a>
              </p>
              <p>
                Login:
                {item.login}
              </p>
              {
                hidePasswords ? <p>******</p> : <p>{item.senha}</p>
              }
              <button
                data-testid="remove-btn"
                onClick={ () => handleRemoveData(item.url) }
              >
                Remover
              </button>
              <hr />
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Form;
