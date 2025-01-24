import './login.scss';
import Logo from '../../assets/images/logo.png';

const Login = () => {
    return (
        <div className="login">
            <section className="image bg-secondary">
                <img src={Logo} alt="logo" />
            </section>

            <section className="welcome bg-white">
                <header>
                    <h1>Welcome</h1>
                </header>
            </section>
        </div>
    );
};
export default Login;
