package todo;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import todo.modelo.Tarefa;

@RestController
public class ServicoRest {

	@RequestMapping("/tarefas")
	public List<Tarefa> buscaTarefas() {
		return Arrays.asList(new Tarefa("Tarefa 1"), new Tarefa("Tarefa 2"));
	}

}
