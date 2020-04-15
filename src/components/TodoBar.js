import React, { Component } from 'react'

export class TodoBar extends Component {
    
    /*onTouch = () =>{this.props.showAll()}
    onPress = () =>{this.props.showUncompleted()}
    onTap = () =>{this.props.showCompleted()}
    onClick = () =>{this.props.delCompleted()}*/
    
    render() {
        return (
            <div>
                <div className="containerY">
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
