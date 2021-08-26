import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {useActions} from "../../hooks/useActions";
import {useHistory, useParams} from "react-router";
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";

const User = () => {
    const {id} = useParams();
    const history = useHistory();
    const dataUser = useSelector(state => state.user.user);
    const loading = useSelector(state => state.user.loading);
    const error = useSelector(state => state.user.error);
    const {resetUser, getUser} = useActions();

    useEffect(() => {
        getUser(id);

        return () => {
            resetUser();
        }
    }, []);

    if (loading) {
        return <Spinner/>;
    };

    if (error) {
        return <ErrorMessage/>;
    };

    return (
        <section className='user'>
            <h2>User Info</h2>
            <p className='user__name'>Name: {dataUser.name}</p>
            <p className='user__username'>Username: {dataUser.username}</p>
            <p className='user__email'>Email: <a href={`mailto:${dataUser.email}`}>{dataUser.email}</a></p>
            <p className='user__website'>Website: <a href={`https://${dataUser.website}`}>{dataUser.website}</a></p>
            <div className='user__company'>
                <p className='user__company-title'>Company:</p>
                <ul className='user__company-list'>
                    <li className='user__company-item'>Name: {dataUser.company.name}</li>
                    <li className='user__company-item'>Catch Phrase: {dataUser.company.catchPhrase}</li>
                    <li className='user__company-item'>Bs: {dataUser.company.bs}</li>
                </ul>
            </div>
            <div className='user__address'>
                <p className='user__address-title'>Address:</p>
                <ul className='user__address-list'>
                    <li className='user__address-item'>City: {dataUser.address.city}</li>
                    <li className='user__address-item'>Street: {dataUser.address.street}</li>
                    <li className='user__address-item'>Suite: {dataUser.address.suite}</li>
                    <li className='user__address-item'>Zipcode: {dataUser.address.zipcode}</li>
                    <li className='user__address-item'>
                        Geo: lat: {dataUser.address.geo.lat}; lng: {dataUser.address.geo.lng}
                    </li>
                </ul>
            </div>
            <button onClick={history.goBack} type='button'>Go back</button>
        </section>
    );
};

export default User;