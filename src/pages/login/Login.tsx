import './login.scss';
import Logo from '../../assets/images/logo.png';
import SignIn from '../../assets/images/sign-in.png';

const Login = () => {
    return (
        <div className="login">
            <section className="image bg-secondary">
                <img src={Logo} alt="logo" className="logoImg" />

                <div className="welImg">
                    <img src={SignIn} alt="Sign image" />
                </div>
            </section>

            <section className="welcome bg-white">Welcome</section>
        </div>
    );
};
export default Login;
