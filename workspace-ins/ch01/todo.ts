(() => {
  // TODO: 에러나 경고가 발생하는 부분에 적절한 타입 선언

  let todoItems = [
    { id: 1, title: "안녕", done: false },
    { id: 2, title: "타입", done: false },
    { id: 3, title: "스크립트", done: false },
  ];

  // api
  function fetchTodoItems() {
    const todos = [
      { id: 1, title: "안녕", done: false },
      { id: 2, title: "타입", done: false },
      { id: 3, title: "스크립트", done: false },
    ];
    return todos;
  }

  // TODO: Todo Type 지정
  type Todo = { id: number; title: string; done: boolean };

  // crud methods
  function fetchTodos() {
    const todos = fetchTodoItems();
    return todos;
  }

  function addTodo(todo: Todo) {
    todoItems.push(todo);
  }

  function deleteTodo(index: number) {
    todoItems.splice(index, 1);
  }

  function completeTodo(index: number, todo: Todo) {
    todo.done = true;
    todoItems.splice(index, 1, todo);
  }

  // business logic
  function logFirstTodo() {
    return todoItems[0];
  }

  function showCompleted() {
    return todoItems.filter((item) => item.done);
  }

  function addTwoTodoItems(todo1: Todo, todo2: Todo) {
    // TODO: addTodo() 함수를 두 번 호출하여 todoItems에 할일 2개 추가
    addTodo(todo1);
    addTodo(todo2);
  }

  // 1. Todo 목록을 가져온다.
  todoItems = fetchTodos();
  // 2. 2개의 Todo를 등록한다.
  addTwoTodoItems({ id: 4, title: "하나", done: false }, { id: 5, title: "둘", done: false });

  console.log(todoItems);
})();
