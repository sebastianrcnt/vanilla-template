// Elements
// CSS Selectors: https://poiemaweb.com/css3-selector
// JS-dom selector: https://poiemaweb.com/js-dom#3-dom-query--traversing-%EC%9A%94%EC%86%8C%EC%97%90%EC%9D%98-%EC%A0%91%EA%B7%BC
const taskInput = document.querySelector("#new-task"); // new-task
const taskInputForm = document.querySelector("form");
const incompleteTasksHolder = document.querySelector("#incomplete-tasks"); //incomplete-tasks
const completedTasksHolder = document.querySelector("#completed-tasks"); //completed-tasks

// Global State
// let, const: https://poiemaweb.com/es6-block-scope
let state = {
  todos: [
    { id: 0, name: "Pay Bills", completed: false },
    { id: 1, name: "See the Doctor", completed: true },
  ],
  currentId: 2,
};

function setState(nextState) {
  console.log("State 변경됨");
  state = nextState;
  render(state);
}

// Templates
// Template Literals: https://poiemaweb.com/es6-template-literals
// Arrow Functions: https://poiemaweb.com/es6-arrow-function
// Ternary Operator: https://poiemaweb.com/js-operator#7-%EC%82%BC%ED%95%AD-%EC%A1%B0%EA%B1%B4-%EC%97%B0%EC%82%B0%EC%9E%90
const TodoItemTemplate = (props) => {
  const { id, completed, name } = props.todo;
  return `
    <li class="todo">
      <input type="checkbox" onchange="toggleTodoById(${id})" ${
    completed ? "checked" : ""
  }/>
      <label>${name}</label>
      <button class="delete" onclick="deleteTodoById(${id})">Delete</button>
    </li>
`;
};

// Render Functions
// Object Property Shorthand: https://poiemaweb.com/es6-enhanced-object-property#1-%ED%94%84%EB%A1%9C%ED%8D%BC%ED%8B%B0-%EC%B6%95%EC%95%BD-%ED%91%9C%ED%98%84
// Javascript for/of: https://poiemaweb.com/es6-iteration-for-of
function render(state) {
  completedTasksHolder.innerHTML = "";
  incompleteTasksHolder.innerHTML = "";

  for (let todo of state.todos) {
    if (todo.completed) {
      completedTasksHolder.innerHTML += TodoItemTemplate({ todo });
    } else {
      incompleteTasksHolder.innerHTML += TodoItemTemplate({ todo });
    }
  }
}

// Event Listeners
taskInputForm.addEventListener("submit", (event) => {
  event.preventDefault();
  createTodo();
  taskInput.value = "";
});

// State Mutating Functions
// Spread Operator: https://poiemaweb.com/es6-extended-parameter-handling#3-spread-%EB%AC%B8%EB%B2%95
//
function createTodo() {
  setState({
    ...state,
    currentId: state.currentId + 1,
    todos: [
      ...state.todos,
      {
        id: state.currentId + 1,
        name: taskInput.value,
        completed: false,
      },
    ],
  });
}

function deleteTodoById(id) {
  setState({
    ...state,
    todos: state.todos.filter((todo) => todo.id !== id),
  });
}

function toggleTodoById(id) {
  setState({
    ...state,
    todos: state.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ),
  });
}

// Main
// 즉시실행함수: https://poiemaweb.com/js-function#71-%EC%A6%89%EC%8B%9C-%EC%8B%A4%ED%96%89-%ED%95%A8%EC%88%98
(() => {
  render(state);
})();
