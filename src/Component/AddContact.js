import React from 'react'
import { addContact } from '../Redux/ContactAction';
import { useDispatch, useSelector } from 'react-redux';
import {FaArrowLeft, FaUserPlus, FaPhoneAlt, FaAt } from 'react-icons/fa'
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import ContactList from './ContactList';
import TextError from './TextError';

const AddContact = () => {
    const contacts = useSelector((state) => state)
    const dispatch = useDispatch();

let initialValues = {
    firstname:'',
    lastname:'',
    //phonenumber:'',
    email:'',
    getMessageDetails: [],
    phNumbers : ['']

}

let onSubmit = (values, onSubmitProps) => {
let getId = contacts.allContacts.contacts.length + 1
dispatch(addContact([{id:getId,...values},...contacts.allContacts.contacts]))
onSubmitProps.resetForm();
console.log('values', values);
}

let validationSchema = yup.object({
    firstname: yup.string().required('Required'),
    lastname: yup.string().required('Required'),
    phNumbers: yup.number().required('Required'),
    email: yup.string().email().required('Required')
  });
    // const formik = useFormik({
    //     initialValues,
    //     onSubmit,
    //     validationSchema
    // })
    return (
        <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        >
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
            <Form>
                <div className="row mt_34">
                <div className="col-md-6 row">
                    <div className="col-md-1 icon_size">
                    <FaUserPlus />
                    </div>
                    <div className="col-md-10">
                    <Field type="text" className="form-control input_box" id="firstname" placeholder="First Name" name="firstname" />
                    <ErrorMessage name="firstname" component={TextError}/>
                                       </div>
                </div>
                <div className="col">
                    <Field type="text" className="form-control input_box" id="lastname" placeholder="Last Name" name="lastname" />
                    <ErrorMessage name="lastname" component={TextError}/>
                </div>
                </div>
                {/* <div className="row mt_34">
                <div className="col-md-6 row">
                    <div className="col-md-1 icon_size">
                    <FaPhoneAlt />
                    </div>
                    <div className="col-md-10">
                    <Field type="text" className="form-control input_box" id="phonenumber" placeholder="Phone Number" name="phonenumber" />
                    <ErrorMessage name="phonenumber" component={TextError}/>
                </div>
                </div>
                
                </div> */}
                <div className="row mt_34">
                    {/* <div className="listedPhone">List of Phone Numbers</div> */}
                <div className="col-md-8 row">
                <div className="col-md-1 icon_size">
                    <FaPhoneAlt />
                    </div>
                    <div className="col-md-10">
                    <FieldArray name='phNumbers'>
                        {
                            fieldArrayProps => {
                                console.log('fieldArrayProps', fieldArrayProps);
                                const {push, remove, form } = fieldArrayProps;
                                const {values} = form;
                                const {phNumbers} = values
                                return (
                                <>
                                    {phNumbers.map((phNumber, index)=>(
                                    <div key={index} className="row">
                                        <div className="col-md-8">
                                    <Field name={`phNumbers[${index}]`} className="form-control input_box mb-3"/>
                                    </div>
                                    <div className="col-md-4">
                                    {index > 0 && (
                                        <button type="button" className="btn btn-danger" onClick={()=> remove(index)}>
                                            {' '} Delete {' '}
                                        </button>
                                    )} {'  '}
                                    {index === 0 && (<button type="button" className="btn btn-primary" onClick={()=> push('')}>
                                        {' '} Add {' '}
                                    </button>)}
                                    
                                    </div>
                                        </div>
                                        ))}
                                </>
                                )
                            }
                        }
                    </FieldArray>
                    </div>
                </div>
                {/* <div className="col">
                    <button className="btn btn-secondary btn_radius"><span className="pr-2"><FaPlus/></span>Add Number</button>
                </div> */}
                </div>
                <div className="row mt_34">
                <div className="col-md-8 row">
                    <div className="col-md-1 icon_size">
                    <FaAt />
                    </div>
                    <div className="col-md-10">
                    <Field type="text" className="form-control input_box" id="email" placeholder="E-mail" name="email" />
                    <ErrorMessage name="email" component={TextError}/>
                    </div>
                </div>
                </div>
                <div className="row btn_row">
                <div className="col">
                   <button type="submit" className="btn btn-secondary btn_save">Save</button>
                   <button className="btn btn-secondary btn_discard">Discard</button>
                </div>
                </div>
            </Form>
            </div>
        </div>
        </div>
        </Formik>
    )
}

export default AddContact