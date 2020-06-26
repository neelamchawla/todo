import React from 'react';

const List = ({todos, deleteTodo}) => {
    
const todoList = todos.length ? (
    todos.map(todo => {
        return (
            <div className="list collection" key={todo.id}>
                <p className="center" onClick={() => {deleteTodo(todo.id)}} >
                    {todo.content}
                </p>
            </div>
        )
    })
) : (
    <p className="center" >No todo's left</p>
)

return (
    <div className="box2">
        <div className="list collection center" style={{cursor: "pointer"}}>
            {todoList}
        </div>
    </div>
  );
}
export default List;