import Header from "./Header";
import Navbar from "./Navbar";
import LeftSideBar from "./shared/LeftSideBar";
import RightSideBar from "./shared/RightSideBar";
const Home = () => {
    return (
        <div>
            <div className="text-center">
            <Header></Header>
            <Navbar></Navbar>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
                <div>
                    <LeftSideBar></LeftSideBar>
                </div>
                <div className="md:col-span-2">
                    <h2 className="text-3xl">News Comming Soon</h2>
                </div>
                <div>
                    <RightSideBar></RightSideBar>
                </div>
            </div>
        </div>
    );
};

export default Home;