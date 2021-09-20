import {Link} from "react-router-dom"
import styled from "styled-components"

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <Not>Page not found</Not>
            <Link to="/">Back to homepage...</Link>
        </div>
     );
}

const Not = styled.p`
margin:1rem 0;
`
 
export default NotFound;