import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { updatewallet } from '../indexStore'

export default function Payment() {
    const data = useSelector(state =>state.user);
    const dispatch = useDispatch();
    const handleClick = ()=> {
        dispatch(updatewallet(5000))
    }
    return (
        <div>
            <h1>{data.username}, {data.balance}</h1>
            <button Click={handleClick}>Pay</button>
        </div>
    )
}