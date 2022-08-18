import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";



export const GifGrid = ({category}) => {


  const { images , isLoading } = useFetchGifs(category);

  return <>
            <h2>{category}</h2>
            <div className="card-grid">
              

                {
                  isLoading && (<h1>'Cargando...'</h1>)
                }

                {   
                    images.map(gif => {
                        return <GifItem key={gif.id} {...gif}></GifItem>
                      
                    })

                }
            </div>
  
         </>



  
}
