import React, { Component } from 'react'
import TodoItem from './TodoItem'

export class TodosHigh extends Component {
    render() {
        const completion=this.props.itemsToShow
        const todoArray=[]
        if(completion===0){
            for(let i=0;i<this.props.todos.length;i++){
                if(this.props.todos[i].priority==="High")
                todoArray.push(this.props.todos[i])
            }
        }else if(completion===1){
            for(let i=0;i<this.props.todos.length;i++){
                if(this.props.todos[i].completed===false && this.props.todos[i].priority==="High")
                    todoArray.push(this.props.todos[i])
            }
        }else if(completion===2){
            for(let i=0;i<this.props.todos.length;i++){
                if(this.props.todos[i].completed===true && this.props.todos[i].priority==="High" )
                    todoArray.push(this.props.todos[i])
            }
        }

        return todoArray.map((todo) => (
            <TodoItem key={todo.id} todo={ todo } markComplete={ this.props.markComplete } delTodo={ this.props.delTodo }/>
        )) 
    }
}

export default TodosHigh
