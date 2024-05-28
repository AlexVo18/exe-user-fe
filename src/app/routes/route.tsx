import { Route, Routes, createBrowserRouter } from "react-router-dom";
import MainAdminLayout from "../pages/Admin/MainAdminLayout";
import MainLayout from "../pages/Users/MainLayout";
import LoginLayout from "../pages/Users/LoginLayout";
import { Suspense, lazy } from "react";

// *** Lazy Routes (Tất cả các route ngoài trừ main layout sẽ import vào đây) ***
const Home = lazy(() => import("../pages/Users/homePage/Home"));
const About = lazy(() => import("../pages/Users/aboutPage/About"));
const News = lazy(() => import("../pages/Users/newsPage/News"));
const Sponsor = lazy(() => import("../pages/Users/sponsorPage/Sponsor"));
const Packs = lazy(() => import("../pages/Users/packsPage/Packs"));
const Donation = lazy(() => import("../pages/Users/donationPage/Donation"));
const Loading = lazy(() => import("../pages/loadingPage/Loading"));

const Login = lazy(() => import("../pages/authPages/Login"));
const ForgotPassword = lazy(() => import("../pages/authPages/ForgotPassword"));
const Recover = lazy(() => import("../pages/authPages/Recover"));
const Register = lazy(() => import("../pages/authPages/Register"));

const Dashboard = lazy(() => import("../pages/Admin/dashboardPage/Dashboard"));

// ********************************

export const router = createBrowserRouter([
  {
    path: "*",
    element: (
      <MainLayout>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loading />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<Loading />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="/news/:type"
            element={
              <Suspense fallback={<Loading />}>
                <News />
              </Suspense>
            }
          />
          <Route
            path="/sponsor"
            element={
              <Suspense fallback={<Loading />}>
                <Sponsor />
              </Suspense>
            }
          />
          <Route
            path="/packs"
            element={
              <Suspense fallback={<Loading />}>
                <Packs />
              </Suspense>
            }
          />
          <Route
            path="/loading"
            element={
              <Suspense fallback={<Loading />}>
                <Loading />
              </Suspense>
            }
          />
          <Route
            path="/donation"
            element={
              <Suspense fallback={<Loading />}>
                <Donation />
              </Suspense>
            }
          />
        </Routes>
      </MainLayout>
    ),
  },
  {
    path: "login",
    element: (
      <Suspense fallback={<Loading />}>
        <LoginLayout>
          <Login />
        </LoginLayout>
      </Suspense>
    ),
  },
  {
    path: "register",
    element: (
      <Suspense fallback={<Loading />}>
        <LoginLayout>
          <Register />
        </LoginLayout>
      </Suspense>
    ),
  },
  {
    path: "forgot",
    element: (
      <Suspense fallback={<Loading />}>
        <LoginLayout>
          <ForgotPassword />
        </LoginLayout>
      </Suspense>
    ),
  },
  {
    path: "recover",
    element: (
      <Suspense fallback={<Loading />}>
        <LoginLayout>
          <Recover />
        </LoginLayout>
      </Suspense>
    ),
  },
  {
    path: "admin",
    element: (
      <MainAdminLayout>
        <Routes>
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={<Loading />}>
                <Dashboard />
              </Suspense>
            }
          />
        </Routes>
      </MainAdminLayout>
    ),
  },
]);
