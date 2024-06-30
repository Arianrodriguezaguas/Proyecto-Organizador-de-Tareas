import { v4 as uuid } from 'uuid';
import React, { useState } from 'react';


import { Container, ToDoList, Input, Button, ListItem, Trash, Check } from "./styles.js";

function App() {

  const [list, setList] = useState([]);
  const [inputTask, setInputTask] = useState(" ");



  function myInput(event) {
    setInputTask(event.target.value)
  }

  function buttonClick() {
    if (inputTask) {
      setList([...list, { id: uuid(), task: inputTask, finished: false }])
    }
  }

  function finishTask(id) {
    const newList = list.map(item => (
      item.id === id ? { ...item, finished: !item.finished } : item
    ))

    setList(newList)
  }

  function deleteTask(id) {
    const newList = list.filter((item) => item.id !== id)

    setList(newList)
  }

  return (
    <Container>
      <ToDoList>
        <Input onChange={myInput} placeholder="Digite su Tarea" type="text" />
        <Button onClick={buttonClick}>Adicionar</Button>
        <ul>
          {
            list.length > 0 ? (
              list.map((item) => (
                <ListItem isFinished={item.finished} key={item.id}>
                  <Check onClick={() => finishTask(item.id)} />
                  <li>{item.task}</li>
                  <Trash onClick={() => deleteTask(item.id)} />
                </ListItem>
              ))
            ) : (
              <h3>No Tienes Tareas</h3>
            )}
        </ul>
      </ToDoList>
    </Container>
  )
}

export default App
