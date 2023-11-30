import { useState } from 'react';

function Form() {
  const [newRegister, setNewRegister] = useState(false);
  const [showButton, setShowButton] = useState(true);

  function showForm(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    setNewRegister(true);
    setShowButton(false);
  }

  function cancelForm(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    setNewRegister(false);
    setShowButton(true);
  }

  return (
    <>
      {
        showButton && (
          <button onClick={ showForm }>Cadastrar nova senha</button>
        )
      }

      {newRegister && (
        <form>
          <div>
            <label htmlFor="service">Nome do serviço</label>
            <input
              type="text"
              name="service"
              id="service"
            />
          </div>
          <div>
            <label htmlFor="login">Login</label>
            <input
              type="text"
              name="login"
              id="login"
            />
          </div>
          <div>
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              name="senha"
              id="senha"
            />
          </div>
          <div>
            <label htmlFor="url">URL</label>
            <input
              type="text"
              name="url"
              id="url"
            />
          </div>
          <button>Cadastrar</button>
          <button onClick={ cancelForm }>Cancelar</button>
        </form>
      )}
    </>

  );
}

export default Form;
