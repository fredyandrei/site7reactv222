import React, { Component } from 'react'

export class AddTodo extends Component {
    state={
        title:''
    }

    onSubmit = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title:''})
    }

    onChange = (e) => this.setState({title: e.target.value })

    render() {
        return (
            <div>
                <form className="containerX" onSubmit={this.onSubmit}>

                    <input 
                    className='addInput'
                    type='text' 
                    name='title'
                    onChange={this.onChange} 
                    value={this.state.title}
                    placeholder='Ce ai de facut ?'
                    
                    />

                    <input 
                    className='addSubmit'
                    type='submit'
                    value='Submit'

                    />
                    
                </form>
            </div>
        )
    }
}

export default AddTodo
