import { signIn } from '../../utils/auth';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = ` <h1 id="loginHeader">Welcome to Vocab-ing it up!</h1>
  <br>
  <button id="google-auth" class="btn btn-success">GOOGLE LOGIN</button>`;
  document.querySelector('#login-form-container').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
