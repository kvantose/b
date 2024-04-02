import "./Error.css";
import { useLocation} from "react-router-dom";


export default function Error() {
    const location = useLocation();
   const error = location.state?.error || "Неизвестная ошибка";   
    return (
        <>
            <div className="error">
                <h1>{ JSON.stringify(error)  }</h1>
                <h1>Попробуйте позже</h1>
            </div>
        </>
    );
}