import { Helmet } from "react-helmet-async";
import Banner from "./Banner";

import { useLoaderData } from "react-router-dom"
import { useState } from "react"
import CraftCard from "../CraftCard/CraftCard";
import LocationMap from "../LocationMap/LocationMap";

import { Fade, Slide } from "react-awesome-reveal";
import ArtAndCraftCategories from "../ArtAndCraftCategories/ArtAndCraftCategories";
import HeadingBanner from "./HeadingBanner";
import OurTeam from "../OurTeam/OurTeam";
import QueryCard from "../../../QueryCard/QueryCard";



const Home = () => {

    const loadedQueries = useLoaderData()
    const[queries, setQueries] = useState(loadedQueries) 


    return (
        <div className="">
            <Helmet>
                <title>The Alt Products | Home</title>
            </Helmet>
            <Banner></Banner>
            <HeadingBanner></HeadingBanner>





            {/* Recent Queries Section */}
            <div className="py-16">
                <p className="text-center text-2xl font-semibold  text-blue-600 ">
                    <Slide>
                        <h1>Recent Queries</h1>
                    </Slide>
                </p>
                
                
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto  ">
                    {
                        queries.map(query => <QueryCard
                        key={query._id}
                        query={query}
                        queries={queries}
                        setQueries={setQueries}
                        ></QueryCard>)
                    }
                </div>
            </div>





            {/* Craft Items Section */}
            {/* <div className="py-16">
                <p className="text-center text-3xl font-semibold  text-purple-600 ">
                    <Slide>
                        <h1>Craft Items</h1>
                    </Slide>
                </p>
                <p className="text-center text-lg font-semibold  ">
                    <Slide>
                        <h1>(Total Craft Items: {crafts.length})</h1>
                    </Slide>
                </p>
                <p className="text-center text-lg hidden md:block"> 
                    <Fade delay={1e3} cascade damping={1e-1}> Explore the Craft Items Collection, find exclusive something... </Fade>
                </p>
                
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto  ">
                    {
                        crafts.map(craft => <CraftCard
                        key={craft._id}
                        craft={craft}
                        crafts={crafts}
                        setCrafts={setCrafts}
                        ></CraftCard>)
                    }
                </div>
            </div> */}



            <OurTeam></OurTeam>
            <LocationMap></LocationMap>
            

        </div>
    );
};

export default Home;