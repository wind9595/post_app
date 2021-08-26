import React from "react";
import {Link, useHistory, useParams} from "react-router-dom";
import {useActions} from "../../hooks/useActions";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";
import "./post.scss";

const Post = () => {
    const {id} = useParams();
    const history = useHistory();
    const dataPost = useSelector(state => state.post.post);
    const dataComments = useSelector(state => state.post.comments);
    const dataUser = useSelector(state => state.post.user);
    const loading = useSelector(state => state.post.loading);
    const error = useSelector(state => state.post.error);
    const {resetPost, getPost} = useActions();

    useEffect(() => {
        getPost(id);

        return () => {
            resetPost();
        }
    }, []);

    if (loading) {
        return <Spinner/>;
    };

    if (error) {
        return <ErrorMessage/>;
    };


    return (
        <section className='post'>
            <h2 className='post__title'>Title: {dataPost.title}</h2>
            <p className='post__body'>Body: {dataPost.body}</p>
            <p className='post__author'>
                <span>Author: </span>
                <Link to={`/users/${dataUser.id}/`}>{dataUser.name}</Link>
            </p>
            <div className='post__comments'>
                <h3 className='post__comments-title'>Comments</h3>
                <ul className='post__comments-list'>
                    {dataComments.map((comment, i) => {
                        return (
                            <li key={i} className='post__comments-item'>
                                <p className='post__comments-item-name'>Comment name: {comment.name}</p>
                                <p className='post__comments-item-email'>Email: <a href={`mailto:${comment.email}`}>{comment.email}</a></p>
                                <p className='post__comments-item-body'>Comment body: {comment.body}</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <button type='button' onClick={history.goBack}>Go back</button>
        </section>
    );
};

export default Post;