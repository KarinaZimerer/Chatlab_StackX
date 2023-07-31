
/**
 * Chatlab - Conceitos de array/object em Javascript.
 * 
 * Implemente as funções a partir daqui.
 */

// Exemplo: function minhaFuncao() { ... }

// --------------------------------
// Não remover estas linhas
// --------------------------------
module.exports =
{
  listaMensagens,
  adicionarMensagem,
  formatarMensagens,
  atualizarHTML,
  commitMessageClickHandler
};
// -------------------------------- 

// Criação do array listaMensagens
const listaMensagens = [];

// Função para adicionar mensagem ao array listaMensagens
function adicionarMensagem(apelido, mensagem) {
    listaMensagens.push({ apelido, mensagem });
}

// Função para formatar as mensagens em HTML
function formatarMensagens() {
    let messagesHTML = '';
    for (const mensagem of listaMensagens) {
        messagesHTML += `
            <div class="chat-message">
                <span class="chat-message-apelido">${mensagem.apelido}:</span>
                <span class="chat-message-item">${mensagem.mensagem}</span>
            </div>
        `;
    }
    return messagesHTML;
}

// Função para atualizar o conteúdo da div #chat-messages com as mensagens formatadas
function atualizarHTML() {
    const chatMessagesDiv = document.getElementById('chat-messages');
    const messagesHTML = formatarMensagens();
    chatMessagesDiv.innerHTML = messagesHTML;
}

// Função para lidar com o clique no botão #message-commit
function commitMessageClickHandler() {
    const inputElement = document.getElementById('message-input');
    const mensagem = inputElement.value.trim();
    if (mensagem !== '') {
        adicionarMensagem("Seu Apelido", mensagem);
        inputElement.value = '';
        atualizarHTML();
    }
}

// Event listener para o clique no botão #message-commit
document.getElementById('message-commit').addEventListener('click', commitMessageClickHandler);
