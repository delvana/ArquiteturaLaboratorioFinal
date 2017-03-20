
export function buscaTarefas() {
  return httpGet('tarefas');
}

export function adicionaTarefa(tarefa) {
  return httpPost('tarefas', tarefa);
}

export function excluiTarefa(idTarefa) {
  return httpDelete('tarefas/' + idTarefa);
}

function httpPost(url, dados) {
  return fetch(url, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dados)
  }).then(response => response.json());
}

function httpDelete(url) {
  return fetch(url, {
    method: 'delete'
  }).then(response => response.json());
}

function httpGet(url) {
  return fetch(url).then(response => response.json());
}
