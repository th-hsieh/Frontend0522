import { useLocation } from "react-router";


const NotFound  = () => {
    let location=useLocation();
    console.log(location);
    return (
        <div className="row justify-content-center">
            <div className="col-sm-6 text-center">
                <h2>Resource not found at {location.pathname}</h2>
            </div>
        </div>
    );
}
 
export default NotFound ;