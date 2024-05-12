import { Link } from "react-router-dom";


const MyQueries = () => {
    return (
        <div>

            {/* Banner section */}
            <div className='container mx-auto my-10'>

                <div className='pt-5'>
                    <div className="hero w-full h-[400px] " style={{backgroundImage: 'url(https://i.postimg.cc/dVQJMMyD/4.jpg)'}}>
                        {/* নিচের ডিভ শুধুমাত্র ব্যকগ্রাউন্ড অপাসিটির জন্য */}
                        <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-5xl font-bold">Explore the Alternative Products </h1>
                                    <p className="mb-5">Are you in search of better options for your current products? Seeking alternatives for any reason? Click the button below to embark on a quest for alternative products.</p>
                                    {/* <Link to="/queries"><button className="btn btn-info">Click Here</button></Link> */}
                                    <Link to="/addQueries"><button className="btn btn-info">Add Queries</button></Link>
                                </div>
                            </div>
                    </div>
                </div>
            </div>


            {/* My Query Section */}



        </div>
    );
};

export default MyQueries;