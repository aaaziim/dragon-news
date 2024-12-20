import { useEffect, useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import LeftSideBar from "./shared/LeftSideBar";
import RightSideBar from "./shared/RightSideBar";
import NewsCard from "./NewsCard";
const Home = () => {

    const [news, setNews] = useState([]);
    useEffect(()=>{
         fetch('news.json')
        .then(res=> res.json())
        .then(data => setNews(data))
      },[])
        







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
                    <div>
            <h2 className="text-2xl text-center font-semibold mb-4">Dragon News Home</h2>
                    </div>

                    <div className="my-10">
                            {
                                news.slice(0,6).map(currentNews =><NewsCard key={currentNews.id} news={currentNews}></NewsCard>)
                            }
                    </div>
                     
                </div>
                <div>
                    <RightSideBar></RightSideBar>
                </div>
            </div>
        </div>
    );
};

export default Home;