import React from 'react';
class ToDoItem extends React.Component{
    
    render(){
        return(  
         
        <div className="todo-item">
            <div className="ui checked checkbox">
                 {/*<input type="checkbox"/>*/}
                 <input 
                    type="checkbox" 
                    checked={this.props.item.completed}
                    onChange={()=>this.props.handleChange(this.props.item.id)}
                 />
                 {/*<label>{ToDoData.text}Name of the To Do List Item</label>*/}
                 {/*<label style={props.item.completed?completedStyle:null}>{this.props.item.text}</label>*/}
                 <label > {this.props.item.text}</label>
                 <br></br>
                 <br></br>
            </div>
        </div>
     );
    };
}
export default ToDoItem;