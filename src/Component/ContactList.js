import React from 'react'
import { useSelector } from 'react-redux';
import { FaPhoneAlt, FaEnvelope, FaSearch, FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const ContactList = () => {
    const contacts = useSelector((state) => state.allContacts);

    let getListed = contacts.contacts.map((v,k)=>{
        return (

             <div className="contact_detail col-md-12 row" key={v.id}>
                 <div className="col-md-3 image_icon">
                 <img src="user-icon.jpg" alt="user" className="image_user" />
                 </div>
                <div className="col-md-5">
                    <div className="name">{v.firstname} {v.lastname}</div>
                    <div className="">{v.phonenumber}</div>
                    <div className="">{v.email}</div>
                </div>
                <div className="col-md-2 msg_icon">
                <FaPhoneAlt />
                 </div>
                 <div className="col-md-2 call_icon">
                 <Link to={`/message/${v.id}`}><FaEnvelope /></Link>
                 </div>
             </div>
        )
    })
    
    return (
        <>
        <div className="col-md-4 search_row">
         <div className="row search_module">
             <div className="col">
             <div className="row">
        <div className="col-md-12">
            <div className="input-group">
                <span className="input-group-prepend">
                    <div className="input-group-text border-right-0 left_search_icon"><FaSearch/></div>
                </span>
                <input className="form-control py-2 border-left-0 border" type="search" name="message" placeholder="Search People"/>
                <span className="input-group-append">
                <Link to="/">
                <button className="btn btn-outline-secondary border-left-0 border right_add_icon" type="button">
                <FaPlus/>
                </button>
                </Link>
              </span>
            </div>
        </div>
        </div>
                 {/* <input type="text" className="form-control input_search" name="search" id="search" placeholder="Search People"/> */}
             </div>
         </div>
         <div className="contact">
             Contacts
         </div>
         <div className="">
         {getListed}
         </div>
        </div>
        
        </>
    )
}

export default ContactList