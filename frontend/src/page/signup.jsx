import React, {useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"


const Signup = () => {
    const navigate = useNavigate();
    let [uname, setuname] = useState("");
    let [email, setemail] = useState("");
    let [password, setpassword] = useState("");
    let [error, seterror] = useState("");

    const user = {
        username : uname,
        email : email,
        password : password

    }

    async function onenter (e){
        e.preventDefault();

        try{
            const response = await axios.post("http://localhost:3000/signup",user);
            
            navigate("/home");
        }
        catch(error){
            
            console.log(error.response)
            if(error.response.status==400){
                seterror(error.response.data.message);
            }
        }
    }
    
    return (
        <form onSubmit={(e)=>{onenter(e)}}>
            <div className="flex min-h-screen flex-col items-center justify-center gap-5 p-5">
                <h1 className="text-2xl font-bold">Signup</h1>

                <div className="flex w-72 flex-col gap-2">
                    <label className="label">Username</label>
                    <br/>
                    <input
                        type="text"
                        className="input w-full"
                        placeholder="Username"
                        onChange={(e) => setuname(e.target.value)}
                        />
                </div>

                <div className="flex w-72 flex-col gap-2">
                    <label className="label">Email</label>
                    <br/>
                    <input
                        type="email"
                        className="input w-full"
                        placeholder="Email"
                        onChange={(e) => setemail(e.target.value)}
                        />
                </div>

                <div className="flex w-72 flex-col gap-2">
                    <label className="label">Password</label>
                    <br/>
                    <input
                        type="password"
                        className="input w-full"
                        placeholder="Password"
                        onChange={(e) => setpassword(e.target.value)}
                    />
                </div>

                {error && (
                    <p className="w-72 text-sm text-red-500">{error}</p>
                )}

                <button type="submit" className="btn btn-neutral w-72">
                    Signup
                </button>
            </div>
        </form>
    )
}

export default Signup
