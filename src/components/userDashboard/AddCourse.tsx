import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
// import { getRequest } from "../../utils/api"; // adjust path
import api from "../../lib/api";
import { useAppSelector } from "../../redux/hooks";
import { selectIsAuthenticated } from "../../redux/slices/auth";




interface Course {
  id: number;
  title: string;
  meta_description?: string;
  course_description?: string;
  course_image: string;
  duration: string;
  category: string;
  assignments?: number;
  indian_fee: number;
  foreign_fee: number;
  originalPrice?: string;
  url_link_name?: string;
  level?: string;
}

const AddCourse = () => {
  const navigate = useNavigate();
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  //   useEffect(() => {
  //   const fetchCourses = async () => {
  //     try {
  //       setLoading(true);

  //       const res = await csrfFetch(`${API_BASE}/courses/`);

  //       if (res?.data?.success && res.data.courses) {
  //         const mappedCourses = res.data.courses.map((course: any) => ({
  //           ...course,
  //           course_image: course.course_image
  //             ? course.course_image.startsWith("http")
  //               ? course.course_image
  //               : `http://localhost:8000${course.course_image}`
  //             : "https://via.placeholder.com/300x200?text=Course+Image",
  //         }));

  //         setCourses(mappedCourses);
  //       } else {
  //         setError("Invalid API response");
  //       }

  //     } catch (err: any) {
  //       setError(err.message || "Something went wrong");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchCourses();
  // }, []);
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);

        const response = await api.get("/courses/");
        const res = response.data;

        if (res?.success && res.courses) {
          const mappedCourses = res.courses.map((course: any) => ({
            ...course,
            course_image: course.course_image
              ? course.course_image.startsWith("http")
                ? course.course_image
                : `${api.defaults.baseURL}${course.course_image}`
              : "https://via.placeholder.com/300x200?text=Course+Image",
          }));

          setCourses(mappedCourses);
        } else {
          setError("Invalid API response");
        }

      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);


  //  useEffect(() => {
  //   const fetchCourses = async () => {
  //     try {
  //       setLoading(true);

  //       const response = await csrfFetch("/courses/", {
  //         method: "GET",
  //       });

  //       if (!response.ok) {
  //         throw new Error(`Request failed: ${response.status}`);
  //       }

  //       const res = await response.json();

  //       if (res?.success && res.courses) {
  //         const mappedCourses = res.courses.map((course: any) => ({
  //           ...course,
  //           course_image: course.course_image
  //             ? course.course_image.startsWith("http")
  //               ? course.course_image
  //               : `http://localhost:8000${course.course_image}`
  //             : "https://via.placeholder.com/300x200?text=Course+Image",
  //         }));

  //         setCourses(mappedCourses);
  //       } else {
  //         setError("Invalid API response");
  //       }

  //     } catch (err: any) {
  //       setError(err.message || "Something went wrong");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchCourses();
  // }, []);




  return (
    <section className="py-6 sm:py-10 lg:py-12 bg-gray-50 min-h-screen">
      <div className="w-full max-w-[95vw] sm:max-w-[88vw] lg:max-w-[82vw] mx-auto px-3 sm:px-5 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigate("/user_dashboard")}
          className="mb-4 text-base sm:text-lg font-medium text-black flex items-center gap-2"
        >
          <i className="ri-arrow-left-line"></i> Back
        </button>

        {/* Header */}
        <div className="mb-6 sm:mb-10">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#1a1f36]">
            Select a course
          </h1>
          <p className="text-sm sm:text-base text-gray-500 mt-1">
            View all your courses and track its progress
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <p className="text-base text-gray-600">Loading courses...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-12">
            <p className="text-base text-red-600">Error: {error}</p>
          </div>
        )}

        {/* Cards Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden flex flex-col"
              >
                {/* Image */}
                <img
                  src={course.course_image}
                  alt={course.title}
                  className="w-full h-44 sm:h-48 lg:h-52 object-cover"
                />

                {/* Content */}
                <div className="p-4 sm:p-5 lg:p-6 flex flex-col flex-1">
                  <h3 className="text-base sm:text-lg font-semibold text-[#1a1f36] mb-2 line-clamp-2">
                    {course.title}
                  </h3>

                  <p className="text-sm sm:text-sm text-gray-500 leading-relaxed mb-4 line-clamp-3">
                    {course.meta_description ||
                      course.course_description ||
                      "No description available"}
                  </p>

                  {/* Meta */}
                  <div className="grid grid-cols-3 text-xs sm:text-sm text-gray-600 mb-4 gap-x-1">
                    <div>
                      <p className="text-gray-500 text-md sm:text-sm ">Duration</p>
                      <p className="font-medium text-xs sm:text-sm truncate">{course.duration}</p>
                    </div>

                    <div className="text-start   border-x px-4">
                      <p className="text-gray-500 text-md sm:text-sm">Category</p>
                      <p className="font-medium text-xs sm:text-sm truncate">{course.category}</p>
                    </div>

                    <div className="text-start ml-4">
                      <p className="text-gray-500 text-md sm:text-sm">Level</p>
                      <p className="font-medium text-xs sm:text-sm truncate">{course.level || "N/A"}</p>
                    </div>
                  </div>

                  <hr className="mb-4" />

                  {/* Footer */}
                  <div className="mt-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex items-end gap-2">
                      <span className="text-lg sm:text-xl font-semibold text-[#1a1f36]">
                        ₹ {course.indian_fee}
                      </span>
                    </div>

                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        const buyCourseUrl = `/buycourse/${course.id}/${course.url_link_name ||
                          course.title.toLowerCase().replace(/\s+/g, "-")
                          }`;
                        if (!isAuthenticated) {
                          navigate("/login", { state: { from: buyCourseUrl } });
                        } else {
                          navigate(buyCourseUrl);
                        }
                      }}
                      className="w-full sm:w-auto text-center px-5 py-2.5 bg-[#1f4bd8] text-white rounded-lg text-sm font-medium hover:bg-[#163bb0] transition"
                    >
                      Buy Course
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AddCourse;


