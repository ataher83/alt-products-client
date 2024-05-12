import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom"
import { useState } from "react"
import { Fade, Slide } from "react-awesome-reveal";
import QueryCard from "../../../QueryCard/QueryCard";

const Queries = () => {

    const loadedQueries = useLoaderData()
    const[queries, setQueries] = useState(loadedQueries) 

    return (
        <div>
            <Helmet>
                <title>The Alt Products | Queries</title>
            </Helmet>





            {/* Queries Section */}
            <div className="py-16">
                <p className="text-center text-2xl font-semibold  text-blue-600 ">
                    <Slide>
                        <h1>All Queries</h1>
                    </Slide>
                </p>
                <h2 className="text-center font-semibold">(Total Queries: {queries.length})</h2>
                
            {/* Show All Queries */}  
            {/* এখানে কার্ড গুলো সমান হয় নায়, তাই এই কোড কমেন্ট করে নিচের কোড ব্যবহার করেছি* সেইম কোড, কিন্তু কারন বুঝলাম না, বুঝতে হবে  */}
            {/* নীচের কোডে sorting করলে এখানেও আটো সর্টিং হয় কেন? */}
            
                {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto  ">
                        {
                            queries.map(query => 

                            <div>
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
                                            </div>
                        
                        

                                            <div className="flex justify-center" >
                                                <img className="w-24 rounded-2xl" src={query.userImage} />   
                                            </div>
                        
                        
                      
                                            <div className="text-center mt-5">
                                                <Link to={`/queryDetails/${query._id}`}><button className="btn btn-info w-1/3 ">Recommend</button></Link>
                                            </div>

                        
                                        </div>
                                </div>
                                                  
                            </div>
         
                        )
                        }
                </div> */}





                {/* Show  Recent/ Latest 6 Queries */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto "> 
                                            
                        {
                            // queries.map((query, index) => (
                            // queries.sort((a, b) => new Date(b.currentDateAndTime) - new Date(a.currentDateAndTime)).slice(0, 6).map((query, index) => (
                            queries.sort((a, b) => new Date(b.currentDateAndTime) - new Date(a.currentDateAndTime)).map((query, index) => (

                                <div key={index} className="card bg-base-100 shadow-xl mt-4">

                                    <figure><img className="w-full h-72" src={query.productImage} alt="Query Image" /></figure>

                                    <div className="flex justify-between px-2 pt-1 font-semibold">
                                        <p className="bg-orange-400 rounded capitalize px-1">{query.productName}</p>
                                        <p className="bg-orange-400 rounded capitalize px-1"><span>{query.productBrand}</span></p>
                                    </div>

                                    <div className="card-body px-1">
                                        <div className="flex gap-2 items-center justify-center">

                                            <h2 className="lg:card-title text-center text-orange-600">{query.queryTitle}</h2>
                                        </div>
                                        <p className="text-center pb-2">{query.boycottingReasonDetails}</p>

                                        <div className="card-actions justify-center items-center">
                                            <div className="badge badge-outline bg-blue-400 font-semibold text-white border-blue-500">
                                                Posted at: {query.currentDateAndTime}
                                            </div>
                                        </div>

                                        <div className="card-actions justify-center items-center">
                                            <div className="badge badge-outline bg-blue-400 font-semibold text-white border-blue-500">
                                                Posted by: {query.userName}
                                            </div>
                                        </div>

                                        <div className="flex justify-center">
                                            <img className="w-24 rounded-2xl" src={query.userImage} />
                                        </div>

                                        <div className="text-center mt-5">
                                            <Link to={`/queryDetails/${query._id}`}><button className="btn btn-info w-1/3 ">Recommend</button></Link>
                                        </div>
                                    </div>
                                </div>
                            ))                                                     
                        }
                </div>









            </div>




        </div>
    );
};

export default Queries;