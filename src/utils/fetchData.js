
export const exerciseOptions ={
   
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '8fcc2f99f2msh620c0686a78c4bcp168937jsnfb1da7c371d8',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }

};

export const youtubeOptions = {
  method: 'GET',
 
  headers: {
    'X-RapidAPI-Key': '8fcc2f99f2msh620c0686a78c4bcp168937jsnfb1da7c371d8',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async(url,options)=> {

    const response = await fetch(url,options);
    const data = await response.json();

    return data;

}