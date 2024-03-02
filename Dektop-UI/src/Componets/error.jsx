import {useNavigate} from "react-router-dom";


const PageNotFound = () => {
    
    const navigate = useNavigate()
    
    function home(){
        navigate('/')
    }
    
    return(
        <div>
            <h1>404 Error</h1>
            <h1>Page Not Found</h1>
            <button onClick={home}>
                GOTO HOME
            </button>
        </div>
    )
}

export default PageNotFound;
