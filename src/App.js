import React, { Component } from 'react'
import TodosVeryHigh from './components/TodosVeryHigh'
import TodosHigh from './components/TodosHigh'
import TodosMedium from './components/TodosMedium'
import TodosLow from './components/TodosLow'
import AddTodo from './components/AddTodo'
import TodoBar from './components/TodoBar'
import { v4 as uuidv4 } from 'uuid'

import './App.css';


export class App extends Component {

state={
  todos:[
    {title : 'Nothing Special', priority: 'Very High', completed : false, id : 1}, 
    {title : 'Nothing so Special', priority: 'Low', completed : false, id : 2}, 
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

addTodo = (title, priority) =>{
const newTodo={
  completed:false,
  title,
  priority,
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
        <TodoBar showAll={this.showAll} showUncompleted={this.showUncompleted} showCompleted={this.showCompleted} delCompleted={this.delCompleted} />
        <div className="todoScroll">
          <TodosVeryHigh todos={ this.state.todos } markComplete={ this.markComplete } delTodo={ this.delTodo } itemsToShow={this.state.itemsToShow}/>
          <TodosHigh todos={ this.state.todos } markComplete={ this.markComplete } delTodo={ this.delTodo } itemsToShow={this.state.itemsToShow}/>
          <TodosMedium todos={ this.state.todos } markComplete={ this.markComplete } delTodo={ this.delTodo } itemsToShow={this.state.itemsToShow}/>
          <TodosLow todos={ this.state.todos } markComplete={ this.markComplete } delTodo={ this.delTodo } itemsToShow={this.state.itemsToShow}/>
        </div>
        <AddTodo addTodo={ this.addTodo} />
      </div>
    );
  }
}

export default App

