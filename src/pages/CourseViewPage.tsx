import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { selectIsAuthenticated } from "../redux/slices/auth/index";
import CourseView from "../components/courseView"

const CourseViewPage = () => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return (
    <div>
      <CourseView />
    </div>
  )
}

export default CourseViewPage