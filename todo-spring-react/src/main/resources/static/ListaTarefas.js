import React from 'react';

export class ListaTarefas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tarefas: [{descricao: 'Lavar a louça'}]};

    // This binding is necessary to make `this` work in the callback
    this.adicionaTarefa = this.adicionaTarefa.bind(this);
  }

  adicionaTarefa() {
    this.setState(prevState => ({
      tarefas: prevState.tarefas.concat([{descricao: 'Nova'}])
    }));
  }

  render() {
    return (
      <div>
        <ul>
        {this.state.tarefas.map((tarefa) => 
          <li>{tarefa.descricao}</li>
        )}
        </ul>
        <button onClick={this.adicionaTarefa}>Adiciona</button>
      </div>
    );
  }
}