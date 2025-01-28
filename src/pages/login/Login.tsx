import { useState } from 'react';
import Logo from '../../assets/images/logo.png';
import SignIn from '../../assets/images/sign-in.png';
import { Header, AppInput } from '../../components/index.ts';
import './login.scss';

const Login = () => {
    const [showPwd, setShowPwd] = useState(false);

    const handleShowPwd = () => {
        setShowPwd(!showPwd);
    };

    return (
        <div className="login">
            <section className="image bg-secondary-light-5">
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
                        type={showPwd ? 'text' : 'password'}
                        isShown={true}
                        onClick={handleShowPwd}
                    />
                </form>
            </section>
        </div>
    );
};

export default Login;
