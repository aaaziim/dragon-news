import Logo from "../../assets/logo.png"
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <>
         <div className="text-center">
            <img className="mx-auto py-4" src={Logo} alt="" />
            <p className="text-2xl">Journalism Without Fear or Favour</p>
            <p className="text-xl">{moment().format('dddd , MMMM Do YYYY')}</p>
            <p className="text-xl">{moment().format('h:mm:ss A')}</p>
        </div>
        <div className="flex items-center bg-gray-100 p-3">
        <button className="btn bg-red-400 text-white">Breaking News</button>

        <Marquee pauseOnHover={true} className="cursor-pointer">
            <Link to="/">
                I can be a React component, multiple React components, or just some text.</Link>
            <Link to="/">
                I can be a React component, multiple React components, or just some text.</Link>
            <Link to="/">
                I can be a React component, multiple React components, or just some text.</Link>
        </Marquee>
        </div>
        
        </>
       
    );
};

export default Header;