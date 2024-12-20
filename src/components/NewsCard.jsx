import moment from "moment";
import { FaEye, FaShare, FaStar } from "react-icons/fa";
import { FaBookBookmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

const NewsCard = ({news}) => {

    const {author,image_url,details } = news;
    return (
        <div className="p-4 border rounded my-6">
            <div className="flex justify-between items-center gap-4  bg-gray-200 mb-2 p-4 rounded-md">
               <div className="flex items-center gap-3">
               <img className="w-16 rounded-full" src={author.img} alt="" />
                <div>
                <h3 className="font-semibold">
                    {author.name}
                </h3>
                <p>{moment(author.published_date).format('LL') }</p>
                </div>
               </div>
               <div className="flex items-center gap-3">
                <FaBookBookmark></FaBookBookmark>
                <FaShare></FaShare>
               </div>
            </div>

            <div>
                <img className="w-full rounded-lg my-3" src={image_url} alt="" />
                <p>{details.slice(0,100)}...</p>
                <Link className="text-orange-500 my-4" to="/">Read More</Link>

                <hr className="border my-2" />

                <div className="flex justify-between items-center gap-4">
                    <div className="flex items-center gap-2">
                        <FaStar className="text-orange-500"></FaStar>
                        <FaStar className="text-orange-500"></FaStar>
                        <FaStar className="text-orange-500"></FaStar>
                        <FaStar className="text-orange-500"></FaStar>
                        <FaStar className="text-orange-500"></FaStar>
                        <p className="text-orange-500"> 4.9</p>
                    </div>
                    <div className="flex items-center gap-3">
                    <FaEye className="text-orange-500" ></FaEye>
                    <p className="text-orange-500" >499</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;