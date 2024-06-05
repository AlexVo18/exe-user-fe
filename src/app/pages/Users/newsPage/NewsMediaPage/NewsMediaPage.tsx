import { Separator } from "../../../../components/ui/separator";
import { Link } from 'react-router-dom';

import React, { useEffect, useState } from 'react';

interface News {
    newsID: number;
    newsTitle: string;
    newsSummary: string;
    thumbnail: string;
    newsDescription: string;
    dateCreate: string;
    details: string;
}

const NewsMediaPage: React.FC = () => {
    const [newsMedia, setNewsMedia] = useState<News[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://nuoicay.azurewebsites.net/api/home/news/type/1');
                const data = await response.json();
                setNewsMedia(data);
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className='mx-0 xl:lg:mx-auto'>
            <div className="text-4xl font-semibold text-center text-mainBrown mt-10 mb-10">
                TRUYỀN THÔNG
            </div>
            <div className="mx-30 xl:mx-[168px] lg:mx-[200px] border-t border-gray-400"></div>
            {/* //News heading */}
            <div className="grid grid-cols-1 md:gird-cols-1 lg:grid-cols-1 xl:grid-flow-row-dense xl:grid-cols-3 lg:grid-rows-2 mx-2 xl:mx-40 lg:mx-48 ">
                <div className="row-span-1 xl:row-span-2 xl:col-span-2 xl:border-r-2 border-gray-300mx  mx-2 mt-6 lg:mt-6 pr-0 xl:pr-3">
                    <Link to="rung-xanh-len-voi-muc-tieu-trong-25ha-rung-noi-Hoa_Binh-Son-La">
                        <img src="https://btnmt.1cdn.vn/thumbs/540x360/2024/06/03/dai-dien-cac-doanh-nghiep-tai-tro-trao-tang-cay-bieu-trung-cho-dia-phuong.jpg" alt="anh"
                            className="inline object-cover w-full min-h-10" />
                        <Separator />
                        <p className="text-2xl mt-0 lg:mt-2 text-center hover:text-green-500 font-semibold">Bình Thuận: Tăng cường quản lý bảo vệ rừng</p>
                        <p className="mt-2">(TN&MT) - Ngày 2/6, tại xã Vân Hồ, huyện Vân Hồ, tỉnh Sơn La, Liên hiệp các Hội Khoa học và Kỹ thuật Việt Nam (VUSTA), Hạt Kiểm lâm huyện Vân Hồ, Huyện đoàn Vân Hồ, UBND xã Vân Hồ và Trung tâm Con người và Thiên nhiên (PanNature) cùng phối hợp phát động Chương trình Rừng Xanh Lên năm 2024 với mục tiêu trồng phục hồi 25 ha rừng nối giữa Hòa Bình - Sơn La.</p>
                    </Link>
                </div>
                <Link to="thuc-day-hanh-dong-vi-khong-khi-sach-thanh-pho-xanh-tai-Ha-Noi">
                    <div className="mt-6 mx-2 xl:mx-0 xl:mr-2">
                        <img src="https://btnmt.1cdn.vn/2024/06/03/toa-dam-khong-khi-sach-ha-noi1.jpg" alt="anh" className="inline object-cover w-full min-h-10" />
                        <h2 className="text-xl mt-2 hover:text-green-500 font-semibold">Thúc đẩy hành động vì không khí sạch, thành phố xanh tại Hà Nội</h2>
                    </div>
                </Link>
                <Link to="thuc-day-vai-tro-luc-luong-phi-chinh-thuc-trong-thuc-hien-EPR">
                    <div className="mt-2 mx-2 md:lg:mx-0 md:lg:mr-2 pt-0">
                        <img src="https://btnmt.1cdn.vn/2024/03/08/f0370c3933449f1ac655.jpg" alt="anh" className="inline object-cover w-full min-h-10" />
                        <h2 className="text-xl mt-2 hover:text-green-500 font-semibold">Thúc đẩy vai trò của lực lượng phi chính thức trong thực hiện EPR</h2>
                    </div>
                </Link>
            </div>

            <div className="invisible lg:invisible xl:visible mx-30 xl:mx-[168px]  border-t border-gray-400 mb-5"></div>
            {/* //OrderNews */}

            {/* <div className="grid grid-cols-1 lg:grid-cols-4 xl:mx-40 lg:mx-30 my-10 gap-2">

                {Array.isArray(newsUpdates) && newsUpdates.map(news => (
                    <Link to={`/news/update/${news.newsID}`} key={news.newsID}>
                        <div className="p-5 border border-gray-500">
                            <img src={news.thumbnail} alt="anh" />
                            <h1>{news.newsID}</h1>
                            <h2 className="text-2xl font-semibold">{news.newsTitle}</h2>
                            <Separator />
                            <p className="text-lg">{news.newsSummary}</p>
                        </div>
                    </Link>
                ))}
            </div> */}

        </div>

    );
}

export default NewsMediaPage;