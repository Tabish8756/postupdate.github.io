import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import { singlePost, updatePost } from "../redux/action";
import './EditUser.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';



function EditUser() {
    const [value, setValue] = React.useState('Controlled');
    const handleChange = (event) => {
        setValue(event.target.value);
      };
    let navigate = useNavigate();
    let { id } = useParams();
    let dispatch = useDispatch();
    let { user } = useSelector(state => state.data);

    const [data, setData] = useState({
        title: "",
        body: ""
    })

    const { title, body } = data;
    useEffect(() => {
        dispatch(singlePost(id))
    }, [])

    useEffect(() => {
        setData({ ...user })
    }, [user])

    function handleInput(e) {
        let { name, value } = e.target;
        setData({ ...data, [name]: value })
    }

    function handleUpdate(e) {
        e.preventDefault();
        dispatch(updatePost(data, id))
        navigate("/")
    }

    return (
        <Box
        component="form"
        // sx={{
        //   '& .MuiTextField-root': { m: 1, width: '25ch' },
        // }}
        noValidate
        autoComplete="off">

        <div className="editPost">
            <p>Title</p>
            <TextField style={{"margin":0}}
          id="outlined-textarea"
          placeholder="Placeholder"
          multiline
          value={title}
          onChange={handleInput}
          name="title"
        />
        <p>Post</p>
          <TextField
          id="outlined-textarea"
          placeholder="Placeholder"
          multiline
          value={body}
          onChange={handleInput}
          name="body"
        />
            {/* <input type="text" placeholder="Enter the Title" value={title} name="title" onChange={handleInput} /><br /> */}
            {/* <input type="text" placeholder="Enter the Body" value={body} name="body" onChange={handleInput} /><br /> */}
            <div className="button">
            <button onClick={handleUpdate}>Update</button>
            <button onClick={() => navigate("/")}>Cancel</button>
        </div>
        </div>
        </Box>
    )
}
export default EditUser;