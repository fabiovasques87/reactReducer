import { ChangeEvent, useState } from 'react';
import {usePeopleList } from './reducers/peopleList';



const  App = () => {

const [list, dispatch] = usePeopleList();
const [nameInput, setNameInput] = useState(''); 

const handleAddButton = () => {
  if(nameInput){
    dispatch({
      type: 'ADD',
      payload: {
        name: nameInput
      }
    });
    setNameInput('');
    
  }
}

const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
  setNameInput(e.target.value);
}

const handleOrderButton = () => {
  dispatch({
    type: 'ORDER'
  });
}
  return (
    <div>

      <input type="text" value={nameInput} onChange={handleInputChange} />
      <button onClick={handleAddButton}>Adicionar</button>
      <hr />

      <button onClick={handleOrderButton}>Ordenar</button><br />
      Lista de Pessoas
      <ul>
          {list.map((item, index)=> (
            <li key={index}>
              {item.name}
              <button onClick={() => dispatch({
                type: 'DEL',
                payload: {
                  id: item.id
                }
              })}>Deletar</button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
