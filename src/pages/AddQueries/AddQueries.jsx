import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import Swal from 'sweetalert2'
import { AuthContext } from "../../providers/AuthProvider";


const AddQueries = () => {
    const { user } = useContext(AuthContext); 

    const handleAddQueries = event => {
        event.preventDefault();

        const form = event.target;

        const productImage = form.productImage.value;
        const productName = form.productName.value;
        const productBrand = form.productBrand.value;
        const queryTitle = form.queryTitle.value;
        const boycottingReasonDetails = form.boycottingReasonDetails.value;
        const userEmail = form.userEmail.value;
        const userName = form.userName.value;
        const userImage = form.userImage.value;
        const currentDateAndTime = form.currentDateAndTime.value;
        const recommendationCount = form.recommendationCount.value;
        


        const newCraft = { productImage, productName, productBrand, queryTitle, boycottingReasonDetails, userEmail, userName, userImage, currentDateAndTime, recommendationCount   }

        console.log(newCraft);

        // send data to the server
        fetch('https://art-gallery-server-one.vercel.app/craft', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCraft)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Craft Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Close'
                      })
                      
                }
            })
    }


    return (
        <div>
            <Helmet>
                <title>The Alt Products | Add Queries</title>
            </Helmet>
            
            <div className="bg-[#F4F3F0] p-24">
                <h2 className="text-2xl font-extrabold text-center text-blue-600">Add a Query</h2>



                <form onSubmit={handleAddQueries}  className="bg-blue-200 rounded-xl p-5 font-semibold">

                    {/*  Product Image-URL */}
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Product Image</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="productImage" placeholder="Product Image-URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* Product Name and  Product Brand */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="productName" placeholder="Product Name" className="input input-bordered w-full" />
                            </label>
                        </div>


                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Product Brand</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="productBrand" placeholder="Product Brand" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* Query TItle */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2 lg:w-full">
                            <label className="label">
                                <span className="label-text">Query Title</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="queryTitle" placeholder="Query Title" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* Boycotting Reason Details */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2 lg:w-full">
                            <label className="label">
                                <span className="label-text">Boycotting Reason Details</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="boycottingReasonDetails" placeholder="Boycotting Reason Details" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* User Email and User Name */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">User Email</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="userEmail" placeholder="User Email" defaultValue={user.email} disabled className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="userName" placeholder="User Name" defaultValue={user.displayName} disabled className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>


                    {/* Just Show User Image */}
                    <div className="flex justify-center" >
                        <img className="w-24 rounded-2xl" src={user.photoURL} />   
                    </div>

                    {/* User Image and Current Date and Time */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2" >
                            <label className="label">
                                <span className="label-text">User Image</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="userImage" placeholder="User Image" defaultValue={user.photoURL} disabled className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Current Date and Time</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="currentDateAndTime" placeholder="Current Date and Time" defaultValue={new Date().toLocaleTimeString('en-US', { hour12: false }).slice(0, 5)} disabled className="input input-bordered w-full" />
                            </label>
                        </div>




                    </div>

                    {/* Recommendation Count */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2 lg:w-full">
                            <label className="label">
                                <span className="label-text">Recommendation Count</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="recommendationCount" placeholder="Recommendation Count" defaultValue={0} disabled className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>


                    <input type="submit" value="Add Query" className="btn btn-block btn-info text-xl" />

                </form>






                

                {/* <form onSubmit={handleAddQueries}  className="bg-blue-200 rounded-xl p-5 font-semibold">

                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="image" placeholder="Image URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>







                    
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Item Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="itemName" placeholder="Item Name" className="input input-bordered w-full" />
                            </label>
                        </div>


                        <div className="form-control md:w-1/2 ml-4">

                            <label className="label">
                                <span className="label-text">Subcategory Name</span>
                            </label>
                            
                            <select className="h-12 border-black border rounded-lg w-full " name="subcategoryName" id="t">
                                <option value="">-- Select a Subcategory Name --</option>
                                <option value="LandscapePainting">Landscape Painting</option>
                                <option value="PortraitDrawing">Portrait Drawing</option>
                                <option value="WatercolourPainting">Watercolour Painting</option>
                                <option value="OilPainting">Oil Painting</option>
                                <option value="CharcoalSketching">Charcoal Sketching</option>
                                <option value="CartoonDrawing">Cartoon Drawing</option>
                            </select>
                        
                        </div>




                    </div>







                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="shortDescription" placeholder="Short Description" className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                   




                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Customization</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="customization" placeholder="example- Yes/ No" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>






                    
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Processing Time</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="processingTime" placeholder="Processing Time" className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Stock Status</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="stockStatus" placeholder="example- In stock/ Made to Order" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>








                    
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">User Email</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="userEmail" placeholder="User Email" defaultValue={user.email} disabled className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="userName" placeholder="User Name" defaultValue={user.displayName} disabled className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>




                    <input type="submit" value="Add" className="btn btn-block btn-info text-xl" />



                </form> */}



            </div>
        </div>
    );
};

export default AddQueries;