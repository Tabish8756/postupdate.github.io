import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {useDispatch} from 'react-redux'
import { loadPost } from '../redux/action';
import './EditUser.css'
import { style } from '@mui/system';
import axios from 'axios';
function CustomPagination(){
    const [page, setPage] = React.useState();
    let dispatch=useDispatch();
    const handleChange = (event, value) => {
      // dispatch(loadPost(value))
      axios.get(`http://localhost:5000/users/?_page${value}&_limit=10`)
      .then((page)=>{
        dispatch(loadPost(page))
      })
      window.scroll(0,0);

    };
    
    
  
    return (
      <Stack spacing={2}>
        <div className='pagination'>
        <Pagination count={10} page={page} onChange={handleChange} />
        </div>
      </Stack>
    );
  }
export default CustomPagination;