import React, {useEffect} from "react";
import {useActions} from "../../hooks/useActions";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";
import "./posts.scss";

const Posts = () => {
    const currentPage = useSelector(state => state.posts.currentPage);
    const dataPosts = useSelector(state => state.posts.postsList);
    const postsTotalCount = useSelector(state => state.posts.postsTotalCount);
    const fetching = useSelector(state => state.posts.fetching);
    const loading = useSelector(state => state.posts.loading);
    const error = useSelector(state => state.posts.error);
    const {getAllPosts, fetchingPostsTrue, fetchingPostsFalse, resetPosts} = useActions();


    useEffect(() => {
        getAllPosts(currentPage)
            .then(() => {

            });
        return () => {
            resetPosts();
        };
    }, []);

    useEffect(() => {
        if (fetching) {
            getAllPosts(currentPage)
                .finally(() => fetchingPostsFalse());
        }
    }, [fetching]);


    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);

        return () => {
            document.removeEventListener('scroll', scrollHandler);
        };
    }, [scrollHandler]);

    function scrollHandler (e) {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100 && dataPosts.length < postsTotalCount) {
            fetchingPostsTrue();
        };
    };

    if (loading) {
        return <Spinner/>;
    };

    if (error) {
        return <ErrorMessage/>;
    };

    return (
        <section className='posts'>
            <h2 className='posts__title'>Posts</h2>
            <ul className='posts__list'>
                {dataPosts.map((post, i) => {
                    return (
                        <li key={i} className='posts__item'>
                            <h3 className='posts__item-title'>Title: {post.title}</h3>
                            <Link to={`posts/${i+1}/`}>Open post</Link>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}

export default Posts;