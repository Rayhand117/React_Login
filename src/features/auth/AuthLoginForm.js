import { useDispatch, useSelector } from "react-redux";
import {Container, Form, Button, Alert, Spinner} from "react-bootstrap";
import {useState} from "react";
import {authLoginApi} from "./authSlice";
import './Login.css'

const AuthLoginForm = () => {
  const authState = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const doSubmit = (e) => {
    e.preventDefault();
    dispatch(authLoginApi({ email, password }));
    setEmail('');
    setPassword('');
  }

  return (
    <Container>
      <div className="popup">
        Login as admin
        <div className="form-element">
          <label for="email">Email</label>
          <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="admin" id="email" />
        </div>
        <div className="form-element">
          <label for="password">Password</label>
          <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="admin" id="password" />
        </div>
        <Button disabled={!!authState?.isLoginPending} onClick={doSubmit} variant="primary" type="submit">
          {!!authState?.isLoginPending ? (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : "Submit"}
        </Button>
      <div>
        {!!authState?.errorMessage && (
          <Alert variant="danger">
            {authState?.errorMessage}
          </Alert>
        )}
        {!!authState?.isLoginSuccess && (
          <Alert variant="primary">
            Success login, hello {authState?.user?.email}
          </Alert>
        )}

      </div>
      </div>
    </Container>
  )
}

export default AuthLoginForm;