
import { useState } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/auth";
import { logoutUser } from "./data/typesprofile";

import bill from "../../assets/Media/Images/bill.svg"

import logouts from "../../assets/Media/Images/log-out.svg"

import profile from "../../assets/Media/Images/profile.svg"

import setting from "../../assets/Media/Images/settings-2-tuner.svg"

type ActiveSection = "profile" | "billing" | "settings";

export default function AccountLayout() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isLoggingOut, setIsLoggingOut] = useState(false);
    const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

    // Determine active section based on current URL
    const getActiveSection = (): ActiveSection => {
        if (location.pathname.includes("billing") || location.pathname.includes("billings_invoices")) {
            return "billing";
        } else if (location.pathname.includes("settings")) {
            return "settings";
        }
        return "profile";
    };

    const activeSection = getActiveSection();

    const handleSectionClick = (section: ActiveSection) => {
        if (section === "profile") {
            navigate("/accounts/profile");
        } else if (section === "billing") {
            navigate("/accounts/billings_invoices");
        } else if (section === "settings") {
            navigate("/accounts/settings");
        }
        // Auto-close sidebar on mobile
        setIsSidebarOpen(false);
    };

    const handleLogout = async () => {
    if (isLoggingOut) return;

    setIsLoggingOut(true);

    try {
        await logoutUser();

        dispatch(logout());

        setIsLogoutModalOpen(false);

        navigate("/", { replace: true });
    } catch (error) {
        console.error("Logout error:", error);

        dispatch(logout());

        setIsLogoutModalOpen(false);

        navigate("/", { replace: true });
    } finally {
        setIsLoggingOut(false);
    }
};

    return (
        <div className="min-h-screen bg-white mt-[-50px]   relative">
            {/* Mobile Header - hide back button */}
            <div className="lg:hidden  left-0 right-0 z-40 bg-white px-2 py-3 flex items-center h-16 border-gray-200">
                {/* No back button for improved mobile UI */}
            </div>

            <div className="flex">
                {/* Sidebar toggle button for mobile */}
                <button
                    className="sidebar-toggle lg:hidden absolute text-2xl bg-blue-700 w-12 h-12 text-white 
                     rounded-full top-[90vh] fixed md:left-[90vw]   left-[83vw] z-50  "
                    onClick={() => setIsSidebarOpen(true)}
                    aria-label="Open sidebar"
                >
                    <span className="hamburger-icon ">&#9776;</span>
                </button>

                {/* Overlay for mobile sidebar */}
                {isSidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
                        onClick={() => setIsSidebarOpen(false)}
                    />
                )}

                {/* Sidebar */}
                <div className={`sidebar fixed lg:relative top-0 left-0 h-full lg:h-auto w-[280px] lg:w-[300px] flex-shrink-0 border-r border-[rgba(26,30,47,0.4)] bg-white z-50 lg:z-auto transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 flex flex-col pb-7 pt-6 lg:pt-0`}>
                    {/* Close button for mobile sidebar */}
                    <button
                        className="close-sidebar lg:hidden absolute top-8 text-3xl right-4 z-50"
                        onClick={() => setIsSidebarOpen(false)}
                        aria-label="Close sidebar"
                    >
                        &times;
                    </button>
                    {/* ...existing sidebar content... */}

                    <div className="flex flex-col lg:gap-3 gap-5 flex-1 mt-10 lg:mt-0 px-4 lg:px-0">


                        <div className="px-4 mt-0 sm:mt-10 lg:px-10">
                            <button
                                onClick={() => navigate("/user_dashboard", { replace: true })}
                                className="flex items-center gap-2 py-3 lg:py-10 lg:pb-[10px] w-full"
                            >
                                <i className="ri-dashboard-fill text-xl mt-2 text-[rgba(26,33,47,0.7)]"></i>
                                <span className="text-[rgba(26,33,47,0.7)] mt-2 cursor-pointer font-semibold text-lg leading-[93%]">
                                    Dashboard
                                </span>
                            </button>
                        </div>


                        {/* Profile */}
                        <button
                            onClick={() => handleSectionClick("profile")}
                            className={`flex items-center cursor-pointer gap-3 px-4 lg:px-10 py-4 lg:py-5 w-full ${activeSection === "profile" ? "bg-[rgba(23,76,210,0.06)]" : "hover:bg-gray-50"}`}
                        >
                            <img src={profile} alt="profile" />
                            <span className={`flex-1 text-left font-semibold text-base ${activeSection === "profile" ?
                                "text-[#174CD2]" : "text-[rgba(26,33,47,0.7)]"}`}>
                                Profile
                            </span>



                        </button>
                        {/* ...existing navigation items... */}
                        {/* Billing and Invoices */}
                        <button
                            onClick={() => handleSectionClick("billing")}
                            className={`flex items-center cursor-pointer gap-3 px-4 lg:px-10 py-4 lg:py-5 w-full ${activeSection === "billing" ? "bg-[rgba(23,76,210,0.06)]" : "hover:bg-gray-50"}`}
                        >
                            <img src={bill} alt="bill" />
                            <span className={`flex-1 text-left font-semibold text-base ${activeSection === "billing" ? "text-[#174CD2]" : "text-[rgba(26,33,47,0.7)]"}`}>
                                Billing and Invoices
                            </span>
                        </button>
                        {/* Settings */}
                        <button
                            onClick={() => handleSectionClick("settings")}
                            className={`flex items-center cursor-pointer gap-3 px-4 lg:px-10 py-4 lg:py-5 w-full ${activeSection === "settings" ? "bg-[rgba(23,76,210,0.06)]" : "hover:bg-gray-50"}`}
                        >

                            <img src={setting} alt="setting" />
                            <span className={`flex-1 text-left font-semibold text-base ${activeSection === "settings" ? "text-[#174CD2]" : "text-[rgba(26,33,47,0.7)]"}`}>
                                Settings
                            </span>
                        </button>


                        {/* Logout */}
                        <button
                            onClick={() => setIsLogoutModalOpen(true)}
                            disabled={isLoggingOut}
                            className="flex items-center cursor-pointer gap-3 px-4 lg:px-10 py-4 lg:py-5 w-full hover:bg-gray-50 disabled:opacity-50"
                        >
                            <img src={logouts} alt="Logout" />
                            <span className="flex-1 text-left text-[#CE2823] font-semibold text-base">
                                Logout
                            </span>
                        </button>



                    </div>
                </div>



          {isLogoutModalOpen && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
        <div className="relative w-full max-w-[500px] rounded-[24px] bg-white px-8 py-10 ">

            {/* Close Button */}
            <button
                onClick={() => setIsLogoutModalOpen(false)}
                className="absolute right-6 top-6 text-4xl leading-none text-[#1A2130] hover:opacity-70"
            >
                ×
            </button>

            {/* Logout Icon */}
            <div className="flex justify-center">
                <div className="flex sm:h-[90px] sm:w-[90px]   h-[80px] w-[80px] items-center justify-center rounded-full bg-[#FFD8AE]">
                    <svg
                        width="34"
                        height="54"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#D92D20"
                        strokeWidth="2.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                        <path d="M10 17l-5-5 5-5" />
                        <path d="M5 12h10" />
                    </svg>
                </div>
            </div>

            {/* Heading */}
            <h2 className="mt-8 text-center text-xl  sm:text-3xl md:text-3xl font-semibold leading-none text-[#1A2130]">
                Logout?
            </h2>

            {/* Description */}
            <p className="mt-5 text-center text-[20px] leading-8 text-[#6B7280]">
                Are you sure you want to log out of Deep
                <br />
                Eigen?
            </p>

            {/* Buttons */}
            <div className="mt-10 flex justify-center gap-5">

                <button
                    onClick={() => setIsLogoutModalOpen(false)}
                    className="sm:h-[55px] sm:w-[120px] h-[50px] w-[100px] rounded-xl bg-[#174CD2] sm:text-[18px] md:text-[18px] text-[16px]  font-semibold text-white transition hover:bg-[#123ca7]"
                >
                    Cancel
                </button>

                <button
                    onClick={handleLogout}
                    disabled={isLoggingOut}
                    className="sm:h-[55px] sm:w-[122px] h-[50px] w-[100px] rounded-xl border border-[#EF4444] bg-white sm:text-[18px] md:text-[18px]  text-[16px]  font-semibold text-[#EF4444] transition hover:bg-red-50 disabled:opacity-50"
                >
                    {isLoggingOut ? "..." : "Logout"}
                </button>

            </div>
        </div>
    </div>
)}

                {/* Main Content */}
                <div className="flex-1 flex flex-col px-6 lg:px-12 pt-8 lg:pt-14 min-h-screen overflow-x-hidden">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

