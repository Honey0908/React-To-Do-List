# ToDo-React-App

This is a simple todo list application built with React. It allows users to add new tasks to the list, mark tasks as completed, and delete tasks from the list. It also set expiration for the next day to remove data from local storage. So all the tasks will be cleared on the next day

[Deploy Link](https://feature--visionary-melba-1a082d.netlify.app/)

![TodoList UI](/public/TodoList.png)

## Getting Started

To get started with the TODO List UI, follow these steps:

- Clone this repository to your local machine.
- Install the dependencies by running `npm install` in the project directory.
- Run `npm start` to start the application.

## Usage

### Adding a new task

To add a new task to the list, enter the task text in the input field and press the "Enter" key. The new task will be added to the list.

### Marking a task as completed

To mark a task as completed, click on the checkbox next to the task text. The task will be visually marked as completed.

### Deleting a task

To delete a task from the list, click on the task and click the delete button that appears on the right side of the task. The task will be removed from the list.

## Folder Structure

Component folder contains all the component included in ToDo list page like date, add todo, and list of todos

assets includes images used in the project. Store Folder contains global context for todo tasks

```sh
.
├── index.html
├── package.json
├── package-lock.json
├── public
│   ├── favicon.png
│   └── TodoList.png
├── readme.md
├── src
│   ├── App.jsx
│   ├── assets
│   │   ├── checked.png
│   │   ├── completeTaks.png
│   │   └── unchecked.png
│   ├── Components
│   │   ├── Addtodo
│   │   │   ├── AddTodo.jsx
│   │   │   └── AddTodo.module.css
│   │   ├── DateHeader
│   │   │   ├── DateHeader.jsx
│   │   │   └── DateHeader.module.css
│   │   ├── NoTask.jsx
│   │   │   ├── NoTask.jsx
│   │   │   └── NoTask.module.css
│   │   ├── Todo
│   │   │   ├── Todo.jsx
│   │   │   └── Todo.module.css
│   │   └── Todos
│   │       ├── Todos.jsx
│   │       └── Todos.module.css
│   ├── index.css
│   ├── main.jsx
│   ├── pages
│   │   └── ToDoList
│   │       ├── ToDoList.jsx
│   │       └── ToDoList.module.css
│   └── store
│       ├── actions.jsx
│       ├── reducer.jsx
│       └── TodoContext.jsx
└── vite.config.js
```
