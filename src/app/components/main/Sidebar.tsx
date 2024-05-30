import {
  Home,
  Newspaper,
  Package,
  ShoppingCart,
  TreeDeciduous,
  Users,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const currentUrl = useLocation();

  // CSS active tab dựa trên url của trang web
  const getAcitveLink = (url: string) => {
    const urlEnd = currentUrl.pathname.slice(-6).replace("/", "");
    if (url === "") {
      return `${
        urlEnd === "admin"
          ? "flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
          : "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
      }`;
    } else {
      return `${
        currentUrl.pathname.includes(url)
          ? "flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
          : "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
      }`;
    }
  };

  return (
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <Link to={"/admin"} className="flex items-center gap-2 font-semibold">
          {/* <Package2 className="h-6 w-6" /> */}
          <span className="">Nuôi Cây Admin</span> 
          {/* <img
            src="src\assets\images\Logo_With_Name.svg"
            alt="Logo.img"
            className=" w-[50px]"
          /> */}
        </Link>
        {/* <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
          <Bell className="h-4 w-4" />
          <span className="sr-only">Toggle notifications</span>
        </Button> */}
      </div>
      <div className="flex-1">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
          <Link to={"/admin"} className={getAcitveLink("")}>
            <Home className="h-4 w-4" />
            Bảng điều khiển
          </Link>
          <Link to={"user"} className={getAcitveLink("user")}>
            <Users className="h-4 w-4" />
            Người dùng
          </Link>
          <Link to={" "} className={getAcitveLink("trees")}>
            <TreeDeciduous className="h-4 w-4" />
            Cây trồng
          </Link>
          <Link to={""} className={getAcitveLink("order")}>
            <ShoppingCart className="h-4 w-4" />
            Giao dịch{" "}
          </Link>
          <Link to={"news"} className={getAcitveLink("news")}>
            <Newspaper className="h-4 w-4" />
            Tin tức
          </Link>
          <Link to={""} className={getAcitveLink("sponsor")}>
            <Package className="h-4 w-4" />
            Gói Liên Kết
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
