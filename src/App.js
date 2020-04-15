import React, { Component } from 'react'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import TodoBar from './components/TodoBar'
import { v4 as uuidv4 } from 'uuid'

import './App.css';


export class App extends Component {

state={
  todos:[
    {title : 'Nothing Special' , status : false, cod : 1}, 
    {title : 'Nothing so Special', status : false, cod : 2}
  ],
  showCompletion:0,
}


markComplete = (cod) =>{
  this.setState({todos: this.state.todos.map(todo => {
    if(todo.cod===cod)
      todo.status = !todo.status;
      return todo;
  }) })
}

delTodo = (cod) =>{
  this.setState({todos: this.state.todos.filter(todo => todo.cod!==cod)})
}

addTodo = (title) =>{
const newTodo={
  status:false,
  title,
  cod:uuidv4()
  }
  this.setState({todos: [...this.state.todos, newTodo]})
} 

showAll = () =>{
  this.setState({showCompletion: 0})
}

showUncompleted = () =>{
  this.setState({showCompletion: 1})
}

showCompleted = () =>{
  this.setState({showCompletion: 2})
}

delCompleted = () =>{
  this.setState({todos: this.state.todos.filter(todo => todo.status!==true)})
}

  render() {

    return (
      <div className="App">
        <AddTodo addTodo={ this.addTodo} />
        <Todos todos={ this.state.todos } markComplete={ this.markComplete } delTodo={ this.delTodo } showCompletion={this.state.showCompletion}/>
        <TodoBar showAll={this.showAll} showUncompleted={this.showUncompleted} showCompleted={this.showCompleted} delCompleted={this.delCompleted} />
      </div>
    );
  }
}

export default App

