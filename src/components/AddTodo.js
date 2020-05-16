import React, { Component } from 'react'

export class AddTodo extends Component {
    state={
        title:'',
        priority:''
    }

    extend = () =>{
        document.querySelector(".containerAdd").style.display='flex';

    }


    minimize = () =>{
        document.querySelector(".containerAdd").style.display='none';
    }

    onSubmit = (e) =>{
        e.preventDefault();
        if(this.state.title)
            this.props.addTodo(this.state.title,this.state.priority);
        this.setState({title:''})
    }

    onChange = (e) => this.setState({title: e.target.value })
    onSelect = (e) => this.setState({priority: e.target.value })

    render() {
        return (
            <div>
                <div className="submitButtonBlue">
                        <span>+</span>
                    <input 
                    className='addSubmitBlue'
                    type='submit'
                    value='Create Task'
                    onClick={this.extend}

                    />
                </div>
                <form className="containerAdd" onSubmit={this.onSubmit}>

                    <div className="create">
                        <h1>Create a new task</h1>
                        <img href="./imageAssets/xWhite.png" alt="" className="closeX" onClick={this.minimize} /> 
                    </div>

                    <input 
                    className='addInput'
                    type='text' 
                    name='title'
                    onChange={this.onChange} 
                    value={this.state.title}
                    placeholder='Task Name'
                    
                    />

                    <p>Priority</p>

                    <div className="radio" >

                    <input 
                    type="radio"
                    name="priority"
                    value="Very High"
                    id="vHigh"
                    className="option1"
                    onChange={this.onSelect}
                    />
                    

                    <input 
                    type="radio"
                    name="priority"
                    value="High"
                    id="high"
                    className="option2"
                    onChange={this.onSelect}
                    />

                    <input 
                    type="radio"
                    name="priority"
                    value="Medium"
                    id="medium"
                    className="option3"
                    onChange={this.onSelect}
                    />
                    

                    <input 
                    type="radio"
                    name="priority"
                    value="Low"
                    id="low"
                    className="option4"
                    onChange={this.onSelect}
                    />
                    

                    </div>

                    <div className="submitButton">
                        <span>+</span>
                    <input 
                    className='addSubmit'
                    type='submit'
                    value='Create Task'

                    />
                    </div>
                    
                    
                </form>
            </div>
        )
    }
}

export default AddTodo
