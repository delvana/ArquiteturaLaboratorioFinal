package todo.modelo;

import org.springframework.data.repository.PagingAndSortingRepository;

public interface TarefaRepository extends PagingAndSortingRepository<Tarefa, Integer> {

}
