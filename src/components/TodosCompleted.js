import React, { Component } from 'react'
import TodoItem from './TodoItem'

export class TodosCompleted extends Component {
    render() {
        const completion=this.props.itemsToShow
        const todoArray=[]
        if(completion===1){
            for(let i=0;i<this.props.todos.length;i++){
                todoArray.push(this.props.todos[i])
            }
        }

        return todoArray.map((todo) => (
            <TodoItem key={todo.id} todo={ todo } markComplete={ this.props.markComplete } delTodo={ this.props.delTodo }/>
        )) 
    }
}

export default TodosCompleted
