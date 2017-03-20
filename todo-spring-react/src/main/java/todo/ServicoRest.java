package todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import todo.modelo.Tarefa;
import todo.modelo.TarefaService;

@RestController
public class ServicoRest {

	private TarefaService tarefaService;

	@Autowired
	public ServicoRest(TarefaService tarefaService) {
		this.tarefaService = tarefaService; 
	}

	@RequestMapping(value = "/tarefas", method = RequestMethod.GET)
	public Iterable<Tarefa> buscaTarefas() {
		return tarefaService.buscaTarefas();
	}

	@RequestMapping(value = "/tarefas", method = RequestMethod.POST)
	public Iterable<Tarefa> adicionaTarefa(@RequestBody Tarefa tarefa) {
		tarefaService.adicionaTarefa(tarefa);
		return buscaTarefas();
	}

	@RequestMapping(value = "/tarefas/{id}", method = RequestMethod.DELETE)
	public Iterable<Tarefa> excluiTarefa(@PathVariable int id) {
		tarefaService.excluiTarefa(id);
		return buscaTarefas();
	}

	@RequestMapping(value = "/tarefas/{id}", method = RequestMethod.POST)
	public Iterable<Tarefa> marcaTarefaConcluida(@PathVariable int id, @RequestParam(name = "concluida", required = true) boolean concluida) {
		tarefaService.marcaTarefaConcluida(id, concluida);
		return buscaTarefas();
	}

}
