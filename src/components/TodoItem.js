import React, { Component } from 'react'

export class TodoItem extends Component {
    getStyle = () =>{
        return {
            padding: '10px',
            textDecoration: this.props.todo.status ?
            'line-through' : 'none'
        }
    }

    render() {
        const {cod, title } = this.props.todo;
        return (
            <div className='container'>
                <p className='todoElement'>
                    <div style={this.getStyle() } >
                        <input type='checkbox' onChange={this.props.markComplete.bind(this, cod)} />
                        {title}
                        </div>
                        <span className='redX' onClick={this.props.delTodo.bind(this, cod)}  >X</span> 
                </p>
            </div>
        )
    }
}




export default TodoItem
