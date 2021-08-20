import React from 'react'
import { addContact } from '../Redux/ContactAction';
import { useDispatch, useSelector } from 'react-redux';
import {FaArrowLeft, FaPlus, FaUserPlus, FaPhoneAlt, FaAt } from 'react-icons/fa'
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import ContactList from './ContactList';

const AddContact = () => {
    const contacts = useSelector((state) => state)
    const dispatch = useDispatch();

let initialValues = {
    firstname:'',
    lastname:'',
    phonenumber:'',
    email:'',
    getMessageDetails: []

}

let onSubmit = (values, onSubmitProps) => {
let getId = contacts.allContacts.contacts.length + 1
dispatch(addContact([{id:getId,...values},...contacts.allContacts.contacts]))
onSubmitProps.resetForm();
}

let validationSchema = yup.object({
    firstname: yup.string().required('Required'),
    lastname: yup.string().required('Required'),
    phonenumber: yup.number().required('Required'),
    email: yup.string().email().required('Required')
  });
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })
    return (
        <div className="row">
        <ContactList />
        <div className="col-md-8">
            <div className="row new_contact">
             <div className="col-md-1 arrow_left"><Link to="/"><FaArrowLeft /></Link></div>
             <div className="col-md-10">New Contact</div>
            </div>
            <div className="row upload_center">
             <div className="upload_picture"></div>
             <div className="profile">Profile</div>
            </div>
            <div className="row">
            <form onSubmit={formik.handleSubmit}>
                <div className="row mt_34">
                <div className="col-md-6 row">
                    <div className="col-md-1 icon_size">
                    <FaUserPlus />
                    </div>
                    <div className="col-md-10">
                    <input type="text" className="form-control input_box" id="firstname" placeholder="First Name" name="firstname" 
                    {...formik.getFieldProps('firstname')}/>
                    {formik.touched.firstname && formik.errors.firstname ? (<div className="error">{formik.errors.firstname}</div>): null}
                    </div>
                </div>
                <div className="col">
                    <input type="text" className="form-control input_box" id="lastname" placeholder="Last Name" name="lastname"
                    {...formik.getFieldProps('lastname')} />
                    {formik.touched.lastname &&  formik.errors.lastname ? (<div className="error">{formik.errors.lastname}</div>): null}
                </div>
                </div>
                <div className="row mt_34">
                <div className="col-md-6 row">
                    <div className="col-md-1 icon_size">
                    <FaPhoneAlt />
                    </div>
                    <div className="col-md-10">
                    <input type="text" className="form-control input_box" id="phonenumber" placeholder="Phone Number" name="phonenumber"
                    {...formik.getFieldProps('phonenumber')} />
                    {formik.touched.phonenumber && formik.errors.phonenumber ? (<div className="error">{formik.errors.phonenumber}</div>): null}
                </div>
                </div>
                <div className="col">
                    <button className="btn btn-secondary btn_radius"><span className="pr-2"><FaPlus/></span>Add Number</button>
                </div>
                </div>
                <div className="row mt_34">
                <div className="col-md-8 row">
                    <div className="col-md-1 icon_size">
                    <FaAt />
                    </div>
                    <div className="col-md-10">
                    <input type="text" className="form-control input_box" id="email" placeholder="E-mail" name="email" 
                    {...formik.getFieldProps('email')} />
                    {formik.touched.email && formik.errors.email ? (<div className="error">{formik.errors.email}</div>): null}
                    </div>
                </div>
                </div>
                <div className="row btn_row">
                <div className="col">
                   <button type="submit" className="btn btn-secondary btn_save">Save</button>
                   <button className="btn btn-secondary btn_discard" onClick={e => formik.resetForm()}>Discard</button>
                </div>
                </div>
            </form>
            </div>
        </div>
        </div>
    )
}

export default AddContact