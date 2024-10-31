import Games from "../../Components/Games/Games"
import "./Home.css"
import { MdGroups } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="p-container">
            <Link to='/players'>
                  <span >
                   <MdGroups className="logo" />
                   <h2>Players</h2>
                  </span>
            </Link>
           <Link to='/reports'> 
                <span>
                  <TbReportSearch className="logo" />
                  <h2>Reports</h2>
                </span> 
            </Link> 
      </div>
      <Games/>
    </div>
  )
}

export default Home
