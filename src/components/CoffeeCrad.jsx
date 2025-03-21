import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCrad = ({coffee,coffees,setCoffees}) => {
      const {_id,name,quantity, supplier, taste, category,details, photo} = coffee;

    const handleDelete = _id =>{
      console.log(_id);
      Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            
           fetch(`http://localhost:13000/coffee/${_id}`,{
            method: 'DELETE'
           }

           )
           .then(res => res.json())
           .then(data =>{
            console.log(data);
            if(data.deletedCount > 0){
                    Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success"
              });
              const remaining = coffees.filter(cof => cof._id !== _id);
              setCoffees(remaining)

            }
           })
            }
          });

    }
      return (
            <div>
                 <div className="card card-side bg-base-100 shadow-sm">
  <figure>
    <img
      src={photo}
      alt="Movie" />
  </figure>
  <div className="flex justify-between w-full items-center mr-8">
   <div> <h2 className="card-title">Name : {name}</h2>
    <p>{quantity} </p>
    <p>{supplier} </p>
    <p>{taste} </p></div>
    <div className="card-actions justify-end">
    <div className="join join-vertical space-y-5">
  <button className="btn ">VIEW</button>
 <Link to={`updateCoffee/${_id}`}> <button className="btn ">EDIT</button></Link>
  <button
  onClick={() => handleDelete(_id)}
  className="btn bg-orange-600">X</button>
</div>
    </div>
  </div>
</div> 
            </div>
      );
};

export default CoffeeCrad;