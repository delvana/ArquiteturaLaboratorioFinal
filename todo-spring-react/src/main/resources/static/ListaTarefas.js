import React from 'react';
import * as Backend from './Backend';

export class ListaTarefas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tarefas: [],
      descricaoNovaTarefa: '',
      omitirConcluidas: false,
      omitirPendentes: false
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

  onChangeOmitirConcluidas(omitirConcluidas) {
    this.setState({
      omitirConcluidas: omitirConcluidas
    });
  }

  getTarefas() {
    return this.state.tarefas.filter(t => !(this.state.omitirConcluidas && t.concluida) && !(this.state.omitirPendentes && !t.concluida));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.adicionaTarefa}>
          <h3>Tarefas</h3>
          <table>
            <tbody>
              <tr>
                <td></td>
                <td>
                  <input type="text" placeholder="Descrição da tarefa" value={this.state.descricaoNovaTarefa} onChange={this.onChangeDescricao} />
                </td>
                <td><input type="submit" value="Adiciona Tarefa" /></td>
              </tr>
            {this.getTarefas().map((tarefa) => 
              <tr key={tarefa.id}>
                <td><input type="checkbox" checked={tarefa.concluida} onChange={this.onChangeConcluida.bind(this, tarefa.id, !tarefa.concluida)} /></td>
                <td>{tarefa.descricao}</td>
                <td><button onClick={this.excluiTarefa.bind(this, tarefa.id)}>Excluir</button></td>
              </tr>
            )}
            </tbody>
          </table>
        </form>
        <div>
          <h4>Opções</h4>
          <div><input type="checkbox" checked={this.state.omitirConcluidas} onChange={this.onChangeOmitirConcluidas.bind(this, !this.state.omitirConcluidas)} />Não exibir tarefas concluídas</div>
        </div>
      </div>
    );
  }
}