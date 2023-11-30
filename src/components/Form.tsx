// const initialRegister = {
//   service: '';
//   login: '';
// }

function Form() {
  return (
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
      <button>Cancelar</button>
    </form>
  );
}

export default Form;
