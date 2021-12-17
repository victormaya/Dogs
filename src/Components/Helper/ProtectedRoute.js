import React from 'react';
import { Navigate } from 'react-router';
import { UserContext } from '../../UserContext';

// import { Container } from './styles';

function ProtectedRoute({ children }) {
  const { login } = React.useContext(UserContext);
  return login ? children : <Navigate to='/login' />;
}

export default ProtectedRoute;
