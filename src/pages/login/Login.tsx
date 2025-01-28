import './login.scss';
import Logo from '../../assets/images/logo.png';
import SignIn from '../../assets/images/sign-in.png';
import { Header, AppInput } from '../../components/index.ts';

const Login = () => {
    return (
        <div className="login">
            <section className="image bg-secondary">
                <img src={Logo} alt="logo" className="logoImg" />

                <div className="welImg">
                    <img src={SignIn} alt="Sign image" />
                </div>
            </section>

            <section className="welcome bg-white">
                <Header
                    title={'Welcome!'}
                    subTitle={'Enter details to login.'}
                />

                <form>
                    <AppInput placeholder="Email" />

                    <AppInput
                        placeholder="Password"
                        type="password"
                        isShown={true}
                    />
                </form>
            </section>
        </div>
    );
};

export default Login;
