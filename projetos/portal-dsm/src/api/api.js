const API_URL = "http://localhost:3000";
export async function listarUsuarios() {
const resposta = await fetch(`${API_URL}/usuarios`);
if (!resposta.ok) {
throw new Error("Erro ao buscar usuários.");
}
return await resposta.json();
}

export async function cadastrarUsuario(usuario) {
const resposta = await fetch(`${API_URL}/usuarios`, {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify(usuario)
});
if (!resposta.ok) {
throw new Error("Erro ao cadastrar usuário.");
}
return await resposta.json();
}