import {Outlet,useParams} from 'react-router-dom';
import {Spinach} from './Spinach.jsx';
import {Popeye} from './Popeye.jsx';
const Profile = () => {
    const {name} = useParams();
    return (
        <div>
            <h1>Hello from profile page!</h1>
            <p>So, how are you?</p>
            <hr />
            <h2>The profile visited is here:</h2>
            {/* <Outlet/> */}
            {name === "popeye" ? (
                <Popeye/>
            ) : name === "spinach" ? (
                <Spinach/>
            ) : (
                <DefaultProfile/>
            )}
        </div>
    )
}

const DefaultProfile = () =>{
    return <p>Oh, nothing to see here!</p>;
}

export {
    Profile,
    DefaultProfile,
};