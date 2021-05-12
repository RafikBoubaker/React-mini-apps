

import './App.css';
import { render } from '@testing-library/react';
import React, { Component } from 'react';



class App extends Component {
  state = {
    todos : [
    {text:'learn angular'},
    {text:'learn vueJS'},
    {text:'learn react'},
    {text:'learn csharp'}
      ],

      newtask:""
    
    };



completeTask= (index)=>{
const todos = [...this.state.todos]
todos.splice(index,1);
this.setState({todos});
  }

  addTask= ()=>{
    const todos = [...this.state.todos];
    if(this.state.newtask !==''){
    todos.push({
      text: this.state.newtask
    });

    this.setState({
      todos,
      newtask: ''
    });
  }
  else {alert('please fill the task');}
      }


      updateNewTask = (event)=>{
        this.setState({
          newtask: event.target.value
        });
      }
    
render() {
  
  return (
    <div className="App">
      {this.state.todos.map((todo,index)=> <li key={index}>
        {todo.text} <button onClick={()=>{this.completeTask(index)}}> done</button>
        </li>)}

        <input  value={this.state.newtask} 
          onChange={this.updateNewTask} />
        <button onClick={()=>{this.addTask()}}>add task</button>
    </div>

    
      );

      
  }
 
}
export default App;
