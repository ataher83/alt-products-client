import { Link } from "react-router-dom";


const MyQueries = () => {
    return (
        <div>
            MyQueries page 

            <div className="text-center">
            <Link to="/addQueries"><button className="btn btn-info">Add Queries</button></Link>
            </div>
        </div>
    );
};

export default MyQueries;