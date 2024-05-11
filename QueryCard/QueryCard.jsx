// import { Link } from "react-router-dom";
// import Swal from "sweetalert2";
// import { IoLogoUsd } from "react-icons/io";
// import { FcRating } from "react-icons/fc";

const QueryCard = ({ query, queries, setQueries }) => {

    const { _id, productImage, productName, productBrand, queryTitle, boycottingReasonDetails, userEmail, userName, userImage, currentDateAndTime, recommendationCount  } = query;


    // const handleDelete = _id => {
    //     console.log(_id);
    //     Swal.fire({
    //         title: 'Are you sure?',
    //         text: "You won't be able to revert this!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, delete it!'
    //     }).then((result) => {
    //         if (result.isConfirmed) {


    //             fetch(`https://art-gallery-server-one.vercel.app/craft/${_id}`, {
    //                 method: 'DELETE'
    //             })
    //                 .then(res => res.json())
    //                 .then(data => {
    //                     console.log(data);
    //                     if (data.deletedCount > 0) {
    //                         Swal.fire(
    //                             'Deleted!',
    //                             'Your Craft has been deleted.',
    //                             'success'
    //                         )
    //                         const remaining = crafts.filter(cof => cof._id !== _id);
    //                         setCrafts(remaining);
    //                     }
    //                 })

    //         }
    //     })
    // }

    return (
    <div>
    
        <div className="card bg-base-100 shadow-xl mt-4">

                <figure><img className="w-full h-72" src={productImage} alt="Craft Image" />
                </figure>

                <div className="flex justify-between px-2 pt-1 font-semibold">
                    <p className=" bg-orange-400 rounded capitalize px-1">{productName}</p>
                    <p className="bg-orange-400 rounded capitalize px-1"><span>{productBrand}</span></p>
                </div>

                <div className="card-body px-1">
                    <div className="flex gap-2 items-center justify-center">
                        
                        <h2 className=" lg:card-title text-center text-orange-600">
                            {queryTitle}
                           
                        </h2>
                    </div>
                        
                    
                    {/* <p className="text-center font-normal text-orange-400 pb-2">{queryTitle}</p> */}
                        
                    <p className="text-center pb-2">{boycottingReasonDetails}</p>

                   
                    <div className="card-actions justify-center items-center">
                        <div className="badge badge-outline bg-blue-400 font-semibold text-white border-blue-500">Posted at: {currentDateAndTime}</div> 
                        {/* <div className="badge badge-outline  bg-blue-400 font-semibold text-white border-blue-500">productBrand: {productBrand}</div>  */}
                    </div>
                    <div className="card-actions justify-center items-center">
                        {/* <div className="badge badge-outline  bg-blue-400 font-semibold text-white border-blue-500">Email: {userEmail}</div>  */}
                        <div className="badge badge-outline  bg-blue-400 font-semibold text-white border-blue-500">Posted by: {userName}</div> 
                    </div>



                    {/* Just Show User Image */}
                    <div className="flex justify-center" >
                        <img className="w-24 rounded-2xl" src={userImage} />   
                    </div>









                    {/* <div className="text-center mt-5">
                        <Link to={`/craftDetails/${_id}`}><button className="btn btn-secondary w-1/3 ">View Details</button></Link>
                    </div> */}
                    

                </div>
        </div>



        {/* <div className="card card-side bg-base-100 shadow-xl">

            <figure><img src={image} alt="Movie" /></figure>

            <div className="flex justify-between w-full pr-4">
                <div>
                    <h2 className="card-title">Name: {itemName}</h2>
                    <p>{subcategoryName}</p>
                    <p>{shortDescription}</p>
                    <p>{price}</p>
                    <p>{rating}</p>
                    <p>{customization}</p>
                    <p>{processingTime}</p>
                    <p>{stockStatus}</p>
                    <p>{userEmail}</p>
                    <p>{userName}</p>
                </div>
                





                <div className=" card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-2 flex flex-col">
                        <button className="btn">View</button>
                        <Link to={`updateCraft/${_id}`}>
                        <button className="btn">Edit</button>
                        </Link>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn bg-red-500">X</button>
                    </div>
                </div>
            </div>
        </div> */}

    </div>

    );
};




export default QueryCard;