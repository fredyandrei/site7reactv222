import React, { Component } from 'react'

export class TodoBar extends Component {
    
    render() {
        return (
            <div>
                <div className="containerBar">
                    <button onClick={this.props.showAll}>All</button>
                    <button onClick={this.props.showUncompleted}>Uncompleted</button>
                    <button onClick={this.props.showCompleted}>Completed</button>
                    <button onClick={this.props.delCompleted} className="del" >Delete Completed</button>
                </div>
            </div>
        )
    }
}

export default TodoBar
