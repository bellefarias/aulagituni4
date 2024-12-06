// Lista que irá armazenar as tarefas
let tarefas = [];

// Função para adicionar uma nova tarefa
function adicionarTarefa(titulo, prioridade, dataAgendamento = null) {
    const tarefa = {
        id: tarefas.length + 1, // Gerar um ID único para cada tarefa
        titulo: titulo,
        concluida: false,
        prioridade: prioridade, // Pode ser: 'alta', 'media', 'baixa'
        dataAgendamento: dataAgendamento,
    };

    tarefas.push(tarefa);
    console.log(`Tarefa "${titulo}" adicionada com sucesso!`);
}
