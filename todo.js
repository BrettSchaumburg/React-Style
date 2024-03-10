/*function Todo({todo,index,remove}){
  function handle(){
    console.log('Ping:',index);
    remove(index);
  }
  return <div className="todo" onClick={handle}>{todo.text} (...Click to Delete)</div>
}
*/

function Todo({ todo, index, remove }) {
  return (
    <div className="todo">
      <span>{todo.text}</span>
      <button onClick={() => remove(index)}>Remove</button>
    </div>
  );
}