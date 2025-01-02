import React, { MouseEventHandler } from 'react';

const Todo = () => {
    const [todo, setTodo] = React.useState<string>('');
    const [todolist, setTodolist] = React.useState<string[]>([]);

    const onChange = (e: any) => {
        setTodo(e.target.value);
    };

    const addTodo = () => {
        setTodolist([...todolist, todo]);
        setTodo('');
    }

    const onClick = () => {
        addTodo();
    }

    const onKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addTodo();
        }
    }

    const onRemoveTodoClick = (todo: string) => {
        setTodolist(todolist.filter((item) => item !== todo));
    }

    return (
        <div className="h-[100vh] flex flex-col justify-center items-center">
            <div className="flex">
                <input type="text" className="border-4" value={todo} onKeyDown={(e) => onKeyDown(e)}
                    onChange={(e) => onChange(e)} />
                <button onClick={onClick} className="pl-4">ADD</button>
            </div>
            <div>
                <div className="flex flex-col mt-10">
                    {
                        todolist.map((item, index) => (
                            <div className="flex m-2 gap-x-8" key={index} >
                                <h1>{item}</h1>
                                <button onClick={() => onRemoveTodoClick(item)}>Remove</button>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    );
};

export default Todo;
