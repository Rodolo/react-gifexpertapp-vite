import { useState } from 'react';
import { AddCategory, GifGrid} from './components/'


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])


    const onAddCategory = (newCategory) => {

        if( categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])
    }

    return <>
                <h1>
                    GifExpertApp
                </h1>

               <AddCategory 
                  onNewCategory = {value => onAddCategory(value)}               
                />

                <button className='reset-button' onClick={() => {setCategories([])}}>Reset</button>
             

                {
                    categories.map( cat => {
                        return  <GifGrid  key={cat} category={cat}  />
                    })
                }

        </>
}