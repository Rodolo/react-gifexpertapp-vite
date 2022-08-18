import { useState } from "react";


export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState('');

  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if(inputValue.trim().length <= 1) return;
    setInputValue('');
    onNewCategory(inputValue);
  }


  return (
    <form onSubmit={onSubmit}>
        <input onChange={handleChangeInput} type="text" placeholder='Escribe la categoria a buscar' value={inputValue}/>
    </form>
  )
}
