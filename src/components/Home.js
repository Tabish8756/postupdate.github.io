import { connect, useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { loadPost, deletePost } from "../redux/action";
import {useNavigate} from 'react-router-dom';
import './EditUser.css'
import './CustomPagination';
import CustomPagination from "./CustomPagination";
import { compose } from "redux";
const Home = () => {
    const[page, setPage]=useState();
    let dispatch = useDispatch();
    let navigate=useNavigate();
    const { users } = useSelector(state => state.data)
console.log("page", page)

    useEffect(() => {
        dispatch(loadPost());
    }, [])

    const handleDelete = (id) => {
        if(window.confirm("Are you sure want to delete the post")){
        dispatch(deletePost(id))
        console.log("delete" , id);
    }
}
    return (
    
        <div>
            {users && users.map((data) => {
                return <div className="card">
                    <div className="title">
                        <h2>{data.title}</h2>
                    </div>
                    <div className="body">
                        <p>{data.body}</p>
                        <button onClick={()=>navigate(`/EditUser/${data.id}`)}>Edit</button>
                        <button onClick={() => handleDelete(data.id)}>Delete</button>
                    </div>

                </div>
            })}
            <div className="page">
        <CustomPagination setPage={setPage} />
        </div>
        </div>

    )
}

export default Home;