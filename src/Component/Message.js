import React, {useState } from 'react'
import { FaPaperclip, FaRegPaperPlane, FaArrowLeft } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { selectedContact, addMessage, addContact } from '../Redux/ContactAction';
import MessageList from './MessageList';

const Message = () => {
    const  {messageId}  = useParams();
    console.log('messageId',messageId);
    const contacts = useSelector((state) => state.allContacts);
    const getContact = useSelector((stated) => stated.contact);
    const getAllContact = useSelector((state) => state.allContacts.contacts);
    const getAllContactMsg = useSelector((state) => state.allContacts.contacts);
    console.log('getAllContactMsg',getAllContactMsg);
    console.log('getAllContact',getAllContact);
    console.log('getContact',getContact['0']);
    const dispatch = useDispatch();

    const messages = useSelector((state) => state.allMessages.messages);
    console.log('messages',messages);

    React.useEffect(()=>{
        if(messageId && messageId !==''){
           debugger;
            let parseId = parseInt(messageId)
            let setContact = getAllContact.filter((v,k)=> v.id === parseId)
            console.log('setContact', setContact);
            dispatch(selectedContact(setContact));
            
            }
    },[messageId])
    
    const [message, setMessage] = useState('');
    //const [content, setContent] = useState([]);
   
    const onMessageChange = (e) => {
        setMessage(e.target.value);
    }

    const onSendData = (e) => {
        debugger;
        e.preventDefault();
        //setContent([...content, message]);
        dispatch(addMessage([...messages ,message]))
        //getAllContactMsg[message];
        if(messages.length > 0) {
            let parseId = parseInt(messageId)
             getAllContact.filter((v,k)=> {
                if(v.id === parseId) {
                    v.messages.push(...messages)
                }
               dispatch(addContact([v, ...contacts]));
            })
            
            }
        setMessage('');
    }

    const getMessageList = messages.map((v,k)=> (
    
    <div className="row content_section">
    <div className="col-md-12 message_text">
      <div className="image_show col-md-2">
          <div className="message_show">
          <div key={k}>{v}</div>
            </div>
        </div>
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