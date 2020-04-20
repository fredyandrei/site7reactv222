import React, { Component } from 'react'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import TodoBar from './components/TodoBar'
import { v4 as uuidv4 } from 'uuid'

import './App.css';


export class App extends Component {

state={
  todos:[
    {title : 'Nothing Special' , completed : false, id : 1}, 
    {title : 'Nothing so Special', completed : false, id : 2}
  ],
  itemsToShow:0,
}


markComplete = (id) =>{
  this.setState({todos: this.state.todos.map(todo => {
    if(todo.id===id)
      todo.completed = !todo.completed;
      return todo;
  }) })
}

delTodo = (id) =>{
  this.setState({todos: this.state.todos.filter(todo => todo.id!==id)})
}

addTodo = (title) =>{
const newTodo={
  completed:false,
  title,
  id:uuidv4()
  }
  this.setState({todos: [...this.state.todos, newTodo]})
} 

showAll = () =>{
  this.setState({itemsToShow: 0})
}

showUncompleted = () =>{
  this.setState({itemsToShow: 1})
}

showCompleted = () =>{
  this.setState({itemsToShow: 2})
}

delCompleted = () =>{
  this.setState({todos: this.state.todos.filter(todo => todo.completed!==true)})
}

  render() {

    return (
      <div className="App">
        <AddTodo addTodo={ this.addTodo} />
        <Todos todos={ this.state.todos } markComplete={ this.markComplete } delTodo={ this.delTodo } itemsToShow={this.state.itemsToShow}/>
        <TodoBar showAll={this.showAll} showUncompleted={this.showUncompleted} showCompleted={this.showCompleted} delCompleted={this.delCompleted} />
      </div>
    );
  }
}

export default App

