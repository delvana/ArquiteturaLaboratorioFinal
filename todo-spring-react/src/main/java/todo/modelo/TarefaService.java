package todo.modelo;

public interface TarefaService {

	public Iterable<Tarefa> buscaTarefas();

	public Iterable<Tarefa> adicionaTarefa(Tarefa tarefa);

	public Iterable<Tarefa> excluiTarefa(int id);

	public Iterable<Tarefa> marcaTarefaConcluida(int id, boolean concluida);

}
