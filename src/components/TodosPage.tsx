import {FC} from 'react';
import {ITodo} from '../types/types'
import TodoItem from './TodoItem';
import {useEffect, useState} from 'react';
import axios from 'axios';
import List from './List';


const TodosPage: FC = () => { 
    
    const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchTodos()
  },[])

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
      setTodos(response.data);
    } catch (error) {
      console.log(error);
    }
  }  

  return (
        <List items={todos} renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />} />
    
  );
}

export default TodosPage;
