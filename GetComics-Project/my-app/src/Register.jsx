import React, { useState } from "react";
import '../src/Project/Components/styles/register.css';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Register(){
    const[id, idchange] = useState('');
    const[email, emailchange] = useState('');
    const[phone, phonechange] = useState('');
    const[password, passwordchange] = useState('');

    const navigate = useNavigate();

    const isvalidate = ()=>{
        let isproceed = true;
        let errormessage='Please enter the ';
        if(id === null || id ===""){
            isproceed=false;
            errormessage +="Username, ";
        }
        if(email === null || email ===""){
            isproceed=false;
            errormessage +="Email, ";
        }
        if(phone === null || phone ===""){
            isproceed=false;
            errormessage +="Phone number, ";
        }
        if(password === null || password ===""){
            isproceed=false;
            errormessage +="Password";
        }
        if(!isproceed){
            toast.warning(errormessage)
        }
        else{
            if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){

            }
            else{
                isproceed=false;
                toast.warning('Please enter the valid email')
            }
        }
        return isproceed;
        
    }

    const handlesumbit=(e)=>{
        e.preventDefault();
        let regobj={id, email, phone, password};
        console.log(regobj);
        if(isvalidate()){
        //applying fetch//
        fetch("http://localhost:8000/user",{
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(regobj)
        }).then((res)=>{
            toast.success('Registered succussfully.')
            navigate('/Login');
        }).catch((err)=>{
            toast.error('Failed :'+err.message);
        });
    }
    }
    return(
        <div className="register-container">
            <form onSubmit={handlesumbit}>
                <header><h1>Register</h1></header>
                <div className="content">
                     <div className="inputs">
                        <label htmlFor="name">Name</label>
                        <input value={id} onChange={e=>idchange(e.target.value)} id="name" type="text" />
                    </div>
                    <div className="inputs">
                        <label htmlFor="email">Email Id</label>
                        <input value={email} onChange={e=>emailchange(e.target.value)} id="email" type="text" />
                    </div>
                    <div className="inputs">
                        <label htmlFor="phone">Phone no</label>
                        <input value={phone} onChange={e=>phonechange(e.target.value)} id="phone" type="text" />
                    </div>
                    <div className="inputs">
                        <label htmlFor="password">Create password</label>
                        <input value={password} onChange={e=>passwordchange(e.target.value)} id="password" type="password" />
                    </div>
                </div>
                <footer>
                    <button>Register</button>
                </footer>
            </form>
        </div>
    )
}

export default Register;