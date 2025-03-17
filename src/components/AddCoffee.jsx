
import Swal from 'sweetalert2'
const AddCoffee = () => {
      const handleAddCoffee = event =>{
            event.preventDefault();

            const form = event.target;

            const name = form.name.value;
            const quantity = form.quantity.value;
            const supplier = form.supplier.value;
            const taste = form.taste.value;
            const category = form.category.value;
            const details = form.details.value;
            const photo = form.photo.value;

            const newCoffee = {name,quantity, supplier, taste, category,details, photo}
            console.log(newCoffee)

            //send data to server
            fetch('http://localhost:13000/coffee',{
                  method:'POST',
                  headers:{
                        'content-type':'application/json'
                  },
                  body: JSON.stringify(newCoffee)
            }
                 
            )
            .then(res=>res.json())
            .then(data =>{
                  console.log(data);
                  if(data.insertedId){
                        Swal.fire({
                              title: 'Success!',
                              text: 'User Added Successfully',
                              icon: 'success',
                              confirmButtonText: 'Cool'
                            })
                  }
            })
           
      }
      return (
            <div className="bg-[#F4F3F0] p-16 
            
             ">
                 <h1 className="text-center text-3xl font-extrabold ">Add a Coffee</h1> 
                 <form onSubmit={handleAddCoffee}>
                  {/* form name and quantity row */}
                  <div className="md:flex justify-between mb-8">
                  <div className="form-control md:w-1/2 ">
                        <label className="label m-2 ">
                              <span className="label-text ">Coffee Name </span>
                        </label><br />
                        <div className=" mx-3 bg-white">
  <input className="label-text rounded-xl px-2 p-1 border-zinc-500 w-full" name="name" placeholder="coffee Name" />
  
</div>
  
</div>


                  <div className="form-control  md:w-1/2">
                        <label className="label m-2 ">
                              <span className="label-text ">Available Quantity </span>
                        </label><br />
                        <div className=" mx-2 bg-white">
  <input className="label-text rounded-xl px-2 p-1 border-zinc-500  w-full" name="quantity" placeholder="Available Quantity" />
  
</div>
  
</div> 
</div> 
 {/* form Supplier row */}
 <div className="md:flex justify-between mb-8">
                  <div className="form-control md:w-1/2 p-1">
                        <label className="label m-2 ">
                              <span className="label-text ">Supplier </span>
                        </label><br />
                        <div className=" mx-3 bg-white">
  <input className="label-text rounded-xl px-2 p-1 border-zinc-500  w-full" name="supplier" placeholder="Supplier Name" />
  
</div>
  
</div>


                  <div className="form-control  md:w-1/2">
                        <label className="label m-2 ">
                              <span className="label-text ">Taste </span>
                        </label><br />
                        <div className=" mx-3 bg-white">
  <input className="label-text rounded-xl px-2 p-1 border-zinc-500  w-full" name="taste" placeholder="Taste" />
  
</div>
  
</div> 
</div> 
 {/* form Category row */}
 <div className="md:flex justify-between mb-8">
                  <div className="form-control md:w-1/2 ">
                        <label className="label m-2 ">
                              <span className="label-text "> Category </span>
                        </label><br />
                        <div className=" mx-3 bg-white">
  <input className="label-text  p-1 border-zinc-500 rounded-xl px-2 w-full" name="category" placeholder="Category " />
  
</div>
  
</div>


                  <div className="form-control  md:w-1/2">
                        <label className="label m-2 ">
                              <span className="label-text ">Details</span>
                        </label><br />
                        <div className=" mx-3 bg-white">
  <input className="label-text  p-1 border-zinc-500 rounded-xl px-2 w-full" name="details" placeholder="Details" />
  
</div>
  
</div> 
</div> 

{/* form photo url row */}
<div className="mb-5">
     


                  <div className="form-control w-full">
                        <label className="label m-2 ">
                              <span className="label-text ">Photo URL</span>
                        </label><br />
                        <div className=" mx-3 bg-white">
  <input className="label-text p-1 border-zinc-500 rounded-sm w-full" name="photo" placeholder="https://ibb.co.com/DDFrsMM7" />
  
</div>
  
</div> 
</div>

<input type="submit" className="btn btn-block bg-[#D2B48C] border-black" value="ADD COFFEE" />
</form>
            </div>
      );
};

export default AddCoffee;