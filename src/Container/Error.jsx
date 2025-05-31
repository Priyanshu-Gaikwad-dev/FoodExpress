import { useRouteError } from "react-router";

const Error = () => {
    const error = useRouteError();
    console.error(error); // Changed to console.error for better error visibility
    
    return (
        <div>
            <h1>{"Something went wrong: "}{error.status} - {error.statusText}</h1>
            <h2>{error.data}</h2>
        </div>
    );
}

export default Error;