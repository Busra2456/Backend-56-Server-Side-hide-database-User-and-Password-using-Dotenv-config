import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";



const SignUp = () => {

      const {createUser} = useContext(AuthContext);

      const handleSignUp = e =>{
            e.preventDefault();
            const form = e.target; 
            const email = form.email.value;
            const password = form.email.value;
            console.log(email,password)
            createUser(email,password)
            .then(result =>{
                  console.log(result.user);
                  //new user has been created
                  const createdAt =result.user?.metadata?.creationTime;

                  const user = { email , createdAt: createdAt};
                  fetch('http://localhost:13000/user',{
                        method: 'POST',
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
      <h1 className="text-5xl font-bold">Sign Up</h1>
      
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
     <form onSubmit={handleSignUp} className="card-body"> <div className="card-body">
        <fieldset className="fieldset">
          <label className="fieldset-label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="fieldset-label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Sign Up</button>
        </fieldset>
      </div></form>
    </div>
  </div>
</div>
      );
};

export default SignUp;