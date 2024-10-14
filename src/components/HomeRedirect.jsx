import { Navigate } from 'react-router-dom';

const HomeRedirect = () => {
  const aToken = localStorage.getItem('aToken');
  const dToken = localStorage.getItem('dToken');

  if (aToken) {
    return <Navigate to="/admin-dashboard" />;
  } else if (dToken) {
    return <Navigate to="/doctor-dashboard" />;
  } else {
    return <Navigate to="/login" />;
  }
}

export default HomeRedirect