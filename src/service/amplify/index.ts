import { Auth, Hub } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { Amplify } from 'aws-amplify';
import { AmplifyAuthConfig } from './config';

export function initiateAmplify() {
  Amplify.configure({
    Auth: AmplifyAuthConfig,
  });
}

export async function getCurrentUser() {
  const user = await Auth.currentAuthenticatedUser();

  return user;
}

export async function signIn(username: string, password: string) {
  const user = await Auth.signIn(username, password);

  return user;
}

export function signInWithGoogle() {
  try {
    Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google });
  } catch (error) {
    console.log('error in google login', error);
  }
}

export async function signOut() {
  try {
    await Auth.signOut();
  } catch (error) {
    console.log('error signing out: ', error);
  }
}

export async function globalSignOut() {
  try {
    await Auth.signOut({ global: true });
  } catch (error) {
    console.log('error signing out: ', error);
  }
}

export async function signUp(
  username: string,
  email: string,
  password: string
) {
  const { user } = await Auth.signUp({
    username,
    password,
    attributes: { email },
    autoSignIn: {
      enabled: true,
    },
  });

  return user;
}

export async function confirmSignUp(username: string, code: string) {
  await Auth.confirmSignUp(username, code);
}

export async function resendConfirmationCode(username: string) {
  try {
    await Auth.resendSignUp(username);
    console.log('code resent successfully');
  } catch (err) {
    console.log('error resending code: ', err);
  }
}

export async function initiateForgotPassword(username: string) {
  const data = await Auth.forgotPassword(username);

  return data;
}

export async function confirmForgotPassword(
  username: string,
  code: string,
  newPassword: string
) {
  const data = await Auth.forgotPasswordSubmit(username, code, newPassword);

  return data;
}

// TODO -- https://docs.amplify.aws/lib/auth/start/q/platform/js/#re-use-existing-authentication-resource
export function listenToAutoSignInEvent() {
  Hub.listen('auth', ({ payload }) => {
    const { event } = payload;
    if (event === 'autoSignIn') {
      // const user = payload.data;
      // assign user
    } else if (event === 'autoSignIn_failure') {
      // redirect to sign in page
    }
  });
}
