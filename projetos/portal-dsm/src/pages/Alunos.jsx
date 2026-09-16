import { useEffect, useState } from "react";

import {
  listarUsuarios,
  editarUsuario,
  excluirUsuario
} from "../api/api";

function Alunos() {

  const [usuarios, setUsuarios] = useState([]);

  const [usuarioEditando, setUsuarioEditando] = useState(null);

  const [erro, setErro] = useState("");

  // Carregar usuários
  useEffect(() => {
    carregarUsuarios();
  }, []);

  async function carregarUsuarios() {

    try {

      setErro("");

      const dados = await listarUsuarios();

      setUsuarios(dados);

    } catch (erro) {

      console.error(erro);

      setErro("Não foi possível carregar os alunos.");

    }
  }

  // Abrir formulário de edição
  function handleEditar(usuario) {

    setUsuarioEditando({
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
      telefone: usuario.telefone || ""
    });

  }

  // Alterar os campos do formulário
  function handleChange(e) {

    const { name, value } = e.target;

    setUsuarioEditando((usuario) => ({
      ...usuario,
      [name]: value
    }));

  }

  // Salvar edição
  async function handleSalvarEdicao(e) {

    e.preventDefault();

    try {

      setErro("");

      const atualizado = await editarUsuario(
        usuarioEditando.id,
        {
          nome: usuarioEditando.nome,
          email: usuarioEditando.email,
          telefone: usuarioEditando.telefone
        }
      );

      setUsuarios((usuariosAtuais) =>
        usuariosAtuais.map((usuario) =>
          usuario.id === atualizado.id
            ? atualizado
            : usuario
        )
      );

      setUsuarioEditando(null);

    } catch (erro) {

      console.error(erro);

      setErro("Não foi possível atualizar o aluno.");

    }
  }

  // Cancelar edição
  function handleCancelar() {

    setUsuarioEditando(null);

  }

  // Excluir usuário
  async function handleExcluir(id) {

    const confirmar = window.confirm(
      "Deseja realmente excluir este aluno?"
    );

    if (!confirmar) {
      return;
    }

    try {

      setErro("");

      await excluirUsuario(id);

      setUsuarios((usuariosAtuais) =>
        usuariosAtuais.filter(
          (usuario) => usuario.id !== id
        )
      );

    } catch (erro) {

      console.error(erro);

      setErro("Não foi possível excluir o aluno.");

    }
  }

  return (

    <main className="container">

      <h2>Alunos</h2>

      {/* Mensagem de erro */}

      {erro && (
        <p className="mensagem-erro">
          {erro}
        </p>
      )}

      {/* Formulário de edição */}

      {usuarioEditando && (

        <div className="form-edicao">

          <h3>Editar aluno</h3>

          <form onSubmit={handleSalvarEdicao}>

            <div className="campo">

              <label htmlFor="nome">
                Nome
              </label>

              <input
                id="nome"
                name="nome"
                type="text"
                value={usuarioEditando.nome}
                onChange={handleChange}
                required
              />

            </div>

            <div className="campo">

              <label htmlFor="email">
                E-mail
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={usuarioEditando.email}
                onChange={handleChange}
                required
              />

            </div>

            <div className="campo">

              <label htmlFor="telefone">
                Telefone
              </label>

              <input
                id="telefone"
                name="telefone"
                type="text"
                value={usuarioEditando.telefone}
                onChange={handleChange}
              />

            </div>

            <div className="acoes-form">

              <button type="submit">
                Salvar
              </button>

              <button
                type="button"
                onClick={handleCancelar}
              >
                Cancelar
              </button>

            </div>

          </form>

        </div>

      )}

      {/* Lista de alunos */}

      <div className="lista-alunos">

        {usuarios.length === 0 ? (

          <p>Nenhum aluno cadastrado.</p>

        ) : (

          usuarios.map((usuario) => (

            <div
              key={usuario.id}
              className="aluno-item"
            >

              <div className="dados-aluno">

                <strong>
                  {usuario.nome}
                </strong>

                <span>
                  {usuario.email}
                </span>

                <span>
                  {usuario.telefone || "Telefone não informado"}
                </span>

              </div>

              <div className="acoes">

                <button
                  type="button"
                  onClick={() =>
                    handleEditar(usuario)
                  }
                >
                  Editar
                </button>

                <button
                  type="button"
                  onClick={() =>
                    handleExcluir(usuario.id)
                  }
                >
                  Excluir
                </button>

              </div>

            </div>

          ))

        )}

      </div>

    </main>

  );
}

export default Alunos;