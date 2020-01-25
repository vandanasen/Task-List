import React from 'react';
import ToDoItem from './ToDoItem';
import ToDoData from './ToDoData';
class App extends React.Component{
    state={todos:ToDoData};
    handleChange=this.handleChange.bind(this);
    handleChange(id){
        this.setState(prevState => {
            const  updatedtodos = prevState.todos.map(todo=>{
                if(todo.id===id){
                    todo.completed = !todo.completed
                }
                return todo
                })
                return{
                    todos:updatedtodos
                }
                
            
        })
        
    }
    render() {
    const todoitemslist=this.state.todos.map(item=><ToDoItem key={item.id} item={item} handleChange={this.handleChange}/>)
    return( 
        <div className="ui centered aligned container " >
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="ui compact teal inverted stacked segment ">
                <h1>My ToDo List</h1>
                <br></br>
                <div >{todoitemslist}</div>
            </div>
        </div>
    )
    }
}

export default App;