import React from 'react'


const Form = ({setInputText, todos, setTodos, inputText }) => { 
    const inputTextHandeler = (e) => {
        setInputText( e.target.value);
    };
    const submitTodoHandeler = (e) =>{
     e.preventDefault();
     setTodos([ ...todos, {text:  inputText, completed:false, id:Math.random() *1000}]);
     setInputText('');
    };
      return(
       <form>
<input value={inputText}
onChange={inputTextHandeler} type = "text" className ="todo-input"  />
<button onClick={submitTodoHandeler}  className='todo-button' type='submit'>
    <i className='fas fa plus-square'>Add</i>
</button>
<div className='select'>
    <select name='todos' className='filter-todo'>
        <option value='all'>All</option> 
        <option value='completed'>Completed</option> 
        <option value='uncomplated'>UnComplated</option> 
    </select>
</div>
       </form>   
      ); 
 
}
 export default Form;