import { useSelector } from "react-redux";
import UserDetails from "../components/user/UserDetails";

const Details = ()=>{
    const userName = useSelector((state) => state.input.name);

    return (
        <UserDetails name={userName} />
    )
}

export default Details;