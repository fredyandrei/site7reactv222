import React, { Component } from 'react'

export class TodoItem extends Component {

    checkCompleted = () =>{
            return {
                backgroundColor: this.props.todo.completed ?
                '#1AFF00' : '#ffffff',
                border:this.props.todo.completed ?
                'none' : '2px solid #D7DBE6'
            }
    }

    getLine = () =>{
        if(this.props.todo.completed){
            return {
                backgroundColor: '#1AFF00' , 
                boxShadow: '0px 0px 10px 2.5px #1AFF0050',
                height:this.scrollheight,
            }
        }else{
            return {
                backgroundColor: '#FF006F' ,
                boxShadow: '0px 0px 10px 2.5px #FF006F50',
                height:this.scrollheight,
            }
        }
    }

    getStyle = () =>{
        return {
            padding: '10px',
            textDecoration: this.props.todo.completed ?
            'line-through' : 'none'
        }
    }

    render() {
        const {id, title, priority } = this.props.todo;
        return (
            <div className='container'>
                <div className='todoElement'>
                    <input className="done"  style={this.checkCompleted()} type='checkbox' onChange={this.props.markComplete.bind(this, id)}  />
                    <div className="height">
                        <div className="line" style={this.getLine()}></div>
                        <div className="text">
                            <p className="todoTitle" style={this.getStyle() } >{title}</p>
                            <p className="prio" >{priority}</p>
                        </div>
                    </div>
                    <span className='deleteX' onClick={this.props.delTodo.bind(this, id)}  >X</span> 
                </div>
            </div>
        )
    }
}




export default TodoItem
