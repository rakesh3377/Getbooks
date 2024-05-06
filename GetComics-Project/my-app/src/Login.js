import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login(){
    const [username, setusername] = useState('');
    const [userpassword, setuserpassword] = useState('');

    const usenavigate = useNavigate()

    const Proceedlogin = (e)=>{
        e.preventDefault();
        if(validate()){
        //implementing fetch.....
        //console.log("Proceed");
        fetch("http://localhost:8000/user/"+username).then((res)=>{
            return res.json();
        }).then((resp)=>{
            //console.log(res)
            if(Object.keys(resp).length === 0){
                toast.error("Please enter valid username");
            }else{
                if(resp.password === userpassword){
                    toast.success("Sucuss")
                    usenavigate('/Home')
                }else{
                    toast.error("Please enter valid password");

                }
            }
        }).catch((err)=>{
            toast.error("Login failed due to :" + err.message);
        });

        }
        
    }
    const validate = ()=>{
        let result=true;
        if(username === null || username ===""){
            result=false;
            toast.warning('Please enter username');
        }
        if(userpassword === null || userpassword ===""){
            result=false;
            toast.warning('Please enter password');
        }
        return result;
        
        
    }

    return(
        <div className="Login-container">
            <div className="form">
                <form onSubmit={Proceedlogin}>
                    <header>Login</header>
                    <div className="inputs">
                        <div className="name-div">
                            <label htmlFor="username">User name</label>
                            <input value={username} onChange={e=>setusername(e.target.value)} type="text" id="username" />
                        </div>
                        <div className="password-div">
                            <label htmlFor="userpassword">User password</label>
                            <input value={userpassword} onChange={e=>setuserpassword(e.target.value)} type="password" id="userpassword" />
                        </div>
                        <footer>
                            <div className="btns">
                                <button type="sumbit">Login</button>
                                <Link to='/Register'>New user</Link>
                            </div>
                        </footer>
                    </div>
                </form>
            </div>
        </div>
    )
}
