import { useLoaderData, useParams } from "react-router-dom";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import Swal from 'sweetalert2'
import { AuthContext } from "../../providers/AuthProvider";

const QueryDetails = () => {
    const { user } = useContext(AuthContext); 
    const queries =useLoaderData();
    const {id} = useParams()
    // console.log(id)
    // console.log( typeof(id) )
    //এখানে প্যারাম এর মাধ্যেমে যে id পাওয়া যায় তা String, তাই একে Integer এ কনভারট করে নিতে হবে, অথবা  == (double equal operator) দিয়ে কম্পেয়ার করতে হবে। 
    //এখানে আমি == (double equal operator) ব্যবহার করেছি 

    // const idInt = parseInt(id)
    // console.log(idInt)
    // console.log( typeof(idInt) )

    const query = queries.find(q => q._id == id) 
    // console.log( id, crafts )

    



    const handleAddRecommendation = event => {
        event.preventDefault();

        const form = event.target;

        const recommendationTitle = form.recommendationTitle.value;
        const recommendedProductName = form.recommendedProductName.value;
        const recommendedProductImage = form.recommendedProductImage.value;
        const recommendationReason = form.recommendationReason.value;


        const queryId = form.queryId.value;
        const queryTitle = form.queryTitle.value;
        const productName = form.productName.value;
        const queryCreatorEmail = form.queryCreatorEmail.value;
        const queryCreatorName = form.queryCreatorName.value;
        const recommenderEmail = form.recommenderEmail.value;
        const recommenderName = form.recommenderName.value;
        const recommendationDateTime = form.recommendationDateTime.value;


        const productImage = form.productImage.value;
        const productBrand = form.productBrand.value;
        const boycottingReasonDetails = form.boycottingReasonDetails.value;
        // const userImage = form.userImage.value;
        const recommendationCount = form.recommendationCount.value;
        

        const newRecommendation = { recommendationTitle, recommendedProductName, recommendedProductImage, recommendationReason, recommenderEmail, recommenderName, 
            queryId, productImage, productName, productBrand, queryTitle, boycottingReasonDetails, queryCreatorEmail, queryCreatorName, recommendationDateTime, recommendationCount   }

        console.log(newRecommendation);

        // send data to the server
        fetch('https://alt-products-server.vercel.app/recommendations', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newRecommendation)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Recommendation Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Close'
                      })
                      
                }
            })
    }



    return (
        <div className="card bg-base-100 shadow-xl mt-4  ">
            <Helmet>
            <title>The Alt Products | Query Details: {query._id}</title>
            </Helmet>

            {/* Show Query Details */}
            <div className="card bg-base-100 shadow-xl mt-4">

                <figure><img className="w-full h-72" src={query.productImage} alt="Query Image" />
                </figure>

                <div className="flex justify-between px-2 pt-1 font-semibold">
                    <p className=" bg-orange-400 rounded capitalize px-1">{query.productName}</p>
                    <p className="bg-orange-400 rounded capitalize px-1"><span>{query.productBrand}</span></p>
                </div>

                <div className="card-body px-1">
                    <div className="flex gap-2 items-center justify-center">
                        
                        <h2 className=" lg:card-title text-center text-orange-600">
                            {query.queryTitle}
                        
                        </h2>
                    </div>
                                                
                    <p className="text-center pb-2">{query.boycottingReasonDetails}</p>

                    <div className="card-actions justify-center items-center">
                        <div className="badge badge-outline bg-blue-400 font-semibold text-white border-blue-500">Posted at: {query.currentDateAndTime}</div> 
                        <div className="badge badge-outline  bg-blue-400 font-semibold text-white border-blue-500">Posted by: {query.userName}</div> 
                    </div>
                    
                    <div className="card-actions justify-center items-center">
                        <div className="badge badge-outline  bg-blue-400 font-semibold text-white border-blue-500">Recommendation: {query.recommendationCount}</div>

                        <div className="badge badge-outline  bg-blue-400 font-semibold text-white border-blue-500">Email: {query.userEmail}</div>                          
                    </div>
                   

                    {/* Just Show User Image */}
                    <div className="flex justify-center" >
                        <img className="w-24 rounded-2xl" src={query.userImage} />   
                    </div>


                    <div className="flex justify-center gap-10 mt-5">
                        {/* <Link to={`/queryDetails/${query._id}`}><button className="btn btn-info w-1/3 ">Recommend</button></Link> */}
                        <button className="btn btn-info w-1/3 ">Add Recommendation</button>
                        <button className="btn btn-info w-1/3 ">All Recommendations</button>
                    </div>            

                </div>
            </div>





            {/* Add Recommendation Section */}
            <div className="bg-[#F4F3F0] px-24 py-5">
                <h2 className="text-2xl font-extrabold text-center text-blue-600 py-5">Add A Recommendation</h2>

                <form onSubmit={handleAddRecommendation}  className="bg-blue-200 rounded-xl p-5 font-semibold">


                {/* Recommendation Part */}

                    {/* Recommendation Text */}
                    <div className="flex justify-center" >
                        <h3 className="text-xl font-semibold">Write Your Recommendation Here</h3>  
                    </div>

                    {/*  Recommendation Title */}
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Recommendation Title</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="recommendationTitle" placeholder="Recommendation Title" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/*  Recommended product Name */}
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Recommended Product Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="recommendedProductName" placeholder="Recommended Product Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/*  Recommended Product Image */}
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Recommended Product Image</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="recommendedProductImage" placeholder="Recommended Product Image" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/*  Recommendation Reason */}
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Recommendation Reason</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="recommendationReason" placeholder="Recommendation Reason" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>


                {/* Query Part */}

                    {/* Query Text */}
                    <div className="flex justify-center" >
                        <h3 className="text-xl font-semibold">You are Recommending for:</h3>  
                    </div>

                    {/*  Query Id */}
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Query Id</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="queryId" placeholder="Query Id" defaultValue={id} disabled className="input input-bordered w-full" />
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
                                <input type="text" name="queryTitle" defaultValue={query.queryTitle} disabled placeholder="Query Title" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>                   

                    {/* Product Name*/}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="productName" defaultValue={query.productName} disabled  placeholder="Product Name" className="input input-bordered w-full" />
                            </label>
                        </div>


                        {/* <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Product Brand</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="productBrand" placeholder="Product Brand" className="input input-bordered w-full" />
                            </label>
                        </div> */}
                    </div>

                    {/* Query-Creator Email and Query-Creator Name */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Query-Creator Email</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="queryCreatorEmail" placeholder="Query-Creator Email" defaultValue={query.userEmail} disabled className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Query-Creator Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="queryCreatorName" placeholder="Query-Creator Name" defaultValue={query.userName} disabled className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* Recommender Email and Recommender Name */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Recommender Email</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="recommenderEmail" placeholder="Recommender Email" defaultValue={user.email} disabled className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Recommender Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="recommenderName" placeholder="Recommender Name" defaultValue={user.displayName} disabled className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* Recommendation Time (Current Date and Time) */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Recommendation Date & Time</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="recommendationDateTime" placeholder="Recommendation Date & Time" defaultValue={new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) + ', ' + new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' })} disabled className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* Total Recommendation (Recommendation Count) */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2 lg:w-full">
                            <label className="label">
                                <span className="label-text">Total Recommendation</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="recommendationCount" placeholder="Total Recommendation" defaultValue={query.recommendationCount} disabled className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>


                    <input type="submit" value="Add Recommendation" className="btn btn-block btn-info text-xl" />

                </form>


            </div>











        </div>
    );
};

export default QueryDetails;