import React from 'react';
import ButtonComponent from "../components/ButtonComponent";
import {useDispatch, useSelector} from 'react-redux';
import { addToQueue } from '../redux/ActionCreators'

function Kiosk() {
    const dispatch = useDispatch()
    
    const clerk = useSelector(state => state.clerk)
    const queue = useSelector(state=>state.queue)
    console.log(queue)

    const submit = (type) => {
        const lastIndex = queue.length-1
        const newId = queue.length===0 ? 1 : queue[lastIndex].id + 1
        dispatch(addToQueue({
            id: newId,
            type: type,
            clerk: clerk,
            startTime: new Date()
        }))
    }

    return (
        <div className="kiosk">
            <ButtonComponent type="Title" handleClick={submit}/>
            <ButtonComponent type="Renewal" handleClick={submit}/>
            <ButtonComponent type="Help" handleClick={submit}/>
        </div>
    )
}

export default Kiosk
