import { Separator } from "@radix-ui/react-dropdown-menu";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
interface News {
    newsID: number;
    newsTitle: string;
    newsSummary: string;
    thumbnail: string;
    newsDescription: string;
    dateCreate: string;
    details: string;
}
function NewsLifeStylePageComponents() {
    const [lifeStyleComponent, setLifeStyleComponent] = useState<News[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://nuoicay.azurewebsites.net/api/home/news/type/3');
                const data = await response.json();
                setLifeStyleComponent(data);
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        };

        fetchData();
    }, []);
    console.log(lifeStyleComponent);
    return (
        <div>
            <Link to="/news/life-style">
                <div className="container flex border-green-500  border-l-8 h-12 mx-30 lg:mx-24 gap-2">
                    <h1 className="flex items-center text-left text-2xl font-bold text-mainBrown hover:text-mainGreen">NÉT SỐNG XANH</h1>
                </div>
            </Link>
            <div className="grid grid-cols-1 lg:grid-cols-4 xl:mx-40 lg:mx-30 my-10 gap-2">
                {Array.isArray(lifeStyleComponent) && lifeStyleComponent.map(news => (
                    <Link to={`/news/life-style/${news.newsID}`} key={news.newsID}>
                        <div className="p-5">
                            <img src={news.thumbnail} alt="anh" />
                            <h1>{news.newsID}</h1>
                            <h2 className="text-2xl font-semibold">{news.newsTitle}</h2>
                            <Separator />
                            <p className="text-lg">{news.newsSummary}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default NewsLifeStylePageComponents