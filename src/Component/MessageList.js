import React from 'react'
import { useSelector } from 'react-redux';
import { FaSearch, FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const MessageList = () => {
    const contacts = useSelector((state) => state.allContacts);
    //console.log('cc',contacts);

    let getListed = contacts.contacts.map((v,k)=>{
        return (
            <div className="" key={v.id}>
            <Link to={`/message/${v.id}`}>
             <div className="contact_detail col-md-12 row">
                 <div className="col-md-3 image_icon">
                    Image
                 </div>
                <div className="col-md-9">
                    <div className="">{v.firstname}</div>
                    <div className="">Lores serewer Lores serewer Lores serewer Lores serewer</div>
                </div>
             </div>
             </Link>
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
             All Messages
         </div>
         <>
         {getListed}
         </>
        </div>
        
        </>
    )
}

export default MessageList

