import React from 'react';
import * as Backend from './Backend';

export class ListaTarefas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tarefas: [],
      descricaoNovaTarefa: ''
    };

    this.adicionaTarefa = this.adicionaTarefa.bind(this);
    this.onChangeDescricao = this.onChangeDescricao.bind(this);
    this.onChangeConcluida = this.onChangeConcluida.bind(this);
    this.excluiTarefa = this.excluiTarefa.bind(this);

    Backend.buscaTarefas()
      .then(json => {
        this.setState({
          tarefas: json
        });
      });
  }

  adicionaTarefa(event) {
    event.preventDefault();
    Backend.adicionaTarefa({descricao: this.state.descricaoNovaTarefa})
      .then(json => {
        this.setState({
          tarefas: json,
          descricaoNovaTarefa: ''
        });
      });
  }

  excluiTarefa(id) {
    Backend.excluiTarefa(id)
      .then(json => {
        this.setState({
          tarefas: json
        });
      });
  }

  onChangeDescricao(event) {
    this.setState({descricaoNovaTarefa: event.target.value});
  }

  onChangeConcluida(idTarefa, concluida) {
    Backend.marcaTarefaConcluida(idTarefa, concluida)
      .then(json => {
        this.setState({
          tarefas: json
        });
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.adicionaTarefa}>
          <label>
            <input type="text" placeholder="Descrição da tarefa" value={this.state.descricaoNovaTarefa} onChange={this.onChangeDescricao} />
          </label>
          <input type="submit" value="Adiciona Tarefa" />
        </form>
        <table>
          <tbody>
          {this.state.tarefas.map((tarefa) => 
            <tr key={tarefa.id}>
              <td><input type="checkbox" checked={tarefa.concluida} onChange={this.onChangeConcluida.bind(this, tarefa.id, !tarefa.concluida)} /></td>
              <td>{tarefa.descricao}</td>
              <td><button onClick={this.excluiTarefa.bind(this, tarefa.id)}>Excluir</button></td>
            </tr>
          )}
          </tbody>
        </table>
      </div>
    );
  }
}