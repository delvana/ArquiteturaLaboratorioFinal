package todo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import todo.modelo.Tarefa;

@RestController
public class ServicoRest {

	private int geradorId = 1;

	private List<Tarefa> tarefas = new ArrayList<>();

	@RequestMapping(value = "/tarefas", method = RequestMethod.GET)
	public List<Tarefa> buscaTarefas() {
		return tarefas;
	}

	@RequestMapping(value = "/tarefas", method = RequestMethod.POST)
	public List<Tarefa> adicionaTarefa(@RequestBody Tarefa tarefa) {
		tarefa.setId(geradorId++);
		tarefas.add(tarefa);
		return tarefas;
	}

	@RequestMapping(value = "/tarefas/{id}", method = RequestMethod.DELETE)
	public List<Tarefa> adicionaTarefa(@PathVariable int id) {
		for (int i = 0; i < tarefas.size(); i++) {
			if (tarefas.get(i).getId() == id) {
				tarefas.remove(i);
				break;
			}
		}
		return tarefas;
	}

	@RequestMapping(value = "/tarefas/{id}", method = RequestMethod.POST)
	public List<Tarefa> marcaTarefaConcluida(@PathVariable int id, @RequestParam(name = "concluida", required = true) boolean concluida) {
		for (int i = 0; i < tarefas.size(); i++) {
			if (tarefas.get(i).getId() == id) {
				tarefas.get(i).setConcluida(concluida);
				break;
			}
		}
		return tarefas;
	}

}
