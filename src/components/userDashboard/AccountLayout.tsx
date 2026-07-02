
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
            // Call the backend logout API
            await logoutUser();

            // Clear Redux state
            dispatch(logout());

            // Navigate to home page
            navigate("/", { replace: true });
        } catch (error) {
            console.error("Logout error:", error);
            // Even on error, clear local state and redirect
            dispatch(logout());
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
                            onClick={handleLogout}
                            disabled={isLoggingOut}
                            className="flex items-center cursor-pointer gap-3 px-4 lg:px-10 py-4 lg:py-5 w-full hover:bg-gray-50 disabled:opacity-50"
                        >
                           <img src={logouts} alt="logouts" />
                            <span className="flex-1 text-left text-[#CE2823] font-semibold text-base">
                                {isLoggingOut ? "Logging out..." : "Logout"}
                            </span>
                        </button>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 flex flex-col px-6 lg:px-12 pt-8 lg:pt-14 min-h-screen overflow-x-hidden">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

