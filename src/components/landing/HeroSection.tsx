import certificates from "../../assets/Hero/Images/certificate.svg";
import books from "../../assets/Hero/Images/books.svg";
import lab from "../../assets/Hero/Images/lab.svg";
import teacher from "../../assets/Hero/Images/teacher.svg";
import note from "../../assets/Hero/Images/note.svg";

import banner_video from "../../assets/Hero/Videos/Web-Video-1.mp4";
import robo_video from "../../assets/Hero/Videos/Deep-Eigen-Website-Hero-1.mp4";

import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();



  const mobileFeatures = [
    { img: books, label: "Basic to Advanced Courses" },
    { img: lab, label: "Access to Research Tools" },
    { img: teacher, label: "Experienced Coach" },
    { img: note, label: "Hands on Training" },
    { img: certificates, label: "Earn Certificates" },
  ];

  return (
    <>
      <div className="w-full mx-auto p-6 box-border sm:px-[10vw]">
        {/* Brilliance Initiated Banner */}
        <div className="relative flex justify-center items-center h-[clamp(8rem,18vw,12rem)] w-full rounded-[1.25rem] overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover z-0"
            src={banner_video}
            autoPlay
            loop
            muted
            playsInline
          ></video>
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[0.4rem] z-[1]"></div>
          <h1 className="text-white uppercase tracking-[0.26em] font-semibold text-[clamp(1.5rem,2vw+1rem,2.5rem)] text-center z-[2]">
            Brilliance Initiated
          </h1>
        </div>

        {/* Hero Section */}
        <section className="mt-7 rounded-[1.25rem] bg-gradient-to-b from-[#DCEBF4] to-[#FEF1FF] flex flex-col md:flex-row gap-8 md:gap-[2vw] items-center md:items-start justify-between py-10 md:py-[10vh] px-6 md:px-[5vw]">
          {/* Left Content */}
          <div className="flex flex-col gap-6 md:gap-[1.7rem] flex-1 w-full md:max-w-[50%] text-center md:text-left">
            <div>
              <h2 className="text-[#1A212F] font-normal tracking-[0.02em] leading-[1.1] text-[clamp(2rem,3vw+1rem,3.5rem)]">
                Master <br /> State-of-the-Art AI
              </h2>

              <p className="max-w-[30rem] mx-auto md:mx-0 text-[#1A212F]/70 text-[clamp(1rem,1vw+0.5rem,1.375rem)] leading-[1.6] mt-4">
                Expert-led courses and an independent AI research lab advancing
                cutting-edge machine learning, computer vision, and robotics
              </p>
            </div>
            <button
              className="inline-flex h-[3.25rem] items-center justify-center px-10 md:px-[4.25rem] rounded-lg bg-[#174CD2] text-white font-bold text-lg border-none cursor-pointer transition-colors duration-300 ease-in-out w-fit mx-auto md:mx-0 hover:bg-[#0e38a5]"
              onClick={() => navigate("/showallcourses")}
            >
              Join Now
            </button>
          </div>

          {/* Right Content - Hero Video */}
          <div className="w-full flex-1 md:max-w-[45%] flex items-center justify-center">
            <div className="relative h-[45vw] sm:h-[30vw] md:h-[20vw] w-full rounded-[20rem] bg-white overflow-hidden">
              <video
                className="absolute inset-0 w-full h-full object-cover z-0 "
                src={robo_video }
                autoPlay
                loop
                muted
                playsInline
              ></video>
            </div>
          </div>
        </section>

        {/* Feature Cards - Tablet & Desktop (md and up) */}
        <section className="hidden md:grid w-[92%] mx-auto sm:-mt-12  grid-cols-2 gap-6 max-[992px]:grid-cols-1">
          {/* Courses Card */}
          <div className="relative bg-white rounded-[20px] px-6 py-8 shadow-[0_5px_18px_rgba(0,0,0,0.12)]">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#dce8ff] text-[#2c3e63] px-[18px] py-[7px] rounded-full text-[15px] font-semibold whitespace-nowrap">
              Courses
            </div>

            <div className="flex items-center justify-between">
              <div className="flex-1 flex flex-col items-center justify-center text-center px-4 min-h-[110px]">
                <img src={books} alt="" className="w-[42px] h-[42px] object-contain mb-3" />
                <p className="text-base text-[#333] leading-[1.4] font-medium">
                  Basic to Advanced Courses
                </p>
              </div>

              <div className="w-px h-[55px] bg-[#d8d8d8]" />

              <div className="flex-1 flex flex-col items-center justify-center text-center px-4 min-h-[110px]">
                <img src={note} alt="" className="w-[42px] h-[42px] object-contain mb-3" />
                <p className="text-base text-[#333] leading-[1.4] font-medium">
                  Hands <br /> on Training
                </p>
              </div>

              <div className="w-px h-[55px] bg-[#d8d8d8]" />

              <div className="flex-1 flex flex-col items-center justify-center text-center px-4 min-h-[110px]">
                <img src={teacher} alt="" className="w-[42px] h-[42px] object-contain mb-3" />
                <p className="text-base text-[#333] leading-[1.4] font-medium">
                  Experienced <br /> Coach
                </p>
              </div>
            </div>
          </div>

          {/* Research Labs Card */}
          <div className="relative bg-white rounded-[20px] px-6 py-8 shadow-[0_5px_18px_rgba(0,0,0,0.12)]">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#dce8ff] text-[#2c3e63] px-[18px] py-[7px] rounded-full text-[15px] font-semibold whitespace-nowrap">
              Research Labs
            </div>

            <div className="flex items-center justify-between">
              <div className="flex-1 flex flex-col items-center justify-center text-center px-4 min-h-[110px]">
                <img src={certificates} alt="" className="w-[42px] h-[42px] object-contain mb-3" />
                <p className="text-base text-[#333] leading-[1.4] font-medium">
                  Earn <br /> Certificates
                </p>
              </div>

              <div className="w-px h-[55px] bg-[#d8d8d8]" />

              <div className="flex-1 flex flex-col items-center justify-center text-center px-4 min-h-[110px]">
                <img src={lab} alt="" className="w-[42px] h-[42px] object-contain mb-3" />
                <p className="text-base text-[#333] leading-[1.4] font-medium">
                  Access to Research Tools
                </p>
              </div>

              <div className="w-px h-[55px] bg-[#d8d8d8]" />

              <div className="flex-1 flex flex-col items-center justify-center text-center px-4 min-h-[110px]">
                <img src={books} alt="" className="w-[42px] h-[42px] object-contain mb-3" />
                <p className="text-base text-[#333] leading-[1.4] font-medium">
                  Industry Projects
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Grid - Mobile only (below md), flat, no card/labels/dividers */}
        <section className="md:hidden bg-white rounded-[20px] mx-auto mt-6 px-6 py-8 shadow-[0_5px_18px_rgba(0,0,0,0.12)] relative z-10">
          <div className="grid grid-cols-2 gap-x-5 gap-y-8">
            {mobileFeatures.map((feature, i) => (
              <div
                key={feature.label}
                className={`flex flex-col items-center justify-center text-center gap-3 ${
                  i === mobileFeatures.length - 1 ? "col-span-2 justify-self-center max-w-[180px]" : ""
                }`}
              >
                <img src={feature.img} alt="" className="w-[46px] h-[46px] object-contain" />
                <p className="text-base text-[#333] leading-[1.35] font-medium">
                  {feature.label}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}