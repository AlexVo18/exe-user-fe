import { useContext } from "react";
import DonateButton from "../../button/DonateButton";
import { AuthContext } from "@/app/contexts/AuthContext";

const Banner = () => {
  const { userInfo } = useContext(AuthContext);
  return (
    <div className="h-[600px] bg-transparent">
      <img
        src="images/Banner.jpg"
        alt="Banner"
        className="w-full object-cover h-[600px] absolute z-[1]"
      />
      <div className="grid md:grid-cols-2 z-20 text-white h-full">
        <div className="flex flex-col items-center justify-center">
          <div className="lg:mx-20 mx-10 cursor-default z-10">
            <div className="text-4xl font-semibold md:text-start text-center">
              ĐỒNG HÀNH CÙNG NUÔI CÂY
            </div>
            <div className="mt-6 text-xl leading-relaxed text-justify">
              Chỉ với 1 hành động nhỏ, bạn đã giúp môi trường chúng ta trở nên
              tốt đẹp hơn. Hãy cùng Nuôi Cây chung tay góp phần tạo tên 1 Việt
              Nam xanh hơn.
            </div>
            <div className="flex mt-6 md:justify-start justify-center">
              {userInfo?.roleID === 1 ? (
                <></>
              ) : (
                <DonateButton
                  title="QUYÊN GÓP"
                  textColor="white"
                  bgColor="bg-mainGreen"
                  link={userInfo ? "/user/donation" : "/login"}
                  size="big"
                  isDonate={true}
                />
              )}
            </div>
          </div>
        </div>
        <div className="hidden"></div>
      </div>
    </div>
  );
};

export default Banner;
