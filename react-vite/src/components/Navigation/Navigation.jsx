import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import { useSelector} from "react-redux"
import "./Navigation.css";

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);
  console.log("🚀 ~ Navigation ~ sessionUser:", sessionUser)

  return (
    <div className='div-navigation-wrapper'>
      <div className='div-navigation-a'>
        <NavLink to="/">
          <img className='homeImg'src='../../../public/favicon.ico' alt='Home img'></img>
        </NavLink>
      </div>

      <div className='div-navigation-a-user'>
        {/* {sessionUser && <NavLink to="/spots/new" className={`a-createSpot`}>Create a New Spot</NavLink>} */}
        <ProfileButton user={sessionUser} />
      </div>

    </div>
  );
}


export default Navigation;
