import { useState } from "react";
import { cadastrarUsuario } from "../api/api";
function CadastroAluno() {
 const [nome, setNome] = useState("");
 const [email, setEmail] = useState("");
 async function handleSubmit(event) {
 event.preventDefault();
 const usuario = {
 nome: nome,
 email: email
 };
try {
 await cadastrarUsuario(usuario);
 alert("Usuário cadastrado com sucesso!");
 setNome("");
 setEmail("");
 } catch (erro) {
 console.error(erro);
 alert("Erro ao cadastrar usuário.");
 }
 }
 return (
 <main className="container">
 <h2>Cadastro de Aluno</h2>
 <form onSubmit={handleSubmit}>
 <div>
 <label>Nome:</label>
 <input
 type="text"
 value={nome}
 onChange={(event) => setNome(event.target.value)}
 />
 </div>
<div>
 <label>E-mail:</label>
 <input
 type="email"
 value={email}
 onChange={(event) => setEmail(event.target.value)}
 />
 </div>
 <button type="submit">Cadastrar</button>
 </form>
 </main>
 );
}
export default CadastroAluno;