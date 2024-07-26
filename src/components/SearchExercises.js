import React ,{useEffect,useState} from 'react';
import {Box,Stack,Button,TextField,Typography} from "@mui/material";
 
import { fetchData,exerciseOptions } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';



// const SearchExercises = (setExercises,bodyPart,setBodyPart) => {

//     const [search,setSearch] = useState("");
    
//     const [bodyParts, setBodyParts] = useState([]);

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => { // Change made here
    const [search, setSearch] = useState('');
    const [bodyParts, setBodyParts] = useState([]);
    
    useEffect(() => {
        const fetchExercisesData = async () => {
          const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
    
          setBodyParts(['all', ...bodyPartsData]);
        };
    
        fetchExercisesData();
      }, []);
    


    const handleSearch = async () => {
        if (search) {
          const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
    
          const searchedExercises = exercisesData.filter(
            (item) => item.name.toLowerCase().includes(search)
                   || item.target.toLowerCase().includes(search)
                   || item.equipment.toLowerCase().includes(search)
                   || item.bodyPart.toLowerCase().includes(search),
          );
    
          window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    
          setSearch('');
          setExercises(searchedExercises);
        }
      };

  
    return (
    
   <Stack alignItems="center" mt="45px" justifyContent="center" p="20px">

      <Typography fontWeight={700} sx={{fontSize:{lg:'40px', xs:"30px"}}} mb="50px" textAlign="center">
        Awesome Exercises <br/> You Should Know!
      </Typography>

      <Box position="relative" mb="72px">

      <TextField
        sx={{ input:{fontWeight:"700",border:"none",borderRadius:"3px"}, width:{lg:"900px",xs:"350px"}, backgroundColor:"#fff" , borderRadius:"40px"}}
        height="50px" 
        value={search} 
        onChange={(e)=>setSearch(e.target.value.toLowerCase())}
        placeholder='Search Exercises'
        type="text"
      />

      <Button className='search-btn' sx={{bgcolor:"#ff2625",color:"#fff", textTransform:"none", width:{lg:"170px",sx:"80px"} , fontSize:{lg:"20px",xs:"14px"},height:"61px",position:"absolute",right:"0"}} 
      onClick={handleSearch}
      >
        Search 
      </Button>

      </Box>

      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar data={bodyParts} setBodyPart={setBodyPart} bodyPart={bodyPart} isBodyParts/>
      </Box>
    

   </Stack>

  )
}

export default SearchExercises