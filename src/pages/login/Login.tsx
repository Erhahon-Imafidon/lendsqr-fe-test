import './login.scss';
import Logo from '../../assets/images/logo.png';
import SignIn from '../../assets/images/sign-in.png';

const Login = () => {
    return (
        <div className="login">
            <section className="image bg-secondary">
                <img src={Logo} alt="logo" className="logoImg" />

                <div></div>
            </section>

            <section className="welcome bg-white"></section>
        </div>
    );
};
export default Login;
