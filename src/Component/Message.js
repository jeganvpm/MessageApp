import React, {useState } from 'react'
import { FaPaperclip, FaRegPaperPlane, FaArrowLeft } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { selectedContact, addContact } from '../Redux/ContactAction';
import MessageList from './MessageList';

const Message = () => {
    const  {messageId}  = useParams();
    const getContact = useSelector((state) => state.contact);
    const getAllContact = useSelector((state) => state.allContacts.contacts);
    const getAllContactMsg = useSelector((state) => state.allContacts.contacts);
    const dispatch = useDispatch();

    React.useEffect(()=>{
        if(messageId && messageId !==''){
            let parseId = parseInt(messageId)
            
            let setContact = getAllContact.filter((v,k)=> v.id === parseId)
            dispatch(selectedContact([...setContact]));
            
            }
    },[messageId])
    
    const [message, setMessage] = useState('');
    let currTime = new Date().toLocaleTimeString();
    const [time, setTime] = useState('');

    const onMessageChange = (e) => {
        setMessage(e.target.value);
        setTime(currTime);
    }

    const onSendData = (e) => {
        e.preventDefault();
        let parseId = parseInt(messageId);
        let listedContact = [...getAllContact]
        let insertMsg = listedContact.map((v,k)=>{
            if(v.id=== parseId && message){
                v.getMessageDetails.push({message:message, time:time});
            }
            return listedContact;
        })
        dispatch(addContact([...listedContact]));

        setMessage('');
    }

    const getMessageList = getContact['0'] && getContact['0'].getMessageDetails && getContact['0'].getMessageDetails.map((v,k)=> (
    
    <div className="row content_section">
        <div className="col-md-2 messager_image">
        <img src="../small_user.jpg" alt="messager" className="messager_user" />
        </div>
    <div className="col-md-9 message_text">
      <div className="image_show">
          <div className="message_show">
          <div className="message_text" key={k}>{v.message}</div>
            </div>
        </div>
        <div className="time_text">{v.time}</div>
        </div>
    </div>
    ))
    return (
        <>
        <div className="row">
        <MessageList />
        <div className="display_message col-md-8">
        <div className="row new_contact">
             <div className="col-md-1 arrow_left"><Link to="/"><FaArrowLeft /></Link></div>
             <div className="col-md-10 messager_name">{getContact['0'] && getContact['0'].firstname}</div> 
             
            </div>
            <div className="m_height">
        {getMessageList}
        </div>
        
        <form>
            <div className="row">
        <div className="col-md-12">
            <div className="input-group">
                <span className="input-group-prepend">
                    <div className="input-group-text border-right-0 left_message_icon"><FaPaperclip/></div>
                </span>
                <input className="form-control py-2 border-left-0 border" type="search" value={message} name="message" className="form-control message_input" onChange={onMessageChange} />
                <span className="input-group-append">
                <button className="btn btn-outline-secondary border-left-0 border right_message_icon" type="button" onClick={onSendData}>
                <FaRegPaperPlane/>
                </button>
              </span>
            </div>
        </div>
        </div>
        </form>
        </div>
        </div>
        </>
    )
}

export default Message