import { Navigate } from 'react-router-dom';

const ProtectedRoute = (props) => {
  return props.isLoggedIn ? props.children : <Navigate to='/' />;
};

export default ProtectedRoute;