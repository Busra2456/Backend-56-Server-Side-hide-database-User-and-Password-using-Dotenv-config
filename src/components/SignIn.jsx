
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const SignIn = () => {
       const {  signInUser} = useContext(AuthContext);
        const handleSignIn = e =>{
                  e.preventDefault();
                  const form = e.target; 
                  const email = form.email.value;
                  const password = form.email.value;
                  console.log(email,password)
                  signInUser(email,password)
                  .then(result =>{
                        console.log(result.user);
                    
                        
      
                        const user = {
                              email , 
                              lastLoggedAt: result.user?.metadata?.lastSignInTime}
                              // update last logged at in the database
                        fetch('http://localhost:13000/user',{
                              method: 'PATCH',
                              headers:{
                                    'content-type' : 'application/json'
                              },
                              body:JSON.stringify(user) 
                        })
                        .then(res => res.json())
                        .then(data =>{
                              console.log(data)
                               if(data.insertedId){
                                                      Swal.fire({
                                                            title: 'Success!',
                                                            text: 'User Added Successfully',
                                                            icon: 'success',
                                                            confirmButtonText: 'Cool'
                                                          })
                                                }
                                               
                        })
                  })
                  .catch(error =>{
                        console.error(error)
                  })
            } 
      return (
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign In!</h1>

    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSignIn}>
            <div className="card-body">
        <fieldset className="fieldset">
          <label className="fieldset-label">Email</label>
          <input type="email" name="email" className="input" placeholder="Email" />
          <label className="fieldset-label">Password</label>
          <input type="password" name="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Sign In</button>
        </fieldset>
      </div></form>
    </div>
  </div>
</div>
      );
};

export default SignIn;