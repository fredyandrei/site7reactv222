import React, { Component } from 'react'
import TodoItem from './TodoItem'

export class Todos extends Component {
    render() {
        const completion=this.props.showCompletion
        const todoArray=[]
        if(completion===0){
            for(let i=0;i<this.props.todos.length;i++){
                todoArray.push(this.props.todos[i])
            }
        }else if(completion===1){
            for(let i=0;i<this.props.todos.length;i++){
                if(this.props.todos[i].status===false)
                    todoArray.push(this.props.todos[i])
            }
        }else if(completion===2){
            for(let i=0;i<this.props.todos.length;i++){
                if(this.props.todos[i].status===true)
                    todoArray.push(this.props.todos[i])
            }
        }

        return todoArray.map((todo) => (
            <TodoItem key={todo.cod} todo={ todo } markComplete={ this.props.markComplete } delTodo={ this.props.delTodo }/>
        )) 



        /*return this.props.todos.map((todo) => (
            <TodoItem key={todo.cod} todo={ todo } markComplete={ this.props.markComplete } delTodo={ this.props.delTodo }/>
        ))*/  

             

    }
}
//markComplete={ this.props.markComplete } delTodo={ this.props.delTodo }

export default Todos
