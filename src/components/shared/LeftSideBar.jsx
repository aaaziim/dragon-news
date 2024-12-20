import moment from "moment";
import { useEffect, useState } from "react";
import { FaCalendar } from "react-icons/fa";
import { NavLink } from "react-router-dom";





const LeftSideBar = () => {
    const [categories, setCategories] = useState([]);
    const [news, setNews] = useState([]);
    
    useEffect(()=>{
            fetch('categories.json')
            .then(res=> res.json())
            .then(data => setCategories(data))
    },[])


    useEffect(()=>{
            fetch('news.json')
            .then(res=> res.json())
            .then(data => setNews(data))
    },[])




    return (
        <div className='px-3'>
            <div>
            <h2 className="text-2xl font-semibold mb-4">All Categories</h2>

            <ul className="space-y-3">
            {

            categories.map(category =><li key={category.id}><NavLink to={`category/${category.id}`} className="ml-4 text-xl font-medium">{category.name}</NavLink></li>)  

            }
            </ul>
            </div>
            <div>

                <div className="space-y-2">
                   {
                    news.slice(0,3).map(currentNews=>(
                        <>
                        <img className="w-full rounded-lg" src={currentNews.thumbnail_url} alt="" />
                   <h3 className="text-xl font-bold">{currentNews.title}</h3>
                   <div className="flex gap-4 items-center">
                   <h3 className="text-xl font-semibold">Sports</h3>
                   <p className="text-lg text-gray-300 flex items-center gap-2"> <FaCalendar></FaCalendar> {moment(currentNews.author.published_date).format('LL') }</p>
                   </div>
                       </>
                      
                    ))
                   }
                </div>

            </div>
        </div>
    );
};

export default LeftSideBar;