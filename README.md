# Fundamentos de Arquitetura de Software - Laboratório Final


Este repositório contém uma aplicação Web de lista de tarefas construída utilizando o framework Spring Boot
no back-end, e React.js no front-end.

## Back-end

O back-end utiliza os recursos do Spring para fornecer implementar uma API REST baseada em JSON:

    GET tarefas                                 Lista as tarefas
    POST tarefas                                Cria uma tarefa
    POST tarefas/{id}?concluido={concluido}     Muda o status concluido
    DELETE tarefas/{id}                         Exclui uma tarefa

O acesso aos dados é feito por meio da API Spring Data JPA.


## Banco de dados

A aplicação utiliza o banco de dados H2, que é iniciado junto com a aplicação. Portanto, não é necessário 
nenhuma configuração adicional.
Note que os dados do banco ficam armazenados no arquivo `h2-data.mv.db`.


## Front-end

O front-end é construído em Javascript, utilizando o framework React.js. Para tal, foi utilizado o ambiente
Javascript NodeJs. Nele, é utilizado um conjunto de plug-ins (browserify e babelify) para processar os arquivos js em um só aquivo
unificado (`bundle.js`).


## Instruções para compilar e executar a aplicação

A única dependência para compilar a aplicação é ter o Java Development Kit instalado no computador.
A compilação e execução da aplicação pode ser disparada pelo sistema de build gradle.

Primeiro, baixe o repositório do git:

    git clone https://github.com/delvana/ArquiteturaLaboratorioFinal.git

Em seguida, entre no diretório `ArquiteturaLaboratorioFinal/todo-spring-react` e digite o seguinte comando:

    cd ArquiteturaLaboratorioFinal\todo-spring-react
    gradlew bootrun

Tal comando baixará todas as bibliotecas necessárias do back-end e também do front-end (usando o NodeJs), 
compilará a aplicação e iniciará um servidor, que poderá ser acessado no endereço `http://localhost:8080`.

### Executar a aplicação diretamente to JAR

Um JAR com a aplicação compilada e pronta para uso também foi disponibilizado no repositório. Para utilizá-lo,
entre no diretório `ArquiteturaLaboratorioFinal/todo-spring-react` e digite o seguinte comando:

    cd ArquiteturaLaboratorioFinal\todo-spring-react
    java -jar todo-spring-react.jar

Note que o java deve estar instalado na máquina para executar a aplicação.

