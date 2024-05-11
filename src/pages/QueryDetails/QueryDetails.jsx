import { useLoaderData, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const QueryDetails = () => {

    const queries =useLoaderData();
    const {id} = useParams()
    console.log(id)
    console.log( typeof(id) )
    //এখানে প্যারাম এর মাধ্যেমে যে id পাওয়া যায় তা String, তাই একে Integer এ কনভারট করে নিতে হবে, অথবা  == (double equal operator) দিয়ে কম্পেয়ার করতে হবে। 
    //এখানে আমি == (double equal operator) ব্যবহার করেছি 

    // const idInt = parseInt(id)
    // console.log(idInt)
    // console.log( typeof(idInt) )

    const query = queries.find(q => q._id == id) 
    // console.log( id, crafts )



    return (
        <div className="card bg-base-100 shadow-xl mt-4  ">
            <Helmet>
            <title>The Alt Products | Query Details: {query._id}</title>
            </Helmet>


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
                        
                    
                    {/* <p className="text-center font-normal text-orange-400 pb-2">{queryTitle}</p> */}
                        
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









                    {/* <div className="text-center mt-5">
                        <Link to={`/craftDetails/${_id}`}><button className="btn btn-secondary w-1/3 ">View Details</button></Link>
                    </div> */}
                    

                </div>
                </div>

        </div>
    );
};

export default QueryDetails;