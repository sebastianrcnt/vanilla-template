# Vanilla-Todo

## 작동 링크

- [추가 예정]()

## 소개

- HTML, CSS, Vanilla.js 만을 이용하여 만든 Todo-App 입니다.
- 이 프로젝트에서 사용된 여러 가지 개념과 코딩 패턴을 잘 기억해두시고, Vanilla-Messenger를 만들 때 참고하여 만들어주세요.

## 활용방안

> - 이 프로젝트에서 사용된 모든 javascript을 문법을 꼼꼼히 읽고 체크해주세요.
> - 사용된 문법은 `script.js`파일 내 주석에 자료 링크와 함께 정리되어 있습니다. (아래 코드 참고)

```javascript
// Elements
// CSS Selectors: https://poiemaweb.com/css3-selector
// JS-dom selector: https://poiemaweb.com/js-dom#3-dom-query--traversing-%EC%9A%94%EC%86%8C%EC%97%90%EC%9D%98-%EC%A0%91%EA%B7%BC
const taskInput = document.querySelector("#new-task"); // new-task
const taskInputForm = document.querySelector("form");
const incompleteTasksHolder = document.querySelector("#incomplete-tasks"); //incomplete-tasks
const completedTasksHolder = document.querySelector("#completed-tasks"); //completed-tasks
```

> - render() function을 이용하여 state를 UI로 렌더링하는 패턴에 주목해주세요.

```javascript
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
```

> - 직접적으로 state를 수정하지 않고 setState()을 이용하여 새로운 state로 대체하는 패턴에도 주목해주세요.

```javascript
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
```

## 참고

- [Poiemaweb](https://poiemaweb.com/): 웹 개발을 전반적으로 정리해놓은 사이트입니다.
