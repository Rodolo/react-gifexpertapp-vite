export const getGifs = async(category) => {

    const urlBase = 
    'https://api.giphy.com/v1/gifs/search?' ;
    
    const apiKey = 'p6iYjYMPvnzcOhsq5Ss8EjpKcY4TANCT';
  
    const url = urlBase + 'api_key=' + apiKey + '&q=' + category + '&limit=10&rating=g';
    const resp = await fetch(url);
    const { data } = await resp.json();
  
    const imgs = data.map(e => ({
      id: e.id,
      title: e.title,
      source: e.images.downsized_medium.url
    }));
  
  
    console.log(imgs);

    return imgs;
   
  }
  