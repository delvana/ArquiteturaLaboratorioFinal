package todo.modelo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = false)
public class TarefaServiceImpl implements TarefaService {

	private TarefaRepository tarefaRepository;

	@Autowired
	public TarefaServiceImpl(TarefaRepository tarefaRepository) {
		this.tarefaRepository = tarefaRepository;
	}

	@Override
	@Transactional(readOnly = true)
	public Iterable<Tarefa> buscaTarefas() {
		return tarefaRepository.findAll(new Sort("id"));
	}

	@Override
	public Iterable<Tarefa> adicionaTarefa(Tarefa tarefa) {
		tarefaRepository.save(tarefa);
		return buscaTarefas();
	}

	@Override
	public Iterable<Tarefa> excluiTarefa(int id) {
		tarefaRepository.delete(id);
		return buscaTarefas();
	}

	@Override
	public Iterable<Tarefa> marcaTarefaConcluida(int id, boolean concluida) {
		Tarefa tarefa = tarefaRepository.findOne(id);
		tarefa.setConcluida(concluida);
		tarefaRepository.save(tarefa);
		return buscaTarefas();
	}

}
