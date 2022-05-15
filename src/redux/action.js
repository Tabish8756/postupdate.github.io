import * as types from "./actionType";
import axios from 'axios';

const getPost = (users) => ({
    type: types.GET_POST,
    payload: users
})
const removePost = () => ({
    type: types.DELETE_POST
})
const singleUser = (user) => ({
    type: types.GET_SINGLE_USER,
    payload:user,
})
const updateUser = (user) => ({
    type: types.UPDATE_USER,
    payload:user,
})
// http://localhost:5000/users?_page=1&_limit=10
export const loadPost = (number) => {
    return function (dispatch) {
        axios.get(`http://localhost:5000/users/?_page${number}&_limit=10`)
            .then((resp) => {
                console.log(resp)
                console.log("pagenumber", number)
                dispatch(getPost(resp.data))
            })
    }
}
export const deletePost = (id) => {
    return function (dispatch) {
        axios.delete(`http://localhost:5000/users/${id}`)
            .then((resp) => {
                console.log(resp)
                dispatch(removePost())
                dispatch(loadPost())
            })
    }
}
export const singlePost = (id) => {
    return function (dispatch) {
        axios.get(`http://localhost:5000/users/${id}`)
            .then((resp) => {
                dispatch(singleUser(resp.data))
                dispatch(loadPost())
            })
    }
}
export const updatePost = (user, id) => {
    return function (dispatch) {
        axios.put(`http://localhost:5000/users/${id}`, user)
            .then((resp) => {
                console.log("update", resp)
                dispatch(updateUser())
                dispatch(loadPost())
            })
    }
}