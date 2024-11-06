import React, { useState } from "react";
import { RadioButton } from 'primereact/radiobutton';
import { Button } from 'primereact/button';
import { click } from "@testing-library/user-event/dist/click";
import { Toast } from 'primereact/toast';
import { useRef } from "react";

        
  interface loginDetails {
    onLogin: (email: string, password: string) => Promise<void>;
  onSignup: (email: string, password: string) => Promise<void>;
  }

const Login: React.FC<loginDetails> = ({onLogin,onSignup})=>{
    const [email, setEmail] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');
    var [login,setLogin] = useState(true);
    const toast = useRef<Toast>(null);
    // const loginCheck = ()=>{
    //     if (!email) {
    //         toast.current?.show({ 
    //             severity: 'error', 
    //             summary: 'Validation Error', 
    //             detail: 'Input cannot be empty!' 
    //         });
    //     }
    //      console.log("hiii");
        
    // }
    const createAcct = ()=>{
        // setLogin(false).
        setLogin(prevState => !prevState);
        
    }
    const handleEmailChange = (event: any) => {
        setEmail(event.target.value); // Update the state with the input value
    };
    const handlePasswordChange = (event: any) => {
        setPasswordLogin(event.target.value); // Update the state with the input value
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        await onLogin(email, passwordLogin);
      };

      const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        await onSignup(email, passwordLogin);
        login = true;
      };
    
    return (
        <>
        
        <div className="flex">
    { login &&<div className="surface-section w-full md:w-6 p-6 md:p-8">
         <div className="mb-5">
             <img src="assets/images/blocks/logos/hyper.svg" alt="Image" height="50" className="mb-3" />
             <div className="text-900 text-3xl font-medium mb-3">Welcome Back</div>
             <span className="text-600 font-medium mr-2">Don't have an account?</span>
             <a className="font-medium no-underline text-blue-500 cursor-pointer" onClick={createAcct}>Create today!</a>
         </div>
         <div>
             <label htmlFor="email2" className="block text-900 font-medium mb-2">Email</label>
             <input id="email2" type="text" value={email} onChange={handleEmailChange} placeholder="Email address"  className="w-full mb-3 p-3" />
 
             <label htmlFor="password2" className="block text-900 font-medium mb-2">Password</label>
             <input id="password2" type="password" value={passwordLogin} onChange={handlePasswordChange} placeholder="Password"  className="w-full mb-3 p-3" />
 
             <div className="flex align-items-center justify-content-between mb-6">
                 <div className="flex align-items-center">
                     {/* <p-checkbox id="rememberme" [binary]="true" styleClass="mr-2"></p-checkbox> */}
                     {/* <label for="rememberme2">Remember me</label> */}
                 </div>
                 <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot password?</a>
             </div>
             {/* <button
  onClick={login ? handleLogin : handleSignup}
  className="w-full p-3"
>
  {login ? 'Login' : 'SignIn'}
</button> */}
             <button  onClick={handleLogin}    className="w-full p-3">login</button>
             {/* {!login && <button  onClick={handleSignup}    className="w-full p-3">SignIn</button>} */}
         </div>
    </div>}
    { !login &&<div className="surface-section w-full md:w-6 p-6 md:p-8">
         <div className="mb-5">
             <img src="assets/images/blocks/logos/hyper.svg" alt="Image" height="50" className="mb-3" />
             {/* <div className="text-900 text-3xl font-medium mb-3">Welcome Back</div>
             <span className="text-600 font-medium mr-2">Don't have an account?</span>
             <a className="font-medium no-underline text-blue-500 cursor-pointer" onClick={createAcct}>Create today!</a> */}
         </div>
         <div>
             <label htmlFor="email2" className="block text-900 font-medium mb-2">Email</label>
             <input id="email2" type="text" value={email} onChange={handleEmailChange} placeholder="Email address"  className="w-full mb-3 p-3" />
 
             <label htmlFor="password2" className="block text-900 font-medium mb-2">Password</label>
             <input id="password2" type="password" value={passwordLogin} onChange={handlePasswordChange} placeholder="Password"  className="w-full mb-3 p-3" />
 
             <div className="flex align-items-center justify-content-between mb-6">
                 <div className="flex align-items-center">
                     {/* <p-checkbox id="rememberme" [binary]="true" styleClass="mr-2"></p-checkbox> */}
                     {/* <label for="rememberme2">Remember me</label> */}
                 </div>
                 <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot password?</a>
             </div>
             
             {/* {login && <button  onClick={handleLogin}    className="w-full p-3">login</button>} */}
            <button  onClick={handleSignup}    className="w-full p-3">SignIn</button>
         </div>
    </div>}
    {/* <div className="hidden md:block w-6 bg-no-repeat bg-cover" style="background-image: url('assets/images/blocks/signin/signin.jpg')"></div> */}
</div>
        </>
    )
}

export default Login




