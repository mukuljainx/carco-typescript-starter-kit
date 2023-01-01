import { Route, Routes, withPath } from '@yourServiceName/router';
import Authenticated from '@yourServiceName/components/auth/Authenticated';
import SignUp from './Auth/SignUp';

const PrivatePages = () => {
  return (
    <Authenticated>
      <Routes>
        <Route {...withPath('home')} element={<>Home</>} />
      </Routes>
    </Authenticated>
  );
};

const Pages = () => {
  return (
    <Routes>
      <Route {...withPath('signUp')} element={<SignUp />} />

      {/* Private pages */}
      <Route {...withPath('*')} element={<PrivatePages />} />
    </Routes>
  );
};

export default Pages;
