import { FC } from 'react';
import { useNavigate } from '@yourServiceName/router';

import { AuthPageBackground, FormBox } from './common';
import { signUp } from '@yourServiceName/amplify';

const SignUp: FC = () => {
  const navigate = useNavigate();

  const handleOnSubmit = async (event: any) => {
    // const { username, email, password } = formValues;
    // try {
    //   await signUp(username, email, password);
    //   // Navigate to login page to initiate login flow
    //   navigate('/login');
    // } catch (error) {
    //   // TODO: Handle Error
    //   console.log('Error occurred while signing up', error);
    // }
  };

  return (
    <AuthPageBackground>
      <FormBox>
        <h2>Welcome to CosmoCloud</h2>
        <button>Login with Google</button>
        <hr>OR</hr>
        <form onSubmit={handleOnSubmit}>
          <span>
            <input name="username" placeholder="Username" />
          </span>
          <span>
            <input name="email" placeholder="Email" />
          </span>
          <span>
            <input name="password" type="password" placeholder="Password" />
          </span>
          <span>
            <input
              name="confirmedPassword"
              type="password"
              placeholder="Confirm Password"
            />
          </span>
          <span>
            <button type="submit">Sign Up</button>
          </span>
        </form>
        <p>Already have an account? Log in</p>
      </FormBox>
    </AuthPageBackground>
  );
};

export default SignUp;
